import React, { useState } from "react";
import Descripcion from "./DescripsionArticulo";
const Datos = ({ productos }) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const detalles = (art) => {
    setId(art.id);
    setTitle(art.nombre);
    setDescripcion(art.descripcion);
  };


  return (
    <>
      <div className="sec">
        {productos.map((art) => (
          <div className="art" key={art.id}>
            <img
              className="rounded  d-block"
              src={art.image}
              alt=""
            />
            <button
              onClick={() => detalles(art)}
              type="button"
              className="btn btn-primary btn-block"
              data-toggle="modal"
              data-target={`#${art.id}`}
            >
              {art.nombre}
            </button>
          </div>
        ))}

        <Descripcion
          productos={productos}
          id={id}
          titulo={title}
          descripcion={descripcion}
        />
      </div>
    </>
  );
};
export default Datos;
