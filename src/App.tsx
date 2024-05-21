import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home.tsx";
import Header from "./components.tsx/basic/header.tsx";
import Footer from "./components.tsx/basic/footer.tsx";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components.tsx/basic/sidebar.tsx";
import { useEffect } from "react";

import { useAppDispatch } from "./redux/hooks.tsx";
import { getProducts } from "./redux/Slices/productsSlice.tsx";
import { CategoryPage } from "./pages/categPage.tsx";
import ProductDetails from "./pages/productDetails.tsx";

import { Cart } from "./pages/cart.tsx";
import { UserPage } from "./pages/user.tsx";
import { Authentication } from "./pages/authentication.tsx";

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
            <div>
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
                  <Route path="/categories/:title" element={<CategoryPage />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/products/:id" element={<ProductDetails />} />
                  <Route path="/auth" element={<Authentication />} />
                  <Route path="/user" element={<UserPage />} />
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
