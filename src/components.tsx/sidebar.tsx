import { Container, Nav, Navbar } from "react-bootstrap";

export enum Category {
  Electronics = "Electronics",
  Jewelery = "Jewelery",
  MenSClothing = "Men's clothing",
  WomenSClothing = "Women's clothing",
}

function Sidebar() {
  const categories = Object.values(Category); // Создаем массив из значений перечисления

  return (
    <Navbar className="justify-content-between fixed-top">
      <Container className="sidebar">
        <Nav defaultActiveKey="/" className="flex-column">
          <Nav.Link href="/">Stuff</Nav.Link>
          {categories.map((category) => (
            <Nav.Link key={category} href={`/categories/${category}`}>
              {category}
            </Nav.Link>
          ))}
          <Nav.Link href="/About">About us</Nav.Link>
          <Nav.Link href="/Contacts">Contacts</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Sidebar;
