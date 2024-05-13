import { useState } from "react";
import { Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { userLogin, validateTokens } from "../api/authThunks";
import { User } from "../redux/Slices/userSlice";

export function Btn_Login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const dispatch = useAppDispatch();

  const handleSignIn = () => {
    dispatch(userLogin({ username: email, password: password }));
  };

  const llll: boolean = useAppSelector((state) => state.user.isLoged)!;
  const u: User = useAppSelector((state) => state.user.currentUser)!;
  console.log(llll);
  console.log(u);
  return (
    <div>
      <Button
        href="/user"
        className="mt-3"
        variant="primary"
        onClick={handleSignIn}
      >
        Login
      </Button>
      <div className="mt-3"></div>
    </div>
  );
}
