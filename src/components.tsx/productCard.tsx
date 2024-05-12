import React from "react";
import { Card, Row } from "react-bootstrap";
import { Product } from "../redux/Slices/productsSlice";
import AddToCart from "./addToCart";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const UpperCateg: string =
    product.category!.charAt(0).toUpperCase() + product.category!.slice(1);

  return (
    <Card className="mb-4 d-flex flex-column" style={{ width: "15rem" }}>
      <Link to={`/products/${product.id}`} key={product.id}>
        <Card.Img
          className="card-img-top"
          variant="top"
          src={product.image}
          style={{ height: "260px", objectFit: "contain" }}
        />
      </Link>
      <Card.Body
        style={{ display: "flex", flexDirection: "column", minHeight: "230px" }}
      >
        <Row style={{ marginBottom: "10px" }}>
          <Link to={`/products/${product.id}`} key={product.id}>
            <Card.Title>{product.title}</Card.Title>
          </Link>
        </Row>
        <Row style={{ marginBottom: "30px" }}>
          <Link to={`/categories/${UpperCateg}`} key={product.id}>
            <Card.Text>{UpperCateg}</Card.Text>
          </Link>
        </Row>
        <Row className="mt-auto mb-2">
          <Card.Text>Price: ${product.price}</Card.Text>
        </Row>
        <Row className="mt-1 mb-2">
          <AddToCart item={product} />
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
