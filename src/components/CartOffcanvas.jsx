import { useEffect, useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { useCart } from "../contexts/CartContext";
import { getTruckDataFromId } from "../util/db/trucks";
import { useCartButtonManager } from "../contexts/CartButtonContext";

export const CartOffcanvas = () => {
  const { showCart, stopShowingCart } = useCartButtonManager();
  const { cartItems, filterCart, totalItems } = useCart();
  const [userCart, setUserCart] = useState([]);
  const [truckData, setTruckData] = useState([]);

  useEffect(() => {
    filterCart();
    const idList = Object.keys(cartItems).map((key) => {
      const items = key.split(".");
      return { truck: items[0], section: items[1], item: items[2] };
    }); // Get the ids of the items in cart
    const neededTruckIds = Array.from(
      new Set(idList.map((entry) => entry.truck))
    );

    const getTruckDatasAndUpdate = async (trucks) => {
      let datas = [];
      for await (const id of trucks) {
        const data = await getTruckDataFromId(id);
        datas = [...datas, data];
      }
      setTruckData(datas);
    };

    setUserCart(idList);
    getTruckDatasAndUpdate(neededTruckIds);

    // eslint-disable-next-line
  }, [showCart]);

  const filterCartByTruck = (truckId) => {
    return userCart.filter((item) => item.truck === truckId);
  };

  const getQuantityForItem = (truckId, sectionId, itemId) => {
    const idString = `${truckId}.${sectionId}.${itemId}`;
    return cartItems[idString] ?? 0;
  };

  const getTotalPrice = () => {
    let total = 0;
    const getPriceFromTruck = (truckId, sectionId, itemId) => {
      const truck = truckData.find((data) => data._id === truckId);
      return truck?.menu[sectionId].items[itemId].price ?? 0;
    };
    userCart.forEach(
      (item) =>
        (total +=
          getQuantityForItem(item.truck, item.section, item.item) *
          getPriceFromTruck(item.truck, item.section, item.item))
    );
    return total !== 0 ? formatPrice(total) : "$0.00";
  };

  const formatPrice = (amount) => {
    return amount !== 0 ? `$${amount.toFixed(2)}` : "";
  };

  return (
    <Offcanvas show={showCart} onHide={stopShowingCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="font-oswald">
          <h1>My Cart</h1>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column font-nunito">
        {truckData.map((truck, index) => (
          <div key={index}>
            <h4 className="font-vollkorn">{truck.name}</h4>
            {filterCartByTruck(truck._id).map(
              (entry, index) =>
                getQuantityForItem(truck._id, entry.section, entry.item) !==
                  0 && (
                  <div className="d-flex flex-row gap-4" key={index}>
                    <p>
                      {getQuantityForItem(truck._id, entry.section, entry.item)}
                      x
                    </p>
                    <p>{truck.menu[entry.section].items[entry.item].name}</p>
                    <p className="flex-grow-1 text-end">
                      {formatPrice(
                        getQuantityForItem(
                          truck._id,
                          entry.section,
                          entry.item
                        ) * truck.menu[entry.section].items[entry.item].price
                      )}
                    </p>
                  </div>
                )
            )}
          </div>
        ))}
        <div className="mt-auto d-flex flex-row gap-2 justify-content-end align-items-center font-oswald">
          <h3 className="m-0">
            Total: <strong>{getTotalPrice() ?? 0}</strong>
          </h3>
          <Button variant="emerald-300" disabled={totalItems === 0}>
            Checkout
          </Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
