// components/Item/Item.jsx
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <Link to={`/item/${product.id}`}>Ver detalles</Link>
    </div>
  );
};

export default Item;
