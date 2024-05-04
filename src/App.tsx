import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home.tsx";
import Header from "./components.tsx/header";
import Footer from "./components.tsx/footer.tsx";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components.tsx/sidebar.tsx";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./redux/hooks.tsx";
import { getProducts } from "./redux/products/productsSlice.tsx";

function App() {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.products.list);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 1) {
      console.log(products);
    }
  }, [products]);

  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Row>
            <div className="header">
              <Header />
            </div>
          </Row>
          <Row>
            <Col sm={2}>
              <Sidebar />
            </Col>
            <Col>
              <div className="content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/cart" />
                </Routes>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="footer">
              <Footer />
            </div>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
