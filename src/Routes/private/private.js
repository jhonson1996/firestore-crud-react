import React from 'react'
import Tienda from '../../componentes/Tienda'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navegacion from '../../componentes/BarraNavegacion';

export const Private = ({logout, User}) => {
    return (
        <div className="wrap">
                <Router >
                    <p>Bienvenido {User}</p>
                <h1>Galeria De Animales</h1>
                <section className="container">
                    <Switch> 
                         <Route path={'/'} component={()=><Tienda logout={()=>logout()}/>}  /> 
                    </Switch>


                </section>
            </Router>
        </div>
    )
}



