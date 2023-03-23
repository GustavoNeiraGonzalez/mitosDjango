import React, { useState } from 'react'
import style from './IngresarMitos.module.css'
import axios from 'axios'
import swal from 'sweetalert2';
export default function IngresarMitos() {
    const [Mito,setMito] = useState('');
    const [Historia,setHistoria] = useState('');
    const [Precio,setPrecio] = useState('');
    const [Foto,setFoto] = useState(null);
    const [imagenejemplo,setImagenejemplo] = useState(null);
    const token = localStorage.getItem("token");
    const tokenHeader = {headers:{ Authorization: token }};

    const [value, setValue] = React.useState('');

    const HandleClick = (e) => {
        e.preventDefault()
  
      //useEffect para logear y guardar el token en el localstorage
      if(Mito === '' || Historia==='' || Precio===0 ||isNaN(Precio)===true){
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "No dejar ningún campo vacio",
        })
      }else{
        const formData = new FormData();
        formData.append('Mito', Mito);
        formData.append('historia', Historia);
        formData.append('precio', Precio);
        formData.append('Foto', Foto);

        axios.post("http://127.0.0.1:8000/api/mitos/",
        formData
        , tokenHeader)

        .then((response)=>{
            console.log(response)
            swal.fire({
              icon: 'success',
              title: 'has ingresado el mito con exito :D',
              showConfirmButton: false,
              timer: 1500
            })
        })
        .catch(err => {console.log(err.response.data)
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.detail,
          })
        })
  
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
            value={value}
            onChange={(e) => {
              let newValue = e.target.value;

              if (!/^[0-9]*$/.test(newValue)) {
                newValue = newValue.replace(/[^0-9]/g, '');
              }
              setValue(newValue);
              setPrecio(value)
             }}
            />
        </div>
        <div className={style.formgroup}>
            <label htmlFor="foto" className={style.formgrouplabel}>Foto</label>
            <input type="file" name="foto"
            onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                    setFoto(e.target.files[0]);
                    //lo de abajo solo es para mostrarla en el cliente
                    setImagenejemplo(URL.createObjectURL(e.target.files[0]));
                  }
            }}
            />
            {imagenejemplo && <img src={imagenejemplo} alt="uploaded" />}

        </div>
        <button className={style.button} onClick={HandleClick}>Enviar</button>
    </form>
  )
}
