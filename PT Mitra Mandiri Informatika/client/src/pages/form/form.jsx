import React, { useEffect, useState } from "react";
import styles from "./form.module.css";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import axiosApiIntances from "../../utils/axios";

export default function FormPage(props) {
  const [form, setForm] = useState({
    name: "",
    date: "",
    position: "",
    nip: "",
    gender: "",
  });
  const [dataPosition, setDataPosition] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    getDataPosition();
    if (localStorage.getItem("id") !== null) {
      setUpdateData();
    }
  }, []);

  const setUpdateData = () => {
    setForm({
      name: localStorage.getItem("name"),
      date: localStorage.getItem("birthDay"),
      position: "",
      nip: localStorage.getItem("nip"),
      gender: "",
    });
    setIsUpdate(true);
  };

  const changeText = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handlePosition = (event) => {
    setForm({
      ...form,
      position: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (window.confirm("Apakah anda akan menyimpan data ini ?")) {
      console.log("Create");
      const setData = {
        name: form.name,
        birthDate: form.date,
        idNumber: form.nip,
        gender: form.gender,
      };

      axiosApiIntances
        .post(`/form/${form.position}`, setData)
        .then((res) => {
          alert(res.data.data.msg);
          props.history.push("/");
        })
        .catch((err) => {
          console.log(err.response);
          alert(err.response.data.msg);
        });
    }
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    if (window.confirm("Apakah anda akan menyimpan data ini ?")) {
      console.log("Update");
      const setData = {
        name: form.name,
        birthDate: form.date,
        idNumber: form.nip,
        positionId: form.position,
        gender: form.gender,
      };
      console.log(setData);
      axiosApiIntances
        .patch(`/form/update/${localStorage.getItem("id")}`, setData)
        .then(() => {
          props.history.push("/");
          localStorage.clear();
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  const getDataPosition = () => {
    axiosApiIntances
      .get("/form/position")
      .then((res) => {
        setDataPosition(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <>
      <Container className={styles.container}>
        <Col className={styles.main}>
          <h5>Add Data Karyawan</h5>
          <Form
            className={styles.form}
            onSubmit={isUpdate ? handleUpdate : handleSubmit}
          >
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Nama
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Input Name"
                  name="name"
                  onChange={(e) => changeText(e)}
                  value={form.name}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Tanggal Lahir
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="date"
                  name="date"
                  onChange={(e) => changeText(e)}
                  value={form.date}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Jabatan
              </Form.Label>
              <Col sm={10}>
                <Form.Select
                  defaultValue="Choose..."
                  onChange={handlePosition}
                  required
                >
                  <option value="">Pilih Jabatan</option>
                  {dataPosition.map((item, index) => {
                    return (
                      <option value={item.ID} key={index}>
                        {item.NAME}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                NIP
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="number"
                  placeholder="Input NIP"
                  name="nip"
                  onChange={(e) => changeText(e)}
                  value={form.nip}
                  required
                />
              </Col>
            </Form.Group>

            <fieldset>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label as="legend" column sm={2}>
                  Jenis Kelamin
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="Pria"
                    name="gender"
                    id="formHorizontalRadios1"
                    value="1"
                    onChange={(e) => changeText(e)}
                    required
                  />
                  <Form.Check
                    type="radio"
                    label="Wanita"
                    name="gender"
                    id="formHorizontalRadios2"
                    value="2"
                    onChange={(e) => changeText(e)}
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <Col className={styles.button}>
              <Button
                onClick={() => {
                  props.history.push("/");
                  localStorage.clear();
                }}
              >
                Kembali
              </Button>
              <Button type="submit">Simpan</Button>
            </Col>
          </Form>
        </Col>
      </Container>
    </>
  );
}
