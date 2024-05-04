import { Container, Nav, Navbar } from "react-bootstrap";
import { useAppSelector } from "../redux/hooks";

function Sidebar() {
  const categories = useAppSelector((state) => state.categories.list);

  return (
    <Navbar className="justify-content-between">
      <Container className="sidebar">
        <Nav defaultActiveKey="/" className="flex-column">
          <Nav.Link href="/">Главная</Nav.Link>
          {categories.map(({ id, name }) => (
            <Nav.Link key={id} href={`/categories/${id}`}>
              {name}
            </Nav.Link>
          ))}
          <Nav.Link href="/about">О нас</Nav.Link>
          <Nav.Link href="/contacts">Контакты</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Sidebar;
