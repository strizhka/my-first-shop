import { useParams } from "react-router-dom";
import { getProductById } from "../api/productsApi";
import { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import AddToCart from "../components.tsx/addToCart";
import CartIcon from "../components.tsx/icons/cart";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductById(parseInt(id!, 10));
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Container>
      {product && (
        <Row className="product-details text">
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={product.image} />
            </Card>
          </Col>
          <Col md={1}></Col>
          <Col md={6}>
            <Row>
              <h1>{product.title}</h1>
            </Row>
            <Row className="mt-2">
              <h1>{product.rating.rate} &#9733;</h1>
            </Row>
            <Row className="mt-1">
              <h5>Number of rewievs: {product.rating.count}</h5>
            </Row>
            <Row className="mt-5">
              <Col>
                <h2>Price: ${product.price}</h2>
              </Col>
              <Col>
                <AddToCart
                  item={product}
                  mes={<CartIcon></CartIcon>}
                ></AddToCart>
              </Col>
            </Row>
            <Row className="mt-5">
              <h5>Descriprion:</h5>
            </Row>
            <Row className="mt-1">
              <div>{product.description}</div>
            </Row>
            <Row className="mt-2">
              <div>Category: {product.category}</div>
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetails;
