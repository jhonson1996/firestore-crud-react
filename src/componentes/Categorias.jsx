import React from "react";
import Articulos from "./Articulos";
//import Articulos from './Articulos'

function Categoria() {

  const name = (e) => {
    console.log(e.target.id);
  }
  

  return (
    <div className="wrap">
      <h1>Tienda Cannabica</h1>
        <div className="container">
      <div className="category_list" id="con">
        <h1>Categorias</h1>
        <button className="category-item" id='aceites' onClick={name}>Aceites</button>
        <button className="category-item" id='comidas' onClick={name}>Comidas</button>
        <button className="category-item" id='cremas' onClick={name}>Cremas</button>
      </div>

    <section className="product">
    <Articulos/>
    </section>
      
    </div>
    </div>
  );
}

export default Categoria;
