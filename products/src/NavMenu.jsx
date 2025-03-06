import { Link } from 'react-router-dom';
import Products from './Products';

function NavMenu() {
  return (
    <>
      <h2>Product Navigation</h2>
      {Products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          {product.name}
        </Link>
      ))}
    </>
  );
}

export default NavMenu;
