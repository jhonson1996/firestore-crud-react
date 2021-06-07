import React, {useState} from 'react'

const Navegacion = () => {
    const [registo, setRegisto] = useState('')
    const [inicio, setInicio] = useState('')
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="d-flex justify-content-between container">
            <a className="navbar-brand" href="/#">Bienvenidos</a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse d-flex justify-content-end" id="navbarColor01" >
                <ul className="navbar-nav flex">
                    <li className="nav-item">
                        <a className="nav-link" href="/#" data-toggle="modal" data-target="#Modal1">Iniciar Seccion</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#" data-toggle="modal" data-target="#Modal">Registrarme</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Salir</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navegacion;