import React from "react";

//

function Categoria({selectCategory}) {
  
  
  return (
    <div className="btn-group-vertical " >
      <button className="btn btn-primary mb-1" onClick={(e)=> selectCategory('all')}>Todo</button>
      <button className="btn btn-primary mb-1" onClick={(e)=> selectCategory('aceite')}>Animal</button>
      <button className="btn btn-primary mb-1" onClick={(e)=> selectCategory('comida')}>Natual</button>
      <button className="btn btn-primary mb-1" onClick={(e)=> selectCategory('crema')}>Tecnologia</button>
    </div>
  );
}

export default Categoria;
