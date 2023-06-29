import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Form, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ContextShop from "../../context/ContextShop";
import './style.css'

const NavbarLayout = () => {
  const { setFilter, category, setSelectedCategory } = useContext(ContextShop);

  return (
    <>
      <Navbar sticky="top" bg="dark" data-bs-theme="dark">
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
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setFilter(e.target.value)}
              />
            </Form>
            <div className="pagination">
            <select
              title="Categories"
              id="collasible-nav-dropdown"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {Object.entries(category).map(([key, value]) => (
                <option key={key} value={value}>
                  {value}
                </option>
              ))}
            </select>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarLayout;
