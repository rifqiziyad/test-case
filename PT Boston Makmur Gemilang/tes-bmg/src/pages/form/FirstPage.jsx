import React, { useEffect, useState } from "react";
import {
  Container,
  FloatingLabel,
  Form,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import styles from "./form.module.css";

function FirstPage(props) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    jobdesc: [],
    gender: "",
    email: "",
  });
  const [onChangeJobdesc, setOnChangeJobdesc] = useState("");

  const addJobDesc = () => {
    setOnChangeJobdesc("");
    form.jobdesc.push(onChangeJobdesc);
  };

  useEffect(() => {
    if (localStorage.getItem("firstForm")) {
      setForm(JSON.parse(localStorage.getItem("firstForm")));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.jobdesc.length <= 0) {
      alert("Please add the jobdesc");
    } else {
      props.history.push("/second-form");
      localStorage.setItem("firstForm", JSON.stringify(form));
    }
  };

  return (
    <>
      <div className={styles.main}>
        <Container className={styles.containerFirstPage}>
          <h2>Form Registration</h2>
          <Form onSubmit={handleSubmit}>
            <Row className="g-2">
              <Col md>
                <Form.Floating className="mb-3">
                  <Form.Control
                    id="floatingInputCustomFirstName"
                    type="text"
                    name="firstName"
                    placeholder="input name"
                    defaultValue={form.firstName}
                    onChange={(e) => (form.firstName = e.target.value)}
                    required
                  />
                  <label htmlFor="floatingInputCustom">First Name</label>
                </Form.Floating>
              </Col>
              <Col md>
                <Form.Floating className="mb-3">
                  <Form.Control
                    name="lastName"
                    id="floatingInputCustomLastName"
                    type="text"
                    placeholder="input name"
                    defaultValue={form.lastName}
                    onChange={(e) => (form.lastName = e.target.value)}
                    required
                  />
                  <label htmlFor="floatingInputCustom">Last Name</label>
                </Form.Floating>
              </Col>
            </Row>
            <Row>
              <Col md={10}>
                <Form.Floating className={`mb-3 ${styles.inputJobdesk}`}>
                  <Form.Control
                    id="floatingInputCustomJobdesc"
                    type="text"
                    placeholder="input jobdesk"
                    onChange={(e) => setOnChangeJobdesc(e.target.value)}
                  />
                  <label htmlFor="floatingInputCustom">Jobdesc</label>
                </Form.Floating>
              </Col>
              <Col md={2} className={styles.btnPlus}>
                <h1 onClick={addJobDesc}>+</h1>
              </Col>
            </Row>
            {form.jobdesc.map((item, index) => {
              return (
                <Col md={10} key={index} className={styles.jobDescData}>
                  <Form.Control
                    type="text"
                    placeholder="Readonly input here..."
                    value={item}
                    readOnly
                  />
                </Col>
              );
            })}

            <FloatingLabel controlId="floatingSelect" label="Select Gender">
              <Form.Select
                aria-label="Floating label select example"
                required
                name="gender"
                defaultValue={form.gender}
                onChange={(e) => (form.gender = e.target.value)}
              >
                <option value="" hidden>
                  Open this select menu
                </option>
                <option
                  selected={form.gender === "male" ? "selected" : null}
                  value="male"
                >
                  Male
                </option>
                <option
                  selected={form.gender === "female" ? "selected" : null}
                  value="female"
                >
                  Female
                </option>
              </Form.Select>
            </FloatingLabel>

            <Col>
              <Form.Floating className={`mb-3 ${styles.inputEmail}`}>
                <Form.Control
                  id="floatingInputCustomEmail"
                  type="email"
                  placeholder="input Email"
                  required
                  onChange={(e) => (form.email = e.target.value)}
                  defaultValue={form.email}
                  name="email"
                />
                <label htmlFor="floatingInputCustom">Email</label>
              </Form.Floating>
            </Col>
            <div className={styles.btnNext}>
              <Button type="submit" variant="outline-primary">
                Next
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default FirstPage;
