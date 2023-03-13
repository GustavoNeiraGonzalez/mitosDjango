import React from 'react'
import style from './login.module.css'
export default function Login() {
  return (
    <div className={style.App}>
      <div className={style.loginContainer}>
        <h1>Iniciar sesión</h1>
        <form>
          <div className={style.formGroup}>
            <label>Nombre de usuario</label>
            <input type="text" className={style.formControl} placeholder="Ingresa tu nombre de usuario" />
          </div>
          <div className={style.formGroup}>
            <label>Contraseña</label>
            <input type="password" className={style.formControl} placeholder="Ingresa tu contraseña" />
          </div>
          <div className={style.formGroup}>
            <button type="submit" className="btn btn-primary">Iniciar sesión</button>
          </div>
        </form>
      </div>
    </div>
  )
}
