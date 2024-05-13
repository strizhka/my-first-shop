import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import AccountIcon from "./icons/account.tsx";
import CartIcon from "./icons/cart.tsx";
import SearchIcon from "./icons/search.tsx";
import { useAppSelector } from "../redux/hooks.tsx";

function Header() {
  const isLogin: boolean = useAppSelector((state) => state.user.isLoged);

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
          <Nav style={{ marginRight: "200px" }}></Nav>
          <Nav className="me-auto">
            <Form>
              <Row>
                <Col xs="auto" style={{ width: "350px" }}>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="ml-5"
                  />
                </Col>
                <Col xs="auto">
                  <SearchIcon />
                  {/* <Button type="submit">Search</Button> */}
                </Col>
              </Row>
            </Form>
          </Nav>
          <Nav className="ml-auto">
            {isLogin && (
              <Nav.Link href="/user">
                <AccountIcon />
              </Nav.Link>
            )}
            {!isLogin && (
              <Nav.Link href="/auth">
                <AccountIcon />
              </Nav.Link>
            )}
            <Nav className="me-3"></Nav>
            <Nav.Link href="/cart">
              <CartIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
