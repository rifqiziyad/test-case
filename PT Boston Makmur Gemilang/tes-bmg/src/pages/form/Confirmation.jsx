import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import styles from "./form.module.css";

function Confirmation(props) {
  const [firstForm, setFirstForm] = useState({
    firstName: "",
    lastName: "",
    jobdesc: [],
    gender: "",
    email: "",
  });

  const [secondForm, setSecondForm] = useState({
    haveALaptop: "",
    address: "",
    mobileNumber: "",
  });

  useEffect(() => {
    if (
      localStorage.getItem("firstForm") &&
      localStorage.getItem("secondForm")
    ) {
      const firstForm = JSON.parse(localStorage.getItem("firstForm"));
      const secondForm = JSON.parse(localStorage.getItem("secondForm"));

      setFirstForm(firstForm);
      setSecondForm(secondForm);
    } else {
      props.history.push("/first-form");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = () => {
    alert("Thank you for submit form");
    localStorage.clear();
    props.history.push("/first-form");
  };

  return (
    <>
      <div className={styles.main}>
        <Container className={styles.container}>
          <h2 className={styles.titleConfirm}>Confirmation data of entry</h2>
          <div className={styles.data}>
            <h5>
              Fullname: {firstForm.firstName}
              {firstForm.lastName}
            </h5>
            <h5>Jobdesc: {firstForm.jobdesc.join(", ")}</h5>
            <h5>Gender: {firstForm.gender}</h5>
            <h5>E-mail: {firstForm.email}</h5>
            <h5>Have a Laptop/PC: {secondForm.haveALaptop}</h5>
            <h5>Address: {secondForm.address}</h5>
            <h5>Mobile Number: {secondForm.mobileNumber}</h5>
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
            <Button onClick={onSubmit} variant="outline-primary">
              Submit
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Confirmation;
