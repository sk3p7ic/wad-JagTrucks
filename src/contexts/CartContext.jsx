import React, { useContext, useState } from "react";

const CartContext = React.createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (truckId, fullItemId, quantity) => {
    let cart = cartItems;
    cart = [...cart, { id: truckId, item: fullItemId, quantity: quantity }];
    setCartItems(cart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
