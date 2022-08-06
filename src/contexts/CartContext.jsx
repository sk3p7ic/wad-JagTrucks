import React, { useContext, useEffect, useState } from "react";

const CartContext = React.createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let total = 0;
    console.log(cartItems);
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

  return (
    <CartContext.Provider value={{ cartItems, totalItems, updateItem }}>
      {children}
    </CartContext.Provider>
  );
};
