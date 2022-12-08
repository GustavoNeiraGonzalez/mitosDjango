import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from '../minHeight.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import ola from '../../utils/placeholder.jpg'

export default function Compra() {

    const {mitoId} = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/mitos/"+mitoId+"/")
      .then(allData =>setData(allData.data))
    }, [])

    
  return (
    <div className={style.minH}>
        {console.log(data)}
        
        <Card style={{ width: '18rem', backgroundColor:"antiquewhite", color:"black"}}>
        <Card.Img variant="top" src={ data.Foto ? data.Foto : ola} />
        <Card.Body>
            <Card.Title>{data.Titulo}</Card.Title>
            <Card.Text>
            {data.mitoId}
            </Card.Text>
            <Card.Text>
            {data.Historia}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </div>
    
  )
}
