import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home.tsx";
import Header from "./components.tsx/header";
import Footer from "./components.tsx/footer.tsx";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components.tsx/sidebar.tsx";
import { useEffect } from "react";

import { useAppDispatch } from "./redux/hooks.tsx";
import { getProducts } from "./redux/Slices/productsSlice.tsx";
import { CategoryPage } from "./pages/categPage.tsx";
import ProductDetails from "./pages/productDetails.tsx";

import { Cart } from "./pages/cart.tsx";
import UserProfile from "./pages/user.tsx";

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
                  <Route path="/user/:username" element={<UserProfile />} />
                  <Route path="/products/:id" element={<ProductDetails />} />
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
