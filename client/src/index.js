import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header'
import Registrar from './pages/Registrar/Registrar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header></Header>
    <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/InicioSesion" element={<Registrar/>}/>
    </Routes>
  </BrowserRouter>
);
