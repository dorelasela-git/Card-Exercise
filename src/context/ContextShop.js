import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContextShop = createContext({});

export const ContextShopProvider = ({ children }) => {
  const [totalItems, setTotalItems] = useState([]);
  const [newItems, setNewItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    paginate(currentPage);
  }, [currentPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    const startFromWhere = (pageNumber - 1) * itemsPerPage;
    const numberPerPage = itemsPerPage;
    const propertiesYouWantToShow = "title,description,price,thumbnail";

    console.log(pageNumber);

    const fetchFilteredItems = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products?limit=${numberPerPage}&skip=${startFromWhere}&select=${propertiesYouWantToShow}`
        );
        setNewItems(response.data.products);
      } catch (error) {
        console.error("Error fetching filtered items:", error);
      }
    };

    fetchFilteredItems();
  };

  useEffect(() => {
    if (filter) {
      axios
        .get(`https://dummyjson.com/products/search?q=${filter}`)
        .then((response) => setNewItems(response.data.products));
    }
  }, [filter]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/categories `)
      .then((response) => setCategory(response.data));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      axios
        .get(` https://dummyjson.com/products/category/${selectedCategory}`)
        .then((response) => setNewItems(response.data.products));
    }
  }, [selectedCategory]);

  console.log(selectedCategory);

  useEffect(() => {
    const getData = () => {
      axios.get(`https://dummyjson.com/products?limit=100`).then((response) => {
        setTotalItems(response.data.products);
      });
    };
    getData();
  }, []);

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
    axios
      .post(` https://dummyjson.com/products/add`, newProduct)
      .then((response) => {
        setTotalItems([response.data, ...totalItems]);
      })
      .catch((error) => {
        console.error("Error creating a new product:", error);
      });
  };

  const deleteProductManager = (id) => {
    axios.delete(` https://dummyjson.com/products/${id}`).then((response) => {
      setTotalItems(totalItems.filter((item) => item.id !== id));

      const deletedFromCart = cartItems.find((item) => item.id === id);
      if (deletedFromCart) {
        setCartItems(cartItems.filter((item) => item.id !== id));
      }
    });
  };

  const editProduct = (updatedProduct, id) => {
    axios
      .put(`https://dummyjson.com/products/${id}`, updatedProduct)
      .then((response) => {
        setTotalItems((prevProducts) => {
          const updatedProducts = prevProducts.map((product) => {
            if (product.id === updatedProduct.id) {
              return response.data;
            }
            return product;
          });
          return updatedProducts;
        });
        setCartItems((prevProducts) => {
          const updatedProducts = prevProducts.map((product) => {
            return product.id === updatedProduct.id
              ? { ...response.data, quantity: product.quantity }
              : product;
          });
          return updatedProducts;
        });
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
        setTotalItems,
        newItems,
        cartItems,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        paginate,
        addToCart,
        editProduct,
        deleteProductManager,
        createManager,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
        setFilter,
        category,
        setSelectedCategory,
      }}
    >
      {children}
    </ContextShop.Provider>
  );
};
export default ContextShop;
