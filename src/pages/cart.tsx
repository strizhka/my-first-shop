import CartProducts from "../components.tsx/cart/cartProducts";
import { EmptyCart } from "../components.tsx/cart/emptyCart";
import { useAppSelector } from "../redux/hooks";

export const Cart = () => {
  const list = useAppSelector((state) => state.user.cartList);

  return (
    <div>
      {list.length === 0 ? <EmptyCart /> : <CartProducts products={list} />}
    </div>
  );
};
