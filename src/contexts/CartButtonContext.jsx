import React, { useContext, useEffect, useRef, useState } from "react";

const CartButtonContext = React.createContext();

export const useCartButtonManager = () => useContext(CartButtonContext);

export const CartButtonManagerProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const cartToggleButtonRef = useRef();

  const stopShowingCart = () => setShowCart(false);

  useEffect(() => {
    if (cartToggleButtonRef.current) {
      cartToggleButtonRef.current.onclick = () => setShowCart(true);
      console.log("set onclick for ", cartToggleButtonRef.current);
    }
  }, [cartToggleButtonRef]);

  return (
    <CartButtonContext.Provider
      value={{ cartToggleButtonRef, showCart, stopShowingCart }}
    >
      {children}
    </CartButtonContext.Provider>
  );
};
