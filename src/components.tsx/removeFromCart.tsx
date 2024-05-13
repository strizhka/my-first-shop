import { Button } from "react-bootstrap";
import { useAppDispatch } from "../redux/hooks";
import { CartItem, removeItemFromCart } from "../redux/Slices/userSlice";

export const RemoveFromCart = ({ item, mes }: { item: CartItem; mes: any }) => {
  const dispatch = useAppDispatch();

  const RemoveProduct = () => {
    dispatch(removeItemFromCart(item));
    console.log(item.product.id);
  };

  return (
    <>
      <Button variant="danger" onClick={RemoveProduct}>
        {mes}
      </Button>
    </>
  );
};

export default RemoveFromCart;
