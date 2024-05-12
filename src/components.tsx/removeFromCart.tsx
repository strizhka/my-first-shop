import { Button } from "react-bootstrap";
import { useAppDispatch } from "../redux/hooks";
import { CartItem, removeItemFromCart } from "../redux/Slices/userSlice";
import TrashIcon from "./icons/trash";

export const RemoveFromCart = ({ item }: { item: CartItem }) => {
  const dispatch = useAppDispatch();

  const RemoveProduct = () => {
    dispatch(removeItemFromCart(item));
    console.log(item.product.id);
  };

  return (
    <>
      <div>
        <Button variant="danger" onClick={RemoveProduct}>
          <TrashIcon></TrashIcon>
        </Button>
      </div>
    </>
  );
};

export default RemoveFromCart;
