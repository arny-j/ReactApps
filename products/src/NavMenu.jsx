import { Link } from "react-router-dom";
import Products from "./Products";
import "./App.css";

function NavMenu() {
  return (
    <nav>
      <h2>Product Navigation</h2>
      {Products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          {product.name}
        </Link>
      ))}
    </nav>
  );
}

export default NavMenu;
