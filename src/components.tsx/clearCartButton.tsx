import { Button } from "react-bootstrap";
import { clearCart } from "../redux/Slices/userSlice";
import { useAppDispatch } from "../redux/hooks";

export const ClearCart = () => {
  const dispatch = useAppDispatch();

  const RemoveProduct = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <button className="buttonDelete" onClick={RemoveProduct}>
        Clear Cart
      </button>
    </>
  );
};
