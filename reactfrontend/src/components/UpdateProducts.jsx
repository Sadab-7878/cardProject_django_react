import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const UpdateProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    image: null,
    name: "",
    price: "",
    description: "",
    category: "",
  });


  const loadProduct = async () => {
    try {
      const { data } = await axios.get(`http://127.0.0.1:8000/apiproducts/${id}/`);
      setUser({
        ...user,
        image: data.image,
        name: data.name,
        price: data.price,
        description: data.description,
        category: data.category,
      });
    } catch (error) {
      console.error("Error loading product:", error);
    }
  }

  useEffect(() => {
    loadProduct();
  }, []);

  const updateProduct = async (e) => {

    e.preventDefault();
    const formData = new FormData();

  //  if(user.image !== null ){
    
  //   formData.append("image", user.image);  //এই command আপনাকে বাধ্য করবে ছবি আপলোড করার জন্য
  //  }


  if (user.image !== null && user.image instanceof File) {
    formData.append("image", user.image);
  }
  
    formData.append("name", user.name);
    formData.append("price", user.price);
    formData.append("description", user.description);
    formData.append("category", user.category);


    await axios({
      url: `http://127.0.0.1:8000/apiproducts/${id}/`,
      method: "PUT",
      data: formData
    }
    ).then((response) => {
      console.log(response);
      navigate("/");
      
    }).catch((error) => {
      console.log(error);
    })
  
  };

  return (
    <div>
      <h1>Update Products</h1>
      <div className="container">
        <div className="form-group">
          <div className="form-control">
            <div className="form-group">
              <img src={user.image} alt={user.name} height={200}/>
              <label>Select an Image to Upload</label>

            
                <input
                type="file"
                className="form-control form-control-lg"
                name="image"
                
                onChange={(e) => setUser({ ...user, image: e.target.files[0] })}
              />
              
             
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Product Name"
                name="name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Product Price"
                name="price"
                value={user.price}
                onChange={(e) => setUser({ ...user, price: e.target.value })}
              />
            </div>
            <div className="form-group">
              <FloatingLabel controlId="floatingTextarea2" label="Enter Description">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  name="description"
                  value={user.description}
                  onChange={(e) => setUser({ ...user, description: e.target.value })}
                  style={{ height: "200px" }}
                />
              </FloatingLabel>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Category Name"
                name="category"
                value={user.category}
                onChange={(e) => setUser({ ...user, category: e.target.value })}
              />
            </div>
            <button className="btn btn-success btn-block" onClick={updateProduct}>Update Product</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProducts;






