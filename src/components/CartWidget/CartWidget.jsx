// components/CartWidget/CartWidget.jsx
import { useCart } from "../../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <div>
      <span>🛒</span>
      <span>{totalItems}</span>
    </div>
  );
};

export default CartWidget;
