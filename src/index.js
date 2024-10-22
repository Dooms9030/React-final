// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa el componente principal
import './styles/styles.css'; // Importa los estilos globales

const root = ReactDOM.createRoot(document.getElementById('root')); // Vincula el root del DOM con React
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
