import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import style from './login.module.css'
export default function Login() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  //funcion para utilizar en el button
  
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);



  const HandleClick = (e) => {
      e.preventDefault()

    //useEffect para logear y guardar el token en el localstorage
    if(username === '' || password===''){
      console.log("No dejar en blanco password username")
    }else{

      axios.post("http://127.0.0.1:8000/api/token/",{
          username:username,
          password:password
      })
      .then((response)=>{
        localStorage.setItem('token', 'Bearer '+response.data.access)
        console.log("logeado:D")
        inputRef.current.value = "";
        inputRef2.current.value = "";
      })
      .catch(err => console.log(err.response.data))

    }
  }
  
    

  return (

    <div className={style.App}>
      <div className={style.loginContainer}>
        <h1>Iniciar sesión</h1>
        <form>
          <div className={style.formGroup}>
            <label>name</label>
            <input ref={inputRef} type="text" className={style.formControl} placeholder="Ingresa tu email" 
            onChange={(e) => {
              setUsername(e.target.value);
          }}/>
          </div>
          <div className={style.formGroup}>
            <label>Contraseña</label>
            <input ref={inputRef2} type="password" className={style.formControl} placeholder="Ingresa tu contraseña" 
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
