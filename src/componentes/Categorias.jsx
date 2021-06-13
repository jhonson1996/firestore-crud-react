import React from "react";

//

function Categoria({selectCategory, logout}) {
  
  
  return (
    <div className="category_list" id="con">
      <button className="category-item" onClick={(e)=> selectCategory('all')}>Todo</button>
      <button className="category-item" onClick={(e)=> selectCategory('aceite')}>Animal</button>
      <button className="category-item" onClick={(e)=> selectCategory('comida')}>Natual</button>
      <button className="category-item" onClick={(e)=> selectCategory('crema')}>Tecnologia</button>
      <button className="salir" onClick={logout}>Salir</button>
    </div>
  );
}

export default Categoria;
