import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import style from './pages/minHeight.module.css';
import ola from './utils/placeholder.jpg';
import { Link } from 'react-router-dom';

export default function App() {
  const token = localStorage.getItem('token');
  const tokenHeader = { Authorization: token };
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/mitos/', { headers: tokenHeader })
      .then((allData) => setData(allData.data))
      .catch((error) => {
        console.log(error);
        console.log(error.response.data);
        if (error.response.data.detail === 'Given token not valid for any token type') {
          localStorage.removeItem('token');
        }
      });
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      // Verificar si el producto ya está en el carrito
      if (prevItems.some((item) => item.mitoId === product.mitoId)) {
        // Si el producto ya está en el carrito, no agregarlo de nuevo
        return prevItems;
      } else {
        // Si el producto no está en el carrito, agregarlo
        return [...prevItems, product];
      }
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.mitoId !== product.mitoId)
    );
    if (cartItems.length === 1) {
      setIsCartOpen(false);
    }
  };

  return (
    <Container className={style.minH}>
      <div className={`${style.cartcontainer} ${isCartOpen ? 'open' : ''}`}>
        <h2 className={style.cartcontainerh2}>Carrito de compras</h2>
        <button className={style.cartcontainerbutton}
        onClick={() => setIsCartOpen(!isCartOpen)}>
          
          {isCartOpen ? 'Cerrar -' : 'abrir +'}
        </button>

        {isCartOpen && (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item.mitoId}>
                  {item.Mito} - ${item.precio}
                  <button className={style.cartcontainerbutton} onClick={() => handleRemoveFromCart(item)}>
                    Eliminar del carrito
                  </button>
                </li>
              ))}
            </ul>

            <p>Total: ${cartItems.reduce((total, item) => total + item.precio, 0)}</p>
          </>
        )}
      </div>
      <Row>
        {data.map((total) => (
          <Card
            style={{
              width: '18rem',
              margin: '10px',
              backgroundColor: 'antiquewhite',
              color: 'black',
            }}
            key={total.mitoId}
          >
            <Card.Img
              variant="top"
              src={total.Foto ? total.Foto : ola}
              className={style.radius + ' ' + style.maxheig}
            />
            <Card.Body>
              <Card.Title>{total.Mito}</Card.Title>
              <Card.Text>{total.historia}</Card.Text>
              <Card.Text>${total.precio}</Card.Text>
              <Button onClick={() => handleAddToCart(total)}>
                Agregar al carrito
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>

      

    </Container>
  );
}