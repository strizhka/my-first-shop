import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { userLogin } from "../../api/authThunks";
import { Link } from "react-router-dom";

export function Btn_Login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    await dispatch(userLogin({ username: email, password: password }));
    setLoading(false);
    console.log("handle sign up");
  };

  const isLogged = useAppSelector((state) => state.user.isLoged)!;

  return (
    <div>
      <button
        className="mt-3 buttonAdd"
        onClick={handleSignIn}
        disabled={loading}
      >
        {loading ? "Loading..." : "Login"}{" "}
      </button>
      <div className="mt-3"></div>
      {!loading &&
        (isLogged ? (
          <Link to="/user">Success! Go to your Account Page?</Link>
        ) : (
          <Link to="/home">Can't login. Go to Home Page?</Link>
        ))}
    </div>
  );
}
