import { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "./chat.module.css";

export default function Chat(props) {
  useEffect(() => {
    if (sessionStorage.getItem("user_id") === null) {
      props.history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container fluid>
        <Row className={styles.row}>
          <Col md={4} className={styles.colLeft}>
            <h4>Hai {sessionStorage.getItem("user_name")}</h4>
            <div className={styles.btnSearchCreate}>
              <h5>Create Chat</h5>
              <h5>Search Group</h5>
            </div>
            <div className={styles.chat}>
              <h5>Group Chat 1</h5>
              <h5>Group Chat 2</h5>
            </div>
          </Col>
          <Col md={8} className={styles.colRight}>
            <Col className={styles.top}>
              <h5>Group Name 1</h5>
              <div className={styles.mmemberNames}>
                <h6>Rifqi,</h6>
                <h6> Ziyad,</h6>
                <h6> Imtinan,</h6>
              </div>
            </Col>
            <Col className={styles.messages}>
              <div>
                <span>Hai</span>
              </div>
              <div>
                <span>Halo</span>
              </div>
            </Col>
            <input type="text" placeholder="Type your message..." />
          </Col>
        </Row>
      </Container>
    </>
  );
}
