import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Products from "../components.tsx/products";
import { useAppSelector } from "../redux/hooks";

export const Home = () => {
  const list = useAppSelector((state) => state.products.list);

  return (
    <Container className="homePage">
      <Row className="Title">
        <Col>
          <h1>Grrrrrrr</h1>
        </Col>
      </Row>
      <Row className="Products">
        <Products products={list} amount={5} title="dddd"></Products>
        <Products products={list} amount={10} title="dfgfgddfg"></Products>
      </Row>
    </Container>
  );
};

export default Home;
