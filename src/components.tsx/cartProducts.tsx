import { Button, Col, Container } from "react-bootstrap";
import { CartItem } from "../redux/Slices/userSlice";
import CartProductCard from "./cartProduct";
import { ClearCart } from "./clearCartButton";

const CartProducts = ({ products = [] }: { products: CartItem[] }) => {
  const totalAmount = products.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  return (
    <section className="mb-3 mt-4">
      <div className="mt-3 text">{<h2>Cart</h2>}</div>
      <Container className="mt-3">
        {products.map((item: CartItem) => (
          <Col key={item.product.id} className="mb-3">
            <CartProductCard product={item}></CartProductCard>
          </Col>
        ))}
      </Container>
      <div
        className="mt-3 d-flex justify-content-end"
        style={{ marginRight: "150px" }}
      >
        <h4 className="text">Total: ${totalAmount.toFixed(2)}</h4>
      </div>
      <ClearCart />
    </section>
  );
};

export default CartProducts;
