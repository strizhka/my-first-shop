import { Button } from "react-bootstrap";
import { useAppDispatch } from "../redux/hooks";
import {
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
  };
  return (
    <div>
      <Button href="/" variant="primary" onClick={handleSignOut}>
        LogOut
      </Button>
    </div>
  );
}
