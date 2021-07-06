import React from "react";
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary d-flex justify-content-between">
      <a className="navbar-brand" href="#/">
        Bienvenidos
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          
          <li className="nav-item">
            <Link className="nav-link" to={"/inicio"}>
              Iniciar Seccion
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/registro"}>
              Registrarme
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navegacion;
