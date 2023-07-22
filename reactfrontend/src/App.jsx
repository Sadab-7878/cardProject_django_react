import AddProducts from "./components/AddProducts"
import NavbarMenu from "./components/NavbarMenu"
import ShowProducts from "./components/ShowProducts"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import ProductDetail from "./components/ProductDetail";
import UpdateProducts from "./components/UpdateProducts";

function App() {

  return (
   <>

      <Router>
        <NavbarMenu />
        <Routes>
          <Route exact path="/" element={<ShowProducts />} />
          <Route exact path="/addProduct" element={<AddProducts />} />
          <Route exact path="/:id/" element={<ProductDetail />} />
          <Route exact path="/:id/update" element={<UpdateProducts />} />
        </Routes>
        
      </Router>
   
     
   
   </>
  )
}

export default App
