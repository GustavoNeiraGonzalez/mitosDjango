import React from 'react'
import style from './IngresarMitos.module.css'
export default function IngresarMitos() {

    

  return (
    <form className={style.form} >
        <div className={style.formgroup}>
        <label htmlFor="mito" className={style.formgrouplabel}>Mito</label>
        <input
            type="text"
            name="mito"
            className={style.formgroupinput}
        />
        </div>
        <div className={style.formgroup}>
        <label htmlFor="historia" className={style.formgrouplabel}>Historia</label>
        <input 
            type="text"
            name="historia"
            className={style.formgroupinput}
        />
        </div>
        <div className={style.formgroup}>
        <label htmlFor="precio" className={style.formgrouplabel}>Precio</label>
        <input type="text"
            name="precio"
            className={style.formgroupinput}
            />
        </div>
        <div className={style.formgroup}>
            <label htmlFor="foto" className={style.formgrouplabel}>Foto</label>
            <input
            type="file"
            name="foto"
            />
        </div>
        <button type="submit" className={style.button}>Enviar</button>
    </form>
  )
}
