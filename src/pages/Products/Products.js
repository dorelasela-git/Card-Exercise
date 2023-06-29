import ProductCard from "./ProductCard";
import "./style/styleProducts.css";
import { useContext } from "react";
import { ContextShop } from "../../context/ContextShop";
import Layout from "../../components/Layout/Layout";
import { Pagination } from "react-bootstrap";

const Products = () => {
  const contextShop = useContext(ContextShop);
  const {
    totalItems,
    currentPage,
    setCurrentPage,
    paginate,
    newItems,
    itemsPerPage,
  } = useContext(ContextShop);

  const handlePageChange = (pageNumber) => {
    paginate(pageNumber);
  };

  return (
    <Layout>
      <h1 className="h1">Products</h1>
      <div className="product-container">
        {newItems.map((product) => {
          return (
            <ProductCard
              key={product.id}
              _addToCart={() => contextShop.addToCart(product)}
              _product={product}
            />
          );
        })}
      </div>
      <Pagination style={{ paddingBottom: "20px" }}>
        {[...Array(Math.ceil(totalItems.length / itemsPerPage)).keys()].map(
          (pageNumber) => (
            <Pagination.Item
              key={pageNumber}
              active={pageNumber + 1 === currentPage}
              onClick={() => handlePageChange(pageNumber + 1)}
            >
              {pageNumber + 1}
            </Pagination.Item>
          )
        )}
      </Pagination>
    </Layout>
  );
};
export default Products;
