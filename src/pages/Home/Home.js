import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Whiskers & Co.</h1>
      <Link to="/shop/products" className="nav-link">
        <Button variant="dark">Go to products</Button>
      </Link>
    </div>
  );
};
export default Home;
