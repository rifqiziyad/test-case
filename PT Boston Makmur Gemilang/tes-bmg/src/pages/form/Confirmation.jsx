import React from "react";
import { Container, Button } from "react-bootstrap";
import styles from "./form.module.css";

function Confirmation(props) {
  return (
    <>
      <div className={styles.main}>
        <Container className={styles.container}>
          <h2 className={styles.titleConfirm}>Confirmation data of entry</h2>
          <div className={styles.data}>
            <h5>Fullname: Rifqi Ziyad</h5>
            <h5>Jobdesc: Rifqi Ziyad</h5>
            <h5>Gender: Rifqi Ziyad</h5>
            <h5>E-mail: Rifqi Ziyad</h5>
            <h5>Have a Laptop/PC: Rifqi Ziyad</h5>
            <h5>Address: Rifqi Ziyad</h5>
            <h5>Mobile Number: Rifqi Ziyad</h5>
          </div>
          <div className={styles.btnInput}>
            <Button
              onClick={() => {
                props.history.push("/second-form");
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

export default Confirmation;
