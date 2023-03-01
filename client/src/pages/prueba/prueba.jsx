import React from 'react'
import style from './prueba.module.css'

export default function prueba() {
  return (
    <div className={style.navbar}>
      <a className={style.navbarlink} href='#home'>Home</a>
      <a className={style.navbarlink} href='#about'>About</a>
      <a className={style.navbarlink} href='#contact'>Contact</a>
    </div>
  )
}
