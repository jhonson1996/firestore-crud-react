import React, { useEffect, useState } from "react";
import { db } from "../firebase"
import img from '../fotos/aceites/1.png'

const Datos = () => {
  const [productos, setProductos] = useState([]);

  const getDatos = () => {
    db.collection("Productos").onSnapshot((datos) => {
      const dato = [];
      datos.forEach((doc) => {
        dato.push({...doc.data(), id: doc.id});
      });
      setProductos(dato);
    });
  };

  useEffect(() => {
      getDatos();
  },[]);


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
