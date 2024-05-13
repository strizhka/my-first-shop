import React, { useState } from "react";
import { ButtonGroup, Dropdown, FloatingLabel, Form } from "react-bootstrap";
import { Btn_SignUp } from "./signUpButton";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

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
  const handleRoleSelect = (selectedRole: React.SetStateAction<string>) => {
    setRole(selectedRole);
  };

  return (
    <Form className="mt-3">
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          type="email"
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

      <Dropdown className="mt-3" as={ButtonGroup}>
        <Btn_SignUp email={email} password={password} role={role}></Btn_SignUp>

        <Dropdown.Toggle id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleRoleSelect("user")}>
            User
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleRoleSelect("admin")}>
            Admin
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Form>
  );
}

export default SignUpForm;
