import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Whiskers&Co.
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shop/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/shop/manager">
              Manager
            </Nav.Link>
            <Nav.Link as={Link} to="/shop/cart">
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default ColorSchemesExample;

// import {Outlet, Link} from "react-router-dom";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import './style.css'
//
// const Layout = () => {
//     return (
//         <header>
//             <Navbar expand="lg" className="bg-body-tertiary">
//                 <Container>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="me-auto">
//                             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action/3.2">
//                                     <nav className="navbar">
//                                         <ul className="navbar-nav">
//                                             <li className="nav-item">
//                                                 <Link to="/home" className="nav-link">Home</Link>
//                                             </li>
//                                             <li className="nav-item">
//                                                 <Link to="/shop/manager" className="nav-link">Manager</Link>
//                                             </li>
//                                             <li className="nav-item">
//                                                 <Link to="/shop/products" className="nav-link">Products</Link>
//                                             </li>
//                                             <li className="nav-item">
//                                                 <Link to="/shop/cart" className="nav-link">Cart</Link>
//                                             </li>
//                                             <li className="nav-item">
//                                                 <Link to="/shop/create" className="nav-link">Create</Link>
//                                             </li>
//                                             <li className="nav-item">
//                                                 <Link to="/shop/edit/:id" className="nav-link">Edit</Link>
//                                             </li>
//                                         </ul>
//                                     </nav>
//
//                                 </NavDropdown.Item>
//                             </NavDropdown>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </header>
//     );
// }
//
// export default Layout;
