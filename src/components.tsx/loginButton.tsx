import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { userLogin } from "../api/authThunks";
import { User } from "../redux/Slices/userSlice";
import { Link } from "react-router-dom";

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
      <button className="mt-3 buttonAdd" onClick={handleSignIn}>
        Login
      </button>
      <div className="mt-3"></div>
      {useAppSelector((state) => state.user.isLoged) ? (
        <Link to="/user">Success! Go to your Account Page?</Link>
      ) : (
        <Link to="/home">Go to Home Page?</Link>
      )}
    </div>
  );
}
