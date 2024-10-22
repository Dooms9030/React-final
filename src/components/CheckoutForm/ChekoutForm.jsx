// components/CheckoutForm/CheckoutForm.jsx
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const CheckoutForm = () => {
  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    card: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      buyer,
      items: [], // Aquí irían los items del carrito
      total: 100 // El total del carrito
    };

    const docRef = await addDoc(collection(db, "orders"), order);
    alert(`Compra realizada con éxito. ID de orden: ${docRef.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={buyer.name}
        onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={buyer.email}
        onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Tarjeta"
        value={buyer.card}
        onChange={(e) => setBuyer({ ...buyer, card: e.target.value })}
      />
      <button type="submit">Comprar</button>
    </form>
  );
};

export default CheckoutForm;
