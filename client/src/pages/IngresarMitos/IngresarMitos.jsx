import React, { useState } from 'react'
import style from './IngresarMitos.module.css'
import axios from 'axios'
export default function IngresarMitos() {
    const [Mito,setMito] = useState('');
    const [Historia,setHistoria] = useState('');
    const [Precio,setPrecio] = useState('');
    const [Foto,setFoto] = useState('');
    const token = localStorage.getItem("token");
    const tokenHeader = { Authorization: token };


    const HandleClick = (e) => {
        e.preventDefault()
  
      //useEffect para logear y guardar el token en el localstorage
      if(Mito === '' || Historia==='' || Precio===0 ||isNaN(Precio)===true){
        console.log("No dejar en blanco password username precio ")
      }else{
        axios.post("http://127.0.0.1:8000/api/mitos/",{
            Mito:Mito,
            historia:Historia,
            precio:Precio,
            Foto:Foto,
            headers:tokenHeader
        })
        .then((response)=>{
            console.log(response)
        })
        .catch(err => console.log(err.response.data))
  
      }
    }
    

  return (
    <form className={style.form} >
        <div className={style.formgroup}>
        <label htmlFor="mito" className={style.formgrouplabel}>Mito</label>
        <input type="text" name="mito"
            className={style.formgroupinput}
            onChange={(e) => {
                setMito(e.target.value);
            }}
        />
        </div>
        <div className={style.formgroup}>
        <label htmlFor="historia" className={style.formgrouplabel}>Historia</label>
        <input type="text" name="historia"
            className={style.formgroupinput}
            onChange={(e) => {
                setHistoria(e.target.value);
            }}
        />
        </div>
        <div className={style.formgroup}>
        <label htmlFor="precio" className={style.formgrouplabel}>Precio</label>
        <input type="text" name="precio"
            className={style.formgroupinput}
            onChange={(e) => {
                setPrecio(e.target.value);
            }}
            />
        </div>
        <div className={style.formgroup}>
            <label htmlFor="foto" className={style.formgrouplabel}>Foto</label>
            <input type="file" name="foto"
            onChange={(e) => {
                const archivo = e.target.files[0];
                const archivoBase64 = archivo.toDataURL();
                setFoto(archivoBase64);
            }}
            />
        </div>
        <button className={style.button} onClick={HandleClick}>Enviar</button>
    </form>
  )
}
