import React from 'react'
import Registro from '../../componentes/Registro'
import Navegacion from '../../componentes/BarraNavegacion';
import Inicio from '../../componentes/Inicio'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const Public = () => {
	return (
		<Router>
			<Navegacion />
			<Switch>
				<Route path={'/inicio'} component={() => <Inicio />} ></Route>
				<Route path={'/registro'} component={() => <Registro />} ></Route>
				
			</Switch>
		</Router>

	)
}


