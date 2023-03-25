import React, { useState } from 'react'
import style from './header.module.css'
import { Link } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import swal from 'sweetalert2';


export default function Header() {

  const token = localStorage.getItem('token');
  const tokenHeader = {headers:{ Authorization: token }};
  let loggedInUserId = null;
  let isTokenExpired = true;


  if (token) {
    const decodedToken = jwtDecode(token);
    loggedInUserId = decodedToken.user_id;
    isTokenExpired = decodedToken.exp * 1000 < Date.now();

  }



  function handleLogout() {
    // Elimina el token del localStorage
    localStorage.removeItem('token');
    swal.fire({
      icon: 'success',
      title: 'Cerrando sesión',
      showConfirmButton: false,
      timer: 1500
    })
    loggedInUserId = null;
    isTokenExpired = true;
  }
  
  return (
    <div className={style.navbar}>
      <Link to='/' className={style.navbarlink}>Home</Link>
      <Link to='/Login' className={style.navbarlink}>Inicio sesion</Link>
      <Link to='/IngresarMitos' className={style.navbarlink}>Ingresar mitos</Link>
      {loggedInUserId && !isTokenExpired && (

      <button className={style.button} onClick={handleLogout}>Cerrar sesión</button>
      )}
    </div>
  )
}
