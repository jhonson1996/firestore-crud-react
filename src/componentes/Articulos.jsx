import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Descripcion from './DescripsionArticulo'
const Datos = ({ productos }) => {
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')

  const detalles = (art) => {
    setId(art.id)
    setTitle(art.nombre)
  }

  const product = () => {
    console.log('llego')

  }


  return (
    <>
    <div className="sec">

      {productos.map((art) => (
        
        
        <div className="art" onClick={()=>detalles(art)} key={art.id}>
          <img className="d-flex  flex-column rounded mx-auto d-block" src={art.image} alt="" />
          <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target={`#${art.id}`}>{art.nombre}</button>
        </div>
        
        
        
        ))
        
        }
        

      <Descripcion productos={productos} id={id} titulo={title} />
    </div>
    </>
  );
};
export default Datos;
