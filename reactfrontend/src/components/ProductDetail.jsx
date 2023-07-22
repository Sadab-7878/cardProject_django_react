// import { useEffect, useState } from "react"
// import axios from "axios"
// import { useParams } from "react-router-dom"
// const ProductDetail = () => {

//   const [product, setProduct] = useState("");

//   const { id } = useParams();

//   const getSingleProduct = async () => {
//     const  { data } = await axios.get(`http://localhost:8000/apiproducts/${id}/`);

//     console.log(data);
//     setProduct(data);


//   }

//   useEffect(() => {
//     getSingleProduct();
//   }, []);

//   return (
//     <div>
//       <h1>Product Detail</h1>

//       <div className="single-product-info">
//         <img src={product.image} alt={product.name} />
//         <p>{product.name}</p>
//         <p>{product.price}</p>
//         <p>{product.description}</p>
//         <p>{product.category}</p>
//       </div>
//     </div>
//   )
// }

// export default ProductDetail;



import  { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/apiproducts/${id}/`);
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setError("No Product");
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);


  //delete Products

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/apiproducts/${id}/`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  return (
    <div>
      <h1>Product Detail</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="single-product-info">
          <img src={product.image} alt={product.name} height="400" width="600"/>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <p>{product.category}</p>

          <Link className="btn btn-primary m-2" to={`/${product.id}/update`}>Update</Link>
          <Link className="btn btn-danger m-2" onClick={() => deleteProduct(product.id)}>Delete</Link>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
