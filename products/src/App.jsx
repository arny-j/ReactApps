import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./NavMenu";
import ProductPage from "./ProductPage";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <NavMenu />
          <Routes>
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
