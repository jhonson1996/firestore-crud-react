import React from "react";

const Datos = ({ productos }) => {
  return (
    <div className="product-list">
      {productos.map((art) => (
        <div className="product-item" category="aceites" key={art.id}>
          <img src={art.image} alt="" />
          <button>{art.nombre}</button>
        </div>
      ))}
    </div>
  );
};
export default Datos;
