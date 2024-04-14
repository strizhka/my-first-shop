import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
        <Navbar.Brand href="/home">Аквамир</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Главная</Nav.Link>
            <NavDropdown title="Категории" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Рыбки</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Растения</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Корм</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Аквариумы</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Декор</NavDropdown.Item>
            </NavDropdown>
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
                  <Button type="submit">Submit</Button>
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
