import { Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  clearCart,
  logout,
  setAccessToken,
  setRefreshToken,
} from "../redux/Slices/userSlice";

export function LogOut() {
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(logout());
    dispatch(setAccessToken(null));
    dispatch(setRefreshToken(null));
    dispatch(clearCart());
    console.log(
      "logout",
      useAppSelector((state) => state.user.currentUser?.userName)
    );
  };
  return (
    <div>
      <Button href="/" variant="dark" onClick={handleSignOut}>
        LogOut
      </Button>
    </div>
  );
}
