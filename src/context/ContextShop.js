import React, { createContext, useEffect, useState } from "react";
import productsData from "../pages/Products/productsData";

export const ContextShop = createContext({});

export const ContextShopProvider = ({ children }) => {
  const [totalItems, setTotalItems] = useState(productsData);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calTotalPrice = () => {
      const totalPrice = cartItems.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantity,
        0
      );
      setTotalPrice(totalPrice.toFixed(2));
    };
    calTotalPrice();
  }, [cartItems]);

  const createManager = (newProduct) => {
    setTotalItems([newProduct, ...totalItems]);
  };

  const deleteProductManager = (id) => {
    setTotalItems(totalItems.filter((item) => item.id !== id));

    const deletedFromCart = cartItems.find((item) => item.id === id);
    if (deletedFromCart) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    }
  };

  const editProduct = (updatedProduct) => {
    setTotalItems((prevProducts) => {
      const updatedProducts = prevProducts.map((product) => {
        if (product.id === updatedProduct.id) {
          return updatedProduct;
        }
        return product;
      });
      return updatedProducts;
    });
    setCartItems((prevProducts) => {
      const updatedProducts = prevProducts.map((product) => {
        return product.id === updatedProduct.id
          ? { ...updatedProduct, quantity: product.quantity }
          : product;
      });
      return updatedProducts;
    });
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, quantity: 1 },
      ]);
    }
  };

  const increaseQuantity = (id) => {
    setCartItems((items) => {
      return items.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    });
  };

  const decreaseQuantity = (id) => {
    setCartItems((items) => {
      const updatedItems = items.map((item) => {
        if (item.id === id) {
          item.quantity--;

          if (item.quantity <= 0) {
            return null;
          }
        }
        return item;
      });

      return updatedItems.filter((item) => item !== null);
    });
  };

  return (
    <ContextShop.Provider
      value={{
        totalItems,
        cartItems,
        addToCart,
        editProduct,
        deleteProductManager,
        createManager,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
      }}
    >
      {children}
    </ContextShop.Provider>
  );
};
export default ContextShop;
