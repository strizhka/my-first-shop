import { Container, Nav, Navbar } from "react-bootstrap";

export enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

function Sidebar() {
  const categories = Object.values(Category); // Создаем массив из значений перечисления

  return (
    <Navbar className="justify-content-between">
      <Container className="sidebar">
        <Nav defaultActiveKey="/" className="flex-column">
          <Nav.Link href="/">Главная</Nav.Link>
          {categories.map((category) => (
            <Nav.Link key={category} href={`/categories/${category}`}>
              {category}
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
