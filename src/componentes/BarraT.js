import React from "react";
import { Link } from "react-router-dom";


const BarraT = ({ User, logout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient">
      <a className="navbar-brand" href="#/">
        Bienvenido {User}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse d-flex justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              href="/#"
            >
              Perfil
            </a>

            <div
              className="dropdown-menu"
              id="menu"
              aria-labelledby="navbarDropdown"
            >
              <Link className="dropdown-item " to="/perfil">
                Datos Personales
              </Link>
              <a className="dropdown-item" href="/#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to={"/inicio"} onClick={logout}>
                Salir
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BarraT;