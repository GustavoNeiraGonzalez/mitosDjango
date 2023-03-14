import axios from 'axios';
import React, { useEffect, useState } from 'react'
import style from './login.module.css'
export default function Login() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  //funcion para utilizar en el button
  const HandleClick = (e) => {
      e.preventDefault()
    //useEffect para logear y guardar el token en el localstorage
      axios.post("http://127.0.0.1:8000/api/token/",{
          username:username,
          password:password
      })
      .then((response)=>(
        console.log(response.data.access)
      ))
      .catch(err =>{
        console.log(err.message)
      })
  }
  
    

  return (
    <div className={style.App}>
      <div className={style.loginContainer}>
        <h1>Iniciar sesión</h1>
        <form>
          <div className={style.formGroup}>
            <label>name</label>
            <input type="text" className={style.formControl} placeholder="Ingresa tu email" 
            onChange={(e) => {
              setUsername(e.target.value);
          }}/>
          </div>
          <div className={style.formGroup}>
            <label>Contraseña</label>
            <input type="password" className={style.formControl} placeholder="Ingresa tu contraseña" 
            onChange={(e) => {
              setPassword(e.target.value);
          }}/>
          </div>
            <button 
            onClick={HandleClick}>Iniciar sesión</button>
        </form>
      </div>
    </div>
  )
}
