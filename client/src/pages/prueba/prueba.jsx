import React, { useState } from 'react'
import style from './prueba.module.css'
export default function Prueba() {
  
  const products = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
  ];
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
  };
  return (
    <div className={style.color}>
    <h2>Productos</h2>
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
          <button onClick={() => handleAddToCart(product)}>
            Agregar al carrito
          </button>
        </li>
      ))}
    </ul>

    <h2>Carrito de compras</h2>
    <ul>
      {cartItems.map((item) => (
        <li key={item.id}>
          {item.name} - ${item.price}
          <button onClick={() => handleRemoveFromCart(item)}>
            Eliminar del carrito
          </button>
        </li>
      ))}
    </ul>

    <p>Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
  </div>
  )
}