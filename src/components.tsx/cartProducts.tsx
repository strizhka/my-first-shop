import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { CartItem } from "../redux/Slices/userSlice";
import CartProductCard from "./cartProduct";

const CartProducts = ({ products = [] }: { products: CartItem[] }) => {
  return (
    <section className="mb-3 mt-4">
      <div className="mt-3">{<h2>Cart</h2>}</div>
      <Container className="mt-3">
        {products.map((item: CartItem) => (
          <Col key={item.product.id} className="mb-3">
            {/* <Link
              to={`/products/${item.product.id}`}
              style={{ textDecoration: "none" }}
            > */}
            <CartProductCard product={item}></CartProductCard>
            {/* </Link> */}
          </Col>
        ))}
      </Container>
    </section>
  );
};

export default CartProducts;
