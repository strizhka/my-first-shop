import { Button } from "react-bootstrap";
import { useAppDispatch } from "../redux/hooks";
import { addItemToCart } from "../redux/Slices/userSlice";
import { Product } from "../redux/Slices/productsSlice";

export const AddToCart = ({ item }: { item: Product }) => {
  const dispatch = useAppDispatch();

  const AddProduct = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <>
      <div>
        <Button variant="primary" onClick={AddProduct}>
          Add to Cart
        </Button>
      </div>
    </>
  );
};

export default AddToCart;
