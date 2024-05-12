import { useState, useEffect } from "react";
import { getCategoryById } from "../api/productsApi";
import { Product, filterByCategory } from "../redux/Slices/productsSlice";
import Products from "./products";
import { useAppDispatch } from "../redux/hooks";
import { Col, Container, Row } from "react-bootstrap";

const Category = ({ category, title }: { category: string; title: string }) => {
  const [productList, setProductList] = useState<Product[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterByCategory(category));
  }, [dispatch]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await getCategoryById(category);
        setProductList(response.data);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, [category]);

  return (
    <Container className="homePage">
      <Row className="title">
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row className="Products">
        <Products products={productList} amount={99} title={""} />
      </Row>
    </Container>
  );
};

export default Category;
