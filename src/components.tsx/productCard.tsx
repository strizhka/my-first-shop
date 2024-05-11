import React from "react";
import { Card, Row } from "react-bootstrap";
import { Product } from "../redux/products/productsSlice";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="mb-4 d-flex flex-column" style={{ width: "15rem" }}>
      <Card.Img
        className="card-img-top"
        variant="top"
        src={product.image}
        style={{ height: "260px", objectFit: "contain" }}
      />
      <Card.Body
        style={{ display: "flex", flexDirection: "column", minHeight: "230px" }}
      >
        <Row style={{ marginBottom: "10px" }}>
          <Card.Title>{product.title}</Card.Title>
        </Row>
        <Row style={{ marginBottom: "30px" }}>
          <Card.Text>{product.category}</Card.Text>
        </Row>
        <Row className="mt-auto mb-2">
          <Card.Text>Price: ${product.price}</Card.Text>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
