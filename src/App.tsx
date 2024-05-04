import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home.tsx";
import Header from "./components.tsx/header";
import Footer from "./components.tsx/footer.tsx";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components.tsx/sidebar.tsx";
import { useEffect } from "react";
import { getCategories } from "./redux/categories/categoriesSlice.tsx";
import { useAppDispatch, useAppSelector } from "./redux/hooks.tsx";

function App() {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.list);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories.length > 1) {
      console.log(categories);
    }
  }, [categories]);

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
function dispath(arg0: any) {
  throw new Error("Function not implemented.");
}
