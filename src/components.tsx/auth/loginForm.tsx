import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { Btn_Login } from "./loginButton";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };

  return (
    <Form className="mt-3" style={{ top: "500px" }}>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          placeholder="name@example.com"
          value={email}
          onChange={handleEmailChange}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </FloatingLabel>
      <Btn_Login email={email} password={password}></Btn_Login>
    </Form>
  );
}

export default LoginForm;
