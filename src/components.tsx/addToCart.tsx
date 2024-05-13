import { useAppDispatch } from "../redux/hooks";
import { addItemToCart } from "../redux/Slices/userSlice";
import { Product } from "../redux/Slices/productsSlice";

export const AddToCart = ({ item, mes }: { item: Product; mes: any }) => {
  const dispatch = useAppDispatch();

  const AddProduct = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <>
      <button className="buttonAdd" onClick={AddProduct}>
        {mes}
      </button>
    </>
  );
};

export default AddToCart;
