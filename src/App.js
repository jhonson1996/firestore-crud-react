import React, {useEffect,useState} from "react";
import "./App.css";
import auth from './firebase'
import {Private} from './Routes/private/private'
import {Public} from './Routes/public/public'





function App() {
	let User = null;
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [usuario, setUsuario] = useState({usuari:''});
    const [authentication, setAuthState] = useState({
		authenticated: false, //whether the user is allowed to access the protected routes
		initialized: true //if firebase is still being nitalized
	});


	const logout = () => {
		
		console.log('error...');
		auth.signOut().then(() => {
			console.log('saliiendooPo....'+authentication.authenticated);
			setAuthState({
				authenticated: false, //the user is no longer authenticated
				initialized: false
			});
			
			// Sign-out successful.
		}).catch((error) => {
			// An error happened.
		});
		console.log('saliiendooP....'+authentication.authenticated);
	}
	

	useEffect(() => {
	 console.warn(email,password);

	}, [email,password])

	useEffect(() => auth.onAuthStateChanged(user => {
		
		if (user) { //the user has been logged in
			setAuthState({
				authenticated: true, //the user is now authenticated
				initialized: false
			});
			User = user.email;
			console.log(`holiiii ${User}`);
			setUsuario({usuari: User})
		} else { //the user has been logged out
			setAuthState({
				authenticated: false, //the user is no longer authenticated
				initialized: false
			});
		}
		console.log(authentication.authenticated);
	}), [setAuthState]);

	

  return (
<>
    {/* <div className="wrap">
      <h1>Galeria De Animales</h1>
      <div className="container p-4">
        <Tienda/>
      </div>
</div> */}

{authentication.authenticated ? <Private User={usuario.usuari} logout={()=>logout()}/> : <Public User={User} />}
      </>      
    );
}

export default App;
