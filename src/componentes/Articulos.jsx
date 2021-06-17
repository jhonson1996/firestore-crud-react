import React from "react";
import {Link} from 'react-router-dom'
const Datos = ({ productos }) => {
  return (
    <div className="product-list">
      {productos.map((art) => (
        <div className="product-item" category="aceites" key={art.id}>
          <img src={art.image} alt="" />
          <Link to={`/artuculo/${art.id}`}>{art.nombre}</Link>
        </div>
      ))}
    </div>
  );
};
export default Datos;
