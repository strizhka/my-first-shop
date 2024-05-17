import { Nav } from "react-bootstrap";
import LoginForm from "../components.tsx/auth/loginForm";
import { useState } from "react";
import SignUpForm from "../components.tsx/auth/signUpForm";

export const Authentication = () => {
  const [login, setLogin] = useState<boolean>(true);

  const handleLoginClick = () => {
    setLogin(true);
  };

  const handleSignUpClick = () => {
    setLogin(false);
  };

  return (
    <div
      style={{
        width: "40%",
        marginTop: "20%",
        marginBottom: "20%",
        marginLeft: "25%",
      }}
    >
      <Nav variant="underline dark" defaultActiveKey="/login">
        <Nav.Item>
          <Nav.Link className="category-text" onClick={handleLoginClick}>
            Login
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="category-text" onClick={handleSignUpClick}>
            Sign Up
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
        {login && <LoginForm></LoginForm>}
        {!login && <SignUpForm></SignUpForm>}
      </div>
    </div>
  );
};
