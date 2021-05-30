import React from "react";
import "./App.css";
//import Links from "./componentes/Links";
import Categorias from "./componentes/Categorias";
import Articulos from "./componentes/Articulos";

function App() {
  return (
    <div className="container p-4">
      <div className="wrap">
        <h1>Tienda Canabica</h1>
        <div className="container">
        <Categorias/>
        <section className="product">
        <Articulos/>
        </section>
        </div>
      </div>
    </div>
  );
}

export default App;
