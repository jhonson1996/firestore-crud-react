import React from "react";
import {Link} from 'react-router-dom'
const Datos = ({ productos }) => {
  return (
    <div className="sec">
      {productos.map((art) => (
        <div className="art"  key={art.id}>
          <img className="d-flex flex-column rounded mx-auto d-block" src={art.image} alt="" />
          <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal">{art.nombre}</button>
        </div>
      ))}
    </div>
  );
};
export default Datos;
