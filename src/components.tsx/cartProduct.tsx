import { Card, Col, Row } from "react-bootstrap";
import { CartItem } from "../redux/Slices/userSlice";
import RemoveFromCart from "./removeFromCart";
import { Link } from "react-router-dom";

const CartProductCard = ({ product }: { product: CartItem }) => {
  const { id, title, price, image } = product.product;
  const quantity = product.quantity;
  return (
    <Card
      className="d-flex flex-row align-items-center"
      style={{ width: "90%" }}
    >
      <Col xs={2}>
        <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
          <Card.Img
            className="card-img-top"
            variant="left"
            src={image}
            style={{ height: "80px", maxWidth: "100%", objectFit: "contain" }}
          />
        </Link>
      </Col>
      <Col xs={10}>
        <Card.Body style={{ height: "110px" }}>
          <Row>
            <Col xs={7}>
              <Link to={`/products/${id}`} style={{ color: "black" }}>
                <Card.Title>{title}</Card.Title>
              </Link>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Card.Text>
                    <h6>
                      ${price} x {quantity} =
                    </h6>
                    <h3>${price * quantity}</h3>
                  </Card.Text>
                </Col>
                <Col>
                  <RemoveFromCart item={product} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Col>
    </Card>
  );
};

export default CartProductCard;
