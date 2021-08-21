import React, { useEffect, useState } from "react";
import {
  Container,
  Form,
  Col,
  Row,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import styles from "./form.module.css";

function SecondPage(props) {
  const [form, setForm] = useState({
    haveALaptop: "",
    address: "",
    mobileNumber: "",
  });

  useEffect(() => {
    if (localStorage.getItem("secondForm")) {
      setForm(JSON.parse(localStorage.getItem("secondForm")));
    }
  }, []);

  console.log(form);

  const onSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("secondForm", JSON.stringify(form));
    props.history.push("/confirmation");
  };

  return (
    <>
      <div className={styles.main}>
        <Container className={styles.container}>
          <h2>Form Registration</h2>
          <Form onSubmit={onSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={12}>
                Have a Laptop / PC ?
              </Form.Label>
              <Row className={styles.inputRadio}>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    value="Yes"
                    checked={form.haveALaptop === "Yes" ? "checked" : null}
                    onChange={(e) => (form.haveALaptop = e.target.value)}
                    required
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    label="No"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    value="No"
                    checked={form.haveALaptop === "No" ? "checked" : null}
                    onChange={(e) => (form.haveALaptop = e.target.value)}
                  />
                </Col>
              </Row>
            </Form.Group>
            <FloatingLabel controlId="floatingTextarea2" label="Address">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                defaultValue={form.address}
                onChange={(e) => (form.address = e.target.value)}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Mobile Number"
              className={`mb-3 ${styles.inputPhoneNumber}`}
            >
              <Form.Control
                type="number"
                placeholder="Input Mobile Number"
                defaultValue={form.mobileNumber}
                onChange={(e) => (form.mobileNumber = e.target.value)}
                required
              />
            </FloatingLabel>
            <div className={styles.btnInput}>
              <Button
                onClick={() => {
                  props.history.push("/first-form");
                }}
                variant="outline-danger"
              >
                Back
              </Button>
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

export default SecondPage;
