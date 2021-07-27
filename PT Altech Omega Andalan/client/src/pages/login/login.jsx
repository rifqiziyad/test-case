// import { useState } from "react";
import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import styles from "./login.module.css";
import axiosApiIntances from "../utils/axios";

export default function Login(props) {
  const [form, setForm] = useState({
    userEmail: "",
    userPassword: "",
  });

  useEffect(() => {
    if (sessionStorage.getItem("user_id")) {
      props.history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeText = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosApiIntances
      .post("login", form)
      .then((res) => {
        sessionStorage.setItem("user_id", res.data.data[0].user_id);
        sessionStorage.setItem("user_name", res.data.data[0].user_name);
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const redirectToSignUp = () => {
    props.history.push("/register");
  };
  return (
    <>
      <Container fluid className={styles.container}>
        <div className={styles.main}>
          <Form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="userEmail"
                value={form.userEmail}
                required
                onChange={(event) => changeText(event)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="userPassword"
                required
                value={form.userPassword}
                onChange={(event) => changeText(event)}
              />
            </Form.Group>
            <Button className={styles.btn} variant="primary" type="submit">
              Login
            </Button>
            <h3>
              Don’t have an account?{" "}
              <span onClick={redirectToSignUp}>Sign Up</span>{" "}
            </h3>
          </Form>
        </div>
      </Container>
    </>
  );
}
