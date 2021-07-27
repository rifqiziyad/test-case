import { useEffect } from "react";
import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import styles from "../login/login.module.css";
import axiosApiIntances from "../utils/axios";

export default function Register(props) {
  const [form, setForm] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  const [isError, setIsError] = useState(false);

  const changeText = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (sessionStorage.getItem("user_id")) {
      props.history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosApiIntances
      .post("register", form)
      .then((res) => {
        setIsError(false);
        sessionStorage.setItem("user_id", res.data.data.user_id);
        sessionStorage.setItem("user_name", res.data.data.user_name);
        props.history.push("/");
      })
      .catch((err) => {
        setIsError(true);
        console.log(err.response);
      });
  };

  const redirectToSignIn = () => {
    props.history.push("/login");
  };

  return (
    <>
      <Container fluid className={styles.container}>
        <div className={styles.main}>
          <Form onSubmit={handleSubmit}>
            <h2>Register</h2>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="userName"
                onChange={(event) => changeText(event)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="userEmail"
                onChange={(event) => changeText(event)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="userPassword"
                onChange={(event) => changeText(event)}
              />
            </Form.Group>
            <Button className={styles.btn} variant="primary" type="submit">
              Register
            </Button>
            <Alert
              className={styles.alert}
              style={isError ? { display: "flex" } : { display: "none" }}
              variant="danger"
            >
              Email Registered
            </Alert>
            <h3>
              Already have an account?{" "}
              <span onClick={redirectToSignIn}>Sign In</span>{" "}
            </h3>
          </Form>
        </div>
      </Container>
    </>
  );
}
