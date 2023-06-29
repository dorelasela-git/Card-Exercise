import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({
  _product,
  _addToCart,
  manager,
  cxtDeleteManager,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const location = useLocation();
  const showCartButtons = location.pathname === "/shop/cart";

  return (
    <Card>
      <Card.Img
        variant="top"
        src={_product.thumbnail}
        style={{ width: "100%", height: "200px", objectFit: "fill" }}
      />
      <Card.Body>
        <Card.Title>{_product.title}</Card.Title>
        <Card.Text>
          <b>${_product.price}</b>
        </Card.Text>
        {manager ? (
          <>
            <div className="manager-buttons">
              <Button
                variant="danger"
                onClick={() => {
                  cxtDeleteManager(_product.id);
                }}
              >
                Delete
              </Button>
              <Button
                variant="secondary"
                as={Link}
                to={`/shop/edit/${_product.id}`}
              >
                Edit
              </Button>
            </div>
          </>
        ) : showCartButtons ? (
          <>
            <Button
              variant="danger"
              onClick={() => {
                decreaseQuantity(_product.id);
              }}
            >
              -
            </Button>
            <span>Quantity : {_product.quantity}</span>
            <Button
              variant="dark"
              onClick={() => {
                increaseQuantity(_product.id);
              }}
            >
              +
            </Button>
          </>
        ) : (
          <>
            <Button variant="dark" onClick={_addToCart}>
              Add to cart
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
};
export default ProductCard;
