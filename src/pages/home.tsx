import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components.tsx/productCard";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

const pr: Product = {
  id: 0,
  name: "string",
  description: "str",
  price: 500,
  imageUrl: "https://i.ucrazy.org/files/pics/2023.10/2023-10-17-21-53-072.webp",
};

const productCardProps: ProductCardProps = {
  product: pr,
};

export const Home = () => {
  return (
    <Container className="homePage">
      <Row className="Title">
        <Col>
          <h1>Аквамир</h1>
        </Col>
      </Row>
      <Row className="Category">
        <Col>
          <h2>Рыбки</h2>
        </Col>
      </Row>
      <Row className="Products">
        <ProductCard {...productCardProps} />
        <ProductCard {...productCardProps} />
        <ProductCard {...productCardProps} />
        <ProductCard {...productCardProps} />
      </Row>
    </Container>
  );
};

export default Home;
