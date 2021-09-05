import React from 'react'
import { connect, useSelector } from "react-redux";


function Perfil({ Usuario }) {
  /* const  Usuario = useSelector(state => state.Usuario) */
  console.log("user: " + Usuario);

  return (
    <div className="btn-group-vertical ">
      <h1>{Usuario}</h1>
    </div>
  );
}
  
  const mapStateToProps = (state) => {
    return {
      Usuario: state.Usuario,
    };
  };

  export default connect(mapStateToProps)(Perfil);
  /* export default Perfil; */
