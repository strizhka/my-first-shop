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
      <Button variant="danger" onClick={RemoveProduct}>
        Clear Cart
      </Button>
    </>
  );
};
