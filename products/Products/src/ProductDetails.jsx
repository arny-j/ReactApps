import Products from "./Products";

// eslint-disable-next-line react/prop-types
function ProductDetails({id}) {

    // find the product that matches the id in the URL
    const product = Products.find(
      (p) => p.id.toString() === id
    );

    return (
      <>
        <h2>{product.name}</h2>
        <p><strong>Price: </strong>${product.price}</p>
        <p><strong>Description: </strong>{product.description}</p>
      </>
    );
  }
  
  export default ProductDetails;