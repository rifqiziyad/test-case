import React from "react";
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
  return (
    <>
      <div className={styles.main}>
        <Container className={styles.container}>
          <h2>Form Registration</h2>
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
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="No"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Row>
          </Form.Group>
          <FloatingLabel controlId="floatingTextarea2" label="Address">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Mobile Number"
            className={`mb-3 ${styles.inputPhoneNumber}`}
          >
            <Form.Control type="number" placeholder="Input Mobile Number" />
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
            <Button variant="outline-primary">Next</Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SecondPage;
