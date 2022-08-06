import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useTruckMenuManager } from "../../../contexts/TruckMenuContext";

export const MenuItemQuantitySelector = ({ fullItemId, isOrderable }) => {
  const { addOrderableItem, incrItemInCart, decrItemInCart } =
    useTruckMenuManager();
  const [itemQuantity, setItemQuantity] = useState(0);

  useEffect(() => {
    if (isOrderable) addOrderableItem(fullItemId);
    // eslint-disable-next-line
  }, []);

  const incr = () => {
    let quantity = itemQuantity;
    quantity++;
    setItemQuantity(quantity);
    incrItemInCart(fullItemId);
  };

  const decr = () => {
    let quantity = itemQuantity;
    if (quantity > 0) quantity--;
    setItemQuantity(quantity);
    decrItemInCart(fullItemId);
  };

  return (
    <div
      className="d-flex flex-row gap-2 align-items-center bg-amber-50 rounded-3"
      style={{ opacity: isOrderable ? 100 : 0 }}
    >
      <Button
        className="rounded-0 rounded-start"
        disabled={!isOrderable}
        onClick={() => decr()}
      >
        -
      </Button>
      <span>{itemQuantity}</span>
      <Button
        className="rounded-0 rounded-end"
        disabled={!isOrderable}
        onClick={() => incr()}
      >
        +
      </Button>
    </div>
  );
};
