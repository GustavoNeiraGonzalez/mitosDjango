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
    const [nombre, setNombre] = useState()
    const [user, setUser] = useState()


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
        )
        .then(all =>{
          setDataComentario(all.data);
          console.log(all.data);

          // Almacenar el valor del campo user
          const user = all.data[0].user;
          setUser(user);
          console.log(user)
        })
        .catch(err =>{
          console.log(err.response.data)
        })
    }, [])
    //aqui para obtener el nombre de user
    useEffect(() => {
      if (user){
        axios.get("http://127.0.0.1:8000/login/"+user+"/"
        )
        .then(all =>{
          setNombre(all.data.username);
          console.log(all.data);
        })
        .catch(err =>{
          console.log(err.response.data)
        })
      }
    }, [user])
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
    {dataComentario.map((comentario) =>{
        // Obtener la fecha de creación del comentario
      const fecha_creacion = comentario.created_at;
      const fecha = new Date(fecha_creacion);

      // Obtener el día, mes y año
      const dia = fecha.getDate();
      const mes = fecha.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
      const anio = fecha.getFullYear();

      // Obtener la hora y minutos
      const hora = fecha.getHours();
      const minutos = fecha.getMinutes();

      // Formatear la fecha como día/mes/año y hora:minutos
      const fecha_formateada = `${dia}/${mes}/${anio} ${hora}:${minutos}`;
      return (
      <div key={comentario.comentarioId} className={style2.comentario}>

          <div className={style2.usuarioFecha}>
            <span className={style2.nombreUsuario}>nombre de usuario: {nombre}</span>

            <span className={style2.fechaCreacion}>fecha:{fecha_formateada}</span>
          </div>
          <p className={style2.textoComentario}>{comentario.comentario}</p>
          <div className={style2.rating}>rating del mito :D :{comentario.rating}</div>
      </div>)
    })}
  </div>
    
  )
}
