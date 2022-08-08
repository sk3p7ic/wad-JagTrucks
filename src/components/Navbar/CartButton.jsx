import { Nav, Button } from "react-bootstrap";
import { MdShoppingCart } from "react-icons/md";
import { useCartButtonManager } from "../../contexts/CartButtonContext";
import { useCart } from "../../contexts/CartContext";

export const CartButton = () => {
  const { cartToggleButtonRef } = useCartButtonManager();
  const { totalItems } = useCart();
  return (
    <Nav.Item>
      <Button
        variant="outline-emerald-300"
        className="position-relative p-2 rounded-circle"
        ref={cartToggleButtonRef}
      >
        <MdShoppingCart size={32} />
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger font-nunito">
          {totalItems}
        </span>
      </Button>
    </Nav.Item>
  );
};
