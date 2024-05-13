import { Product } from "../redux/Slices/productsSlice";
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
    <section className="mb-3">
      <div className="mt-3 text">{title && <h2>{title}</h2>}</div>
      <div className="mt-3">
        <Container className="mt-3">
          <Row className="mt-3 mb-3" xs={2} sm={3} md={3} lg={4}>
            {list.map((item: Product) => (
              <div>
                <ProductCard product={item}></ProductCard>
              </div>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Products;
