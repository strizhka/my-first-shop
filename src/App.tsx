import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home.tsx";
import Header from "./components.tsx/header";
import Footer from "./components.tsx/footer.tsx";
import ProductCard from "./components.tsx/productCard.tsx";
import { Col, Container, Row } from "react-bootstrap";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

const pr: Product = {
  id: 0,
  name: "string",
  description: "str",
  price: 500,
  imageUrl:
    "https://www.google.com/imgres?q=rh&imgurl=https%3A%2F%2Fs3-symbol-logo.tradingview.com%2Frh--600.png&imgrefurl=https%3A%2F%2Fru.tradingview.com%2Fsymbols%2FNYSE-RH%2F&docid=zkN-Fylp01NLbM&tbnid=Px3pYHjUHtGxeM&vet=12ahUKEwj5w439oMGFAxVzCBAIHQ3QCfsQM3oECBMQAA..i&w=600&h=600&hcb=2&ved=2ahUKEwj5w439oMGFAxVzCBAIHQ3QCfsQM3oECBMQAA",
};

const productCardProps: ProductCardProps = {
  product: pr,
};

function App() {
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
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cart" />
              </Routes>
            </div>
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
