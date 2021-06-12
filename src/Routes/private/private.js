import React from 'react'
import Tienda from '../../componentes/Tienda'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navegacion from '../../componentes/BarraNavegacion';

export const Private = ({logout}) => {
    return (
        <div>
                <Router>
                <div>
                    <Navegacion />
                    <Switch> 
                         <Route path={'/'} component={()=><Tienda logout={()=>logout()}/>}  /> 
                    </Switch>


                </div>
            </Router>
        </div>
    )
}



