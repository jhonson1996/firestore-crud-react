import React from 'react';
import Tienda from '../../componentes/Tienda';
import Perfil from '../../componentes/Perfil';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const Private = ({ logout, User }) => {
    return (
        <Router >
            <Switch>
                <Route path={'/perfil'} component={()=><Perfil/>}></Route>
                <Route path={'/'} component={() => <Tienda logout={logout} User={User} />} />
            </Switch>
        </Router>

    )
}



