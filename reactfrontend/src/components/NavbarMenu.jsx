import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
const NavbarMenu = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Card App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
         
            <Nav className="me-auto">
              
                <NavLink className="show-products-nav" to="/"> Products </NavLink>            
                <NavLink className="add-products-nav" to="/addProduct"> Add Products </NavLink>            
            </Nav>
          
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
