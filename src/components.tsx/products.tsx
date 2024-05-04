import { Link } from "react-router-dom";
import { Product } from "../redux/products/productsSlice";
import ProductCard from "./productCard";
import { Container, Row } from "react-bootstrap";

const Products = ({
  title,
  products = [],
  amount,
}: {
  title: string;
  products: Product[];
  amount: number;
}) => {
  const list = products.filter((_, i) => i < amount);

  return (
    <section>
      {title && <h2>{title}</h2>}
      <div>
        <Container>
          <Row xs={2} sm={3} md={4}>
            {list.map((item: Product) => (
              <Link to={`/products/${item.id}`} key={item.id}>
                <ProductCard product={item}></ProductCard>
              </Link>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Products;
