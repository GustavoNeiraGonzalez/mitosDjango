import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import style from './pages/minHeight.module.css'
import ola from './utils/placeholder.jpg'
import { Link } from 'react-router-dom';


export default function App() {
  const token = localStorage.getItem("token");
  const tokenHeader = { Authorization: token };
  const [data, setData] = useState([])
  console.log(token)
  useEffect(() =>{
    axios.get('http://127.0.0.1:8000/api/mitos/',{headers:tokenHeader})
    .then(allData =>setData(allData.data))
    .catch(error => console.log(error.response.data))
  },[])

  return (
    <Container className={style.minH}>
      <Row >
        {
          data.map(total =>{
            
            return (
              <Card style={{ width: '18rem',margin: '10px', backgroundColor:'antiquewhite', color:"black"}} key={total.mitoId}>                
                <Card.Img variant="top" src={total.Foto ? total.Foto : ola} className={style.radius+' '+style.maxheig}/>
                <Card.Body>
                  <Card.Title>{total.Mito}</Card.Title>
                  <Card.Text>
                    {total.historia}
                  </Card.Text>
                  <Card.Text>
                    ${total.precio}
                  </Card.Text>
                  <Link to={'/Compra/'+total.mitoId}><Button variant="primary">Ir a comprar</Button></Link>
                </Card.Body>
              </Card>
              )
          })  
        }
      </Row>
    </Container>
    
      
  )
}
