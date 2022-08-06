import React, { useContext, useState } from "react";

const CartContext = React.createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (truckId, fullItemId, quantity) => {
    let cart = cartItems;
    cart = [...cart, { truck: truckId, item: fullItemId, quantity: quantity }];
    setCartItems(cart);
  };

  const cartTotalItems = () => {
    let total;
    total = cartItems.length;
    return total;
  };

  return (
    <CartContext.Provider value={{ cartItems, cartTotalItems, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
