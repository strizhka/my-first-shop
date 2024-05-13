import { Nav } from "react-bootstrap";
import LoginForm from "../components.tsx/loginForm";
import { useState } from "react";
import SignUpForm from "../components.tsx/signUpForm";

export const Authentication = () => {
  const [login, setLogin] = useState<boolean>(true);

  const handleLoginClick = () => {
    setLogin(true);
  };

  const handleSignUpClick = () => {
    setLogin(false);
  };

  return (
    <div>
      <Nav variant="underline" defaultActiveKey="/login">
        <Nav.Item>
          <Nav.Link onClick={handleLoginClick}>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleSignUpClick}>Sign Up</Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
        {login && <LoginForm></LoginForm>}
        {!login && <SignUpForm></SignUpForm>}
      </div>
    </div>
  );
};
