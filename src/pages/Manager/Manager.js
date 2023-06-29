import ProductCard from "../Products/ProductCard";
import Layout from "../../components/Layout/Layout";
import { Button, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ContextShop from "../../context/ContextShop";
import "./style/styleManger.css";

const Manager = () => {
  const cxt = useContext(ContextShop);
  const {
    deleteProductManager,
    totalItems,
    currentPage,
    setCurrentPage,
    paginate,
    newItems,
    itemsPerPage,
  } = cxt;
  const handlePageChange = (pageNumber) => {
    paginate(pageNumber);
  };

  return (
    <Layout>
      <h1>Manager Tools</h1>
      <div className="product-container">
        {newItems.map((product) => (
          <ProductCard
            key={product.id}
            manager={true}
            cxtDeleteManager={deleteProductManager}
            _product={product}
          />
        ))}
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
      <Button className="fixed-bottom" variant="dark">
        <Link to={"/shop/create"} style={{ color: "white" }}>
          Create New
        </Link>
      </Button>
    </Layout>
  );
};

export default Manager;
