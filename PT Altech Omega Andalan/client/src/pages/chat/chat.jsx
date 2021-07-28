import { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "./chat.module.css";
import axiosApiIntances from "../utils/axios";
import { useState } from "react";
import io from "socket.io-client";

export default function Chat(props) {
  const userId = useState(sessionStorage.getItem("user_id") || "");
  const userName = useState(sessionStorage.getItem("user_name") || "");
  const [roomChat, setRoomChat] = useState([]);
  const [dataRoomChat, setDataRoomChat] = useState({});
  const [isShowCreateGroup, setIsShowCreateGroup] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [DataCreateGroup, setDataCreateGroup] = useState({
    userId: userId[0],
    roomChatName: "",
  });
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [showAddMember, setShowAddMember] = useState(false);
  const [addMemberName, setAddMemberName] = useState("");
  console.log(messages);

  useEffect(() => {
    setupSocket();
    if (sessionStorage.getItem("user_id") === null) {
      props.history.push("/login");
    }
    getRoomChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("chatMessage", (dataMessage) => {
        setMessages([...messages, dataMessage]);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket, messages]);

  const setupSocket = () => {
    const newSocket = io.connect("http://localhost:3006", {
      path: "/backend/socket.io",
    });
    newSocket.on("connect", () => {
      console.log("Connect Socket Client !");
    });
    setSocket(newSocket);
  };

  const changeTextMessage = (event) => {
    setMessage(event.target.value);
  };

  // setTimeout(() => {
  //   getRoomChat();
  // }, 10000);

  const changeTextInputGroup = (event) => {
    setDataCreateGroup({
      userId: userId[0],
      roomChatName: event.target.value,
    });
  };

  const handleSendMessage = (event) => {
    if (event.key === "Enter") {
      if (message !== "") {
        const setData = {
          user_name: userName[0],
          message,
        };
        socket.emit("globalMessage", setData);
        axiosApiIntances
          .post("message", {
            message,
            roomChatName: dataRoomChat.room_chat_name,
            roomChatNumber: dataRoomChat.room_chat_number,
            userId: dataRoomChat.user_id,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err.response);
          });
      }
      setMessage("");
    }
  };

  const getRoomChat = () => {
    axiosApiIntances
      .get(`/room-chat/${userId[0]}`)
      .then((res) => {
        setRoomChat(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const selectChat = (data) => {
    setShowChat(true);
    setDataRoomChat(data);
    axiosApiIntances
      .get(`message/${data.room_chat_number}`)
      .then((res) => {
        setMessages(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const createRoomChat = () => {
    if (DataCreateGroup.roomChatName === "") {
      alert("input group name first");
    } else {
      axiosApiIntances
        .post("create-chat", DataCreateGroup)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          console.log(err.response);
        });
      setIsShowCreateGroup(false);
      getRoomChat();
    }
    setDataCreateGroup({
      userId: userId[0],
      roomChatName: "",
    });
  };

  const showInputGropChat = () => {
    setIsShowCreateGroup(!isShowCreateGroup);
  };

  const handleLeaveGroup = () => {
    console.log(dataRoomChat);
    if (window.confirm("Yakin ingin Leave Group ?")) {
      axiosApiIntances
        .delete(
          `room-chat?roomChatNumber=${dataRoomChat.room_chat_number}&userId=${dataRoomChat.user_id}`
        )
        .then(() => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  const handleAddMember = () => {
    setShowAddMember(!showAddMember);
  };

  const AddMemberAndCreateRoomChat = () => {
    axiosApiIntances(`user?id=${userId[0]}&search=${addMemberName}`)
      .then((res) => {
        const setData = {
          userId: res.data.data[0].user_id,
          roomChatNumber: dataRoomChat.room_chat_number,
          roomChatName: dataRoomChat.room_chat_name,
        };
        if (res.data.data.length === 0) {
          alert("User Not found");
        } else {
          createRoomChatNewMember(setData);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const createRoomChatNewMember = (data) => {
    axiosApiIntances
      .post("create-chat-member", data)
      .then(() => {
        alert("Success add new member");
        setShowAddMember(!showAddMember);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const changeTextAddMember = (event) => {
    setAddMemberName(event.target.value);
  };

  const handleLogout = () => {
    if (window.confirm("Yakin ingin logout ?")) {
      sessionStorage.clear();
      props.history.push("/login");
    }
  };

  return (
    <>
      <Container fluid>
        <Row className={styles.row}>
          <Col md={4} className={styles.colLeft}>
            <h4>Hai {userName}</h4>
            <div className={styles.btnSearchCreate}>
              <h6 onClick={showInputGropChat}>Create Group</h6>
              <h6 onClick={handleLogout}>Logout</h6>
            </div>
            <div
              style={
                !isShowCreateGroup ? { display: "none" } : { display: "flex" }
              }
              className={styles.inputGroupName}
            >
              <input
                type="text"
                placeholder="Input group name"
                value={DataCreateGroup.roomChatName}
                onChange={(e) => changeTextInputGroup(e)}
              />
              <h4 onClick={createRoomChat}>Create</h4>
              <h4 onClick={showInputGropChat} className={styles.cancel}>
                x
              </h4>
            </div>
            <div className={styles.chat}>
              {roomChat.map((item, index) => {
                return (
                  <h5 onClick={() => selectChat(item)} key={index}>
                    {item.room_chat_name}
                  </h5>
                );
              })}
            </div>
          </Col>
          {showChat ? (
            <Col md={8} className={styles.colRight}>
              <Col className={styles.top}>
                <h5>{dataRoomChat.room_chat_name}</h5>
                <div className={styles.buttonLeaveAndAd}>
                  {showAddMember ? (
                    <div className={styles.addMember}>
                      <input
                        type="text"
                        placeholder="Search member name"
                        onChange={(e) => changeTextAddMember(e)}
                      />
                      <h4 onClick={AddMemberAndCreateRoomChat}>Add Member</h4>
                    </div>
                  ) : (
                    <h4 onClick={handleAddMember}>Add Member</h4>
                  )}

                  <h4 onClick={handleLeaveGroup}>Leave</h4>
                </div>
              </Col>
              <Col className={styles.messages}>
                {messages.map((item, index) => {
                  return (
                    <div key={index}>
                      <span>{item.user_name + " : " + item.message}</span>
                    </div>
                  );
                })}
              </Col>
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(event) => changeTextMessage(event)}
                onKeyPress={handleSendMessage}
              />
            </Col>
          ) : (
            <Col md={8} className={styles.colRight2}>
              Select a chat
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}
