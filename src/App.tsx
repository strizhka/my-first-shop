import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home.tsx";
import Header from "./components.tsx/header";
import Footer from "./components.tsx/footer.tsx";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components.tsx/sidebar.tsx";
import { useEffect } from "react";

import { useAppDispatch } from "./redux/hooks.tsx";
import { getProducts } from "./redux/products/productsSlice.tsx";
import {
  Electronics,
  Jewelery,
  MenSClothing,
  WomenSClothing,
} from "./pages/categPage.tsx";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
                  <Route path="/categories/Jewelery" element={<Jewelery />} />
                  <Route
                    path="/categories/Men's clothing"
                    element={<MenSClothing />}
                  />
                  <Route
                    path="/categories/Women's clothing"
                    element={<WomenSClothing />}
                  />
                  <Route
                    path="/categories/Electronics"
                    element={<Electronics />}
                  />
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
