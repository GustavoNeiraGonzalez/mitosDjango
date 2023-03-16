import React from 'react'
import style from './header.module.css'
import { Link } from "react-router-dom";

export default function prueba() {
  return (
    <div className={style.navbar}>
      <Link to='/' className={style.navbarlink}>Home</Link>
      <Link to='/Login' className={style.navbarlink}>Inicio sesion</Link>
      <Link to='/' className={style.navbarlink}>Home2</Link>
      <Link to='/prueba' className={style.navbarlink}>Prueba</Link>
    </div>
  )
}
