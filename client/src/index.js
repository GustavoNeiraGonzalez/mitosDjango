import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header'
import Prueba from './pages/prueba/prueba'
import Compra from './pages/Compra/Compra'
import Login from './pages/login/Login'
import style from './index.css'
import IngresarMitos from './pages/IngresarMitos/IngresarMitos'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header></Header>
    <Routes>
        <Route path="/" element={<App/>} />
        <Route exact path="/Compra/:mitoId" element={<Compra/>}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/IngresarMitos" element={<IngresarMitos/>}/>
    </Routes>
  </BrowserRouter>
);
