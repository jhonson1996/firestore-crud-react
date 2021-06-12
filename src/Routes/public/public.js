import React from 'react'
import Registro from '../../componentes/Registro'
import Navegacion from '../../componentes/BarraNavegacion';
import Inicio from '../../componentes/Inicio'
import Tienda from '../../componentes/Tienda'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const Public = ({ setEmail, setPassword, password, email}) => {
	return (
		<div>
			<Router>
				<div>
					<Navegacion />
					<Switch>
						<Route path={'/inicio'} component={() => <Inicio setEmail={()=>setEmail()} setPassword={()=>setPassword()} email={email}  password={password} />} ></Route>
						<Route path={'/registro'} component={() => <Registro setEmail={()=>setEmail()} setPassword={()=>setPassword()} email={email} password={password} />} ></Route>
						{/* <Route patch={'/erro'}component={Error} /> */} 
						<Route path={'/'} component={Tienda} /> 
					</Switch>


				</div>
			</Router>
		</div>
	)
}


