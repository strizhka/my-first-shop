import { Container, Nav, Navbar } from "react-bootstrap";

function Sidebar() {
  return (
    <Navbar className="justify-content-between">
      <Container className="sidebar">
        <Nav defaultActiveKey="/" className="flex-column">
          <Nav.Link href="/">Главная</Nav.Link>
          <Nav.Link href="/about">О нас</Nav.Link>
          <Nav.Link href="/contacts">Контакты</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Sidebar;
