import axios from "axios";
import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
const AddProducts = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState([
    {
      image: null,
      name: "",
      price: "",
      description: "",
      category: "",
    },
  ]);


  const addProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log("User data:", user);

    // if(user.image !== null ){

      
    //   formData.append("image", user.image);   //এই command আপনাকে বাধ্য করবে ছবি আপলোড করার জন্য
      
    // }

    if (user.image && user.image !== "") {  
      // user.image !== ""  অথবা user.image !== null যেকোনো একটা && এর পরে ব্যাবহার করলেই চলবে
      formData.append("image", user.image);
    }
   
    formData.append("name", user.name);
    formData.append("price", user.price);
    formData.append("description", user.description);
    formData.append("category", user.category);

 

    // axios.post("http://localhost:8000/apiproducts/", formData)
    // .then(response => console.log(response))
    // .catch(error => console.log(error));

    await axios({
     
      url: "http://localhost:8000/apiproducts/",
      method: "POST",
      data: formData
    }
    ).then((response) => {
      console.log(response);
      navigate("/");
      
    }).catch((error) => {
      console.log(error);
    })
    
    
    // const response = await fetch("http://localhost:8000/apiproducts/", {
    //     method: "POST",
    //     body: formData,
    //   });
    //   const data = await response.json();
    //   console.log(data);
  }

  return (
    <div>
      <h1>Add Product</h1>

      <div className="container">
        <div className="form-group">
          <div className="form-control">

          <div className="form-group">
            {/* <img src={user.image}  /> */}
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
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Enter Description"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  name="description"
                  value={user.description}
                  onChange={(e) =>
                    setUser({ ...user, description: e.target.value })
                  }
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

            <button className="btn btn-success btn-block" onClick={addProduct}>Add Product</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;







