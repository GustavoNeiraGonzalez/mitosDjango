import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from '../minHeight.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import ola from '../../utils/placeholder.jpg'
import style2 from './Compra.module.css'
export default function Compra() {
    const {mitoId} = useParams();
    const [data, setData] = useState([])
    const [dataComentario, setDataComentario] = useState([])
    const [comentario, setComentario] = useState()
    const [rating, setRating] = useState()
    const token = localStorage.getItem("token");
    const tokenHeader = {headers:{ Authorization: token }};
    //para obtener el mito en especifico
    useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/mitos/"+mitoId+"/"
      ,tokenHeader)
      .then(allData =>setData(allData.data))
      .catch(err =>{
        console.log(err.response.data)
      })
    }, [])
    //para obtener los comentarios
    useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/comentarios/mitos/"+mitoId+"/"
      ,tokenHeader)
      .then(all =>{
        setDataComentario(all.data);
        console.log(all.data);
      })
      .catch(err =>{
        console.log(err.response.data)
      })
    }, [])

    const HandleClick = (e) => {
      e.preventDefault()
      axios.post("http://127.0.0.1:8000/api/comentarios/",{
        rating:rating,
        comentario:comentario,
        mitos:data.mitoId
      },tokenHeader)
      .then((response)=>{
        console.log(response)
        console.log("subido :D")
      })
      .catch(err => console.log(err.response.data))

    }
    //useEffect para logear y guardar el token en el localstorage
    
    
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
            {data.historia}
            </Card.Text>
            <Button variant="primary">boton que no hace nada</Button>
        </Card.Body>
        </Card>
      <form  className={style2.form}>
        <label htmlFor="comentario" className={style2.label}>comentario:</label>
        <input
          type="text"
          id="comentario"
          name="comentario"
          className={style2.inputselect}
          onChange={(e) => {
            setComentario(e.target.value);}}
        />        
        <br />
        <label htmlFor="rating" className={style2.label}>Rating:</label>
        <select
          id="rating"
          name="rating"
          className={style2.inputselect}
          onChange={(e) => {
            setRating(e.target.value);}}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <br />
        <button type="submit" className={style2.button} onClick={HandleClick}>subir comentario</button>
    </form>
  </div>
    
  )
}
