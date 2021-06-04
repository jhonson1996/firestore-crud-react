import React from "react";
import "./App.css";
import Tienda from "./componentes/Tienda";

function App() {
  return (
    <div className="wrap">
      <h1>Galeria De Animales</h1>
      <div className="container p-4">
        <Tienda/>
      </div>
</div>
    );
}

export default App;
