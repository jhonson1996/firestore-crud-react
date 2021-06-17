import React, { useState } from 'react'
import auth from '../firebase'

const Inicio = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const submitInicio = (e) => {
		e.preventDefault()


		console.log(e);
		console.log(email, password);

		auth.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed in
				console.log('entrooooo');
				var user = userCredential.user;


				// ...
				setEmail('')
				setPassword('')
			})
			.catch((error) => {
				console.log('no entro');
				var errorCode = error.code;
				var errorMessage = error.message;
				// ..
			});


	}

	const onHandleEmail = (e) => {
		setEmail(e.target.value)
		console.log(email);

	}

	const onHandlePassword = (e) => {
		setPassword(e.target.value)
		console.log(password);
	}

	return (
		<>
        <h1 id="i">INICIO DE SECCION</h1>
		<div className="row mt-5">
			<div className="col"></div>
			<div className="col card d-flex justify-content-center">
				<form onSubmit={(e) => submitInicio(e)} className="form-group card-body ">
				<input 
				className="form-control "
				type="text"
				value={email}
				onChange={onHandleEmail}
			    placeholder="Introduce el E-mail" />
				<input 
				onChange={onHandlePassword}
				value={password}
				className="form-control mt-4"
				type="password"
			    placeholder="Introduce el Password" />

				<input value="Iniciar Sesion"
				className="btn btn-primary btn-block mt-4"
				type="submit"/> 

				</form>
			</div>
			<div className="col"></div>
		</div>
		</>
	)
}

export default Inicio
