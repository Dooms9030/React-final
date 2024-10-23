// context/CartContext.jsx
import { createContext, useState, useContext } from "react";


const CartContext = createContext();

export const useCart = () => useContext(CartContext);


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);

  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};
