import React, { useContext, useEffect, useState } from "react";

const CartContext = React.createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let total = 0;
    Object.values(cartItems).forEach((item) => {
      total += item;
    });
    setTotalItems(total);
  }, [cartItems]);

  const updateItem = (fullItemId, quantity) => {
    let cart = cartItems;
    Object.assign(cart, { [fullItemId]: quantity });
    setCartItems({ ...cartItems });
  };

  const filterCart = () => {
    const cart = Object.fromEntries(
      Object.entries(cartItems).filter((entry) => entry[1] !== 0)
    );
    setCartItems(cart);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, totalItems, updateItem, filterCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
