import React, { useState } from 'react';
import auth from '../firebase'
const Login = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const submitRegistro = (e) => {
		e.preventDefault()

		auth.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				console.log('holiii');
				// Signed in
				var user = userCredential.user;
				// ...
				setEmail('')
				setPassword('')
			})
			.catch((error) => {
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
        <h1 id="i" className="h">REGISTRATE</h1>
		<div className="row mt-5 xd">
			<div className="col"></div>
			<div className="col card text-white bg-primary mb-3">
				<form onSubmit={(e) => submitRegistro(e)} className="form-group  form">
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

				<input value="Registrar Usuario"
				className="btn btn-dark btn-block mt-4"
				type="submit"/> 

				</form>
			</div>
			<div className="col"></div>
		</div>
		</>
	)
}

export default Login;