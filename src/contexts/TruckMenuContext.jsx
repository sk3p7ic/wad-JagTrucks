import React, { useContext, useState } from "react";

const TruckMenuContext = React.createContext();

export const useTruckMenuManager = () => useContext(TruckMenuContext);

export const TruckMenuManagerProvider = ({ children }) => {
  const [orderableItems, setOrderableItems] = useState({});

  const addOrderableItem = (itemId) => {
    let items = orderableItems;
    setOrderableItems(Object.assign(items, { [itemId]: 0 }));
  };

  const incrItemInCart = (itemId) => {
    let items = orderableItems;
    const quant = items[itemId] + 1 ?? 0;
    items = { ...items, [itemId]: quant };
    setOrderableItems(items);
  };

  const decrItemInCart = (itemId) => {
    let items = orderableItems;
    const quant = items[itemId] > 0 ? items[itemId] - 1 ?? 0 : 0;
    items = { ...items, [itemId]: quant };
    setOrderableItems(items);
  };

  return (
    <TruckMenuContext.Provider
      value={{
        orderableItems,
        addOrderableItem,
        incrItemInCart,
        decrItemInCart,
      }}
    >
      {children}
    </TruckMenuContext.Provider>
  );
};
