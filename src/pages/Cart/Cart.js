import { useContext } from "react";
import ContextShop from "../../context/ContextShop";
import ProductCard from "../Products/ProductCard";
import Layout from "../../components/Layout/Layout";

const Cart = () => {
  const ctxShop = useContext(ContextShop);
  const cartItems = ctxShop.cartItems;
  const totalPrice = ctxShop.totalPrice;
  const decreaseQuantity = ctxShop.decreaseQuantity;
  const increaseQuantity = ctxShop.increaseQuantity;
  return (
    <Layout>
      <h1 className="mb-4">Shopping Cart</h1>
      <div className="product-container">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <ProductCard
              key={item.id}
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
              _product={item}
            />
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className="product-total">
        <h3>Total Price: ${totalPrice}</h3>
      </div>
    </Layout>
  );
};

export default Cart;
