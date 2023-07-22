import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {

    try {
      const response = 

      await axios.get("http://localhost:8000/apiproducts/");
      setProducts(response.data.reverse());
      
      
      
    } catch (error) {
        alert(error.message);
    }
  
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>

    <div className="products-card-info">

      {products.map((product, index) => (
        <Card className="m-2 shadow-lg rounded" key={index} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.category}</Card.Text>
            <Link className="btn btn-primary mr-2" to={`/${product.id}`}>Show Details</Link>
          </Card.Body>
        </Card>
      ))}
    </div>

     
    </>
  );
};

export default ShowProducts;
