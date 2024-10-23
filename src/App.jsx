// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "../containers/ItemListContainer/ItemListContainer";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<CheckoutForm />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
