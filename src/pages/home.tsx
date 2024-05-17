import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Products from "../components.tsx/products/products";
import { useAppSelector } from "../redux/hooks";

export const Home = () => {
  const list = useAppSelector((state) => state.products.list);

  return (
    <Container className="homePage">
      <Row className="title">
        <Col>
          <h1>Welcome to Stuff!</h1>
        </Col>
      </Row>
      <Row className="Products">
        <Products products={list} amount={4} title="Newcomers"></Products>
        <Products products={list} amount={10} title="Bestsellers"></Products>
      </Row>
    </Container>
  );
};

export default Home;
