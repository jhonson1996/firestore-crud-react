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
        <h1 id="i">REGISTRATE</h1>
		<div className="form">
			<form onSubmit={(e) => submitRegistro(e)} className="form-group px-5">
				<div className="form-group px-5 ">
					<label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>

					<input
						type="email"
						className="form-control"
						value={email}
						onChange={onHandleEmail}
					/>

					<small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
				</div>
				<div className="form-group px-5">
					<label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>

					<input
						type="password"
						className="form-control"
						value={password}
						onChange={onHandlePassword}
					/>

				</div>
				<div className="boton">
					<button type="submit" className="btn btn-primary " value='Iniciar Sesion'>Registrame</button> 
				</div>
			</form>
		</div>
		</>
	)
}

export default Login;