import ProductCard from "../Products/ProductCard";
import Layout from "../../components/Layout/Layout";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ContextShop from "../../context/ContextShop";
import "./style/styleManger.css";

const Manager = () => {
  const cxt = useContext(ContextShop);
  const { totalItems, deleteProductManager } = cxt;

  return (
    <Layout>
      <h1>Manager Tools</h1>
      <div className="product-container">
        {totalItems.map((product) => (
          <ProductCard
            key={product.id}
            manager={true}
            cxtDeleteManager={deleteProductManager}
            _product={product}
          />
        ))}
      </div>
      <Button className="fixed-bottom" variant="dark">
        <Link to={"/shop/create"} style={{ color: "white" }}>
          Create New
        </Link>
      </Button>
    </Layout>
  );
};

export default Manager;
