// components/NavBar/NavBar.jsx
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cart">Carrito</Link>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
