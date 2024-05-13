import { Card, Col, Row } from "react-bootstrap";
import { CartItem } from "../redux/Slices/userSlice";
import RemoveFromCart from "./removeFromCart";
import { Link } from "react-router-dom";
import AddToCart from "./addToCart";

const CartProductCard = ({ product }: { product: CartItem }) => {
  const { id, title, price, image } = product.product;
  const quantity = product.quantity;
  return (
    <Card
      className="productcard d-flex flex-row align-items-center"
      style={{ width: "90%", height: "120px" }}
    >
      <Col xs={2}>
        <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
          <Card.Img
            className="card-img-top"
            variant="left"
            src={image}
            style={{
              backgroundColor: "white",
              height: "115px",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </Link>
      </Col>
      <Col xs={10}>
        <Card.Body style={{ height: "110px" }}>
          <Row>
            <Col xs={7}>
              <Link to={`/products/${id}`} style={{ color: "black" }}>
                <Card.Title className="text">{title}</Card.Title>
              </Link>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Card.Text className="justify-content-end">
                    <h6 className="text2">
                      ${price} x {quantity} =
                    </h6>
                    <h3 className="text">${price * quantity}</h3>
                  </Card.Text>
                </Col>
                <Col>
                  <Row>
                    <div
                      className="d-flex justify-content-end"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <RemoveFromCart item={product} mes={"-1"} />
                      <h3 style={{ margin: "0 20px" }}>{quantity}</h3>
                      <AddToCart item={product.product} mes={"+1"} />
                    </div>
                  </Row>
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
