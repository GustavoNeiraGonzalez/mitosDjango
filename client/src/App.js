import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function App() {

  const [data, setData] = useState([])
  useEffect(() =>{
    axios.get('http://127.0.0.1:8000/api/mitos/')
    .then(allData =>setData(allData.data))
  },[])

  return (
    <Container >
      <Row >
        {
          data.map(total =>{
            
            return (
              <Card style={{ width: '18rem',margin: '10px' }} key={total.mitoId}>                
                {console.log(total.Foto)}
                <Card.Img variant="top" src={total.Foto} />
                <Card.Body>
                  <Card.Title>{total.Mito}</Card.Title>
                  <Card.Text>
                    {total.historia}
                  </Card.Text>
                  <Button variant="primary">Go :D</Button>
                </Card.Body>
              </Card>
              )
          })  
        }
      </Row>
    </Container>
    
      
  )
}
