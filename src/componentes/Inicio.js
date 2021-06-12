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
		<div>
			<h1>INICIO DE SECCION</h1>
			<form onSubmit={(e) => submitInicio(e)} className="form-group px-5">
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
						type="text"
						className="form-control"
						value={password}
						onChange={onHandlePassword}
					/>

				</div>
				<div className="modal-footer">
					<input type="submit" className="btn btn-primary" value='Iniciar Sesion' />
				</div>
			</form>
		</div>
	)
}

export default Inicio
