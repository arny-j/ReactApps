import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavMenu from "./NavMenu";
import ProductPage from './ProductPage';

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
