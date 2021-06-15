import React from 'react'
import Registro from '../../componentes/Registro'
import Navegacion from '../../componentes/BarraNavegacion';
import Inicio from '../../componentes/Inicio'
import Tienda from '../../componentes/Tienda'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const Public = ({ User}) => {
	return (
		<div>
			<Router>
				<div>
					<Navegacion user={User}/>
					<Switch>
						<Route path={'/inicio'} component={() => <Inicio  />} ></Route>
						<Route path={'/registro'} component={() => <Registro  />} ></Route>
						{/* <Route patch={'/erro'}component={Error} /> */} 
						<Route path={'/'} component={Inicio} /> 
					</Switch>


				</div>
			</Router>
		</div>
	)
}


