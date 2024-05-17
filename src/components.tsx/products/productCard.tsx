import React from "react";
import { Card, Row } from "react-bootstrap";
import { Product } from "../../redux/Slices/productsSlice";
import AddToCart from "../cart/addToCart";
import { Link } from "react-router-dom";
import CartIcon from "../icons/cart";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const UpperCateg: string =
    product.category!.charAt(0).toUpperCase() + product.category!.slice(1);
  const truncate = (str: string) => {
    if (str.length <= 50) {
      return str;
    }
    return str.slice(0, 65) + "...";
  };

  return (
    <Card className="productcard" style={{ width: "15rem" }}>
      <Link to={`/products/${product.id}`} key={product.id}>
        <Card.Img
          className="card-img-top"
          variant="top"
          src={product.image}
          style={{
            height: "260px",
            objectFit: "contain",
            backgroundColor: "white",
          }}
        />
      </Link>
      <Card.Body
        style={{ display: "flex", flexDirection: "column", minHeight: "230px" }}
      >
        <Row style={{ height: "100px", marginBottom: "10px" }}>
          <Link to={`/products/${product.id}`} key={product.id}>
            <Card.Title>
              <h5>{truncate(product.title)}</h5>
            </Card.Title>
          </Link>
        </Row>
        <Row style={{ marginBottom: "30px" }}>
          <Link to={`/categories/${UpperCateg}`} key={product.id}>
            <Card.Text>{UpperCateg}</Card.Text>
          </Link>
        </Row>
        <Row className="mt-auto mb-2">
          <Card.Text className="text2">
            <h4>${product.price}</h4>
          </Card.Text>
        </Row>
        <Row className="mt-1">
          <AddToCart item={product} mes={<CartIcon></CartIcon>} />
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
