import { Button } from "react-bootstrap";
import { useAppDispatch } from "../../redux/hooks";
import { userSignUp } from "../../api/authThunks";

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
      <Button href="/home" variant="dark" onClick={handleSignUp}>
        Sign Up
      </Button>
    </div>
  );
}
