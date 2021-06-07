import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Registro from './componentes/Registro'
import Navegacion from './componentes/BarraNavegacion';
import Inicio from './componentes/Inicio'
import './firebase';
import 'bootswatch/dist/quartz/bootstrap.min.css'




ReactDOM.render(
  <div>
    <Navegacion/>
    <Inicio/>
    <Registro />

  </div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

