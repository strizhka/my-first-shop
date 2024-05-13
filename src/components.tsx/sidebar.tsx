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
    <Navbar>
      <Container className="sidebar">
        <Nav className="flex-column" defaultActiveKey="/">
          <Nav.Link href="/">
            <div className="category-text">
              <h3>Stuff</h3>
            </div>
          </Nav.Link>
          {categories.map((category) => (
            <Nav.Link
              className="category-text"
              key={category}
              href={`/categories/${category}`}
            >
              {category}
            </Nav.Link>
          ))}
          <Nav.Link className="category-text" href="/About">
            About us
          </Nav.Link>
          <Nav.Link className="category-text" href="/Contacts">
            Contacts
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Sidebar;
