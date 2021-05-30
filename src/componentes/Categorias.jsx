import React from "react";

//import Articulos from './Articulos'

function Categoria() {
  return (
    <div className="category_list" id="con">
      <h1>Categorias</h1>
      <button className="category-item" id="aceites" onClick={name}>
        Aceites
      </button>
      <button className="category-item" id="comidas" onClick={name}>
        Comidas
      </button>
      <button className="category-item" id="cremas" onClick={name}>
        Cremas
      </button>
    </div>
  );
}

export default Categoria;
