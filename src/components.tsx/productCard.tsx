import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Product } from "../redux/products/productsSlice";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="h-100 d-flex flex-column" style={{ width: "15rem" }}>
      <Card>
        <Card.Img
          className="card-img-top"
          variant="top"
          src={product.image}
          style={{ height: "310px", objectFit: "cover" }}
        />
      </Card>
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <Row>
          <Card.Title>{product.title}</Card.Title>
        </Row>
        <Row>
          <Card.Text>{product.description}</Card.Text>
        </Row>
        <Row style={{ marginTop: "auto" }}>
          <Card.Text>Price: ${product.price}</Card.Text>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
