import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home.tsx";
import Header from "./components.tsx/header";

function App() {
  return (
    <div className="App>">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
