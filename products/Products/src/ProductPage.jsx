import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';

// This component will extract the product ID from the URL and pass it to the ProductDetails component.
function ProductPage() {
    const { id } = useParams();
    return <ProductDetails id={id} />;
}

export default ProductPage;