import CartProducts from "../components.tsx/cartProducts";
import { useAppSelector } from "../redux/hooks";

export const Cart = () => {
  const list = useAppSelector((state) => state.user.cartList);

  return (
    <div>
      <CartProducts products={list}></CartProducts>
    </div>
  );
};
