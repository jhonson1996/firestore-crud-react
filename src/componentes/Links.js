import React, { useEffect, useState } from "react";
import LinkForm from "./LinkForm";
import { db } from "../firebase";
import { toast } from "react-toastify";

const Links = () => {
  const [links, setLinks] = useState([]);

  const addTask = async (linkObject) => {
    await db.collection("links").doc().set(linkObject);
    toast("nuevo link Agregado", {
      type: "success",
    });
  };

  const btnBorrarLink = async (id) => {
    if (window.confirm("Esta Segur@ de elimina este Enlace?")) {
      await db.collection("links").doc(id).delete();
      toast("Link Eliminado", {
        type: "error",
        autoClose: 2000,
      });
    }
  };

  const obtenerDatos = () => {
    db.collection("links").onSnapshot((datos) => {
      const docs = [];
      datos.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id });
      });
      setLinks(docs);
    });
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <div>
      <div className="col-md-4 p-2">
        <LinkForm addTask={addTask} />
      </div>
      {/* Mostrar */}
      <div className="col-md-8 p-2">
        {links.map((link) => (
          <div className="card mb-1" key={link.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h4>{link.name}</h4>
                <div>
                <i
                  className="material-icons text-danger"
                  onClick={() => btnBorrarLink(link.id)}
                >
                  close
                </i>
                <i className="material-icons">
                    create
                </i>
                </div>
              </div>
              <p>{link.descripcion}</p>
              <a href={link.url} target="_blank" rel="noreferrer">
                Ir al Sitio Web
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
