import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

function Header() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="fixed-top justify-content-between"
    >
      <Container className="header">
        <Navbar.Brand href="/home">Stuff</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Form>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="ml-5"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Поиск</Button>
                </Col>
              </Row>
            </Form>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#link">Личный кабинет</Nav.Link>
            <Nav.Link href="#link">Корзина</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
