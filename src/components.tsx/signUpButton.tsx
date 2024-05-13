import { useState } from "react";
import { Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { userLogin, userSignUp, validateTokens } from "../api/authThunks";
import { login } from "../redux/Slices/userSlice";

export function Btn_SignUp({
  email,
  password,
  role,
}: {
  email: string;
  password: string;
  role: string;
}) {
  const dispatch = useAppDispatch();

  const handleSignUp = () => {
    dispatch(userSignUp({ username: email, password: password, role: role }));
  };

  return (
    <div>
      <Button href="/home" variant="primary" onClick={handleSignUp}>
        Sign Up
      </Button>
    </div>
  );
}
