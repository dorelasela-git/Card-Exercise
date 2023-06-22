import ProductCard from "./ProductCard";
import "./style/styleProducts.css";
import { useContext } from "react";
import { ContextShop } from "../../context/ContextShop";
import Layout from "../../components/Layout/Layout";

const Products = () => {
  const contextShop = useContext(ContextShop);
  const { totalItems } = contextShop;

  return (
    <Layout>
      <h1 className="h1">Products</h1>
      <div className="product-container">
        {totalItems.map((product) => {
          return (
            <ProductCard
              key={product.id}
              _addToCart={() => contextShop.addToCart(product)}
              _product={product}
            />
          );
        })}
      </div>
    </Layout>
  );
};
export default Products;
