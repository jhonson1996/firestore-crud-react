import React, { useState, useEffect } from 'react';
import 'firebase/auth';
import Barra from './BarraNavegacion'
import auth from "../firebase"
/* import { useFirebaseApp } from 'reactfire'
 */
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [form, setForm] = useState('Modal')


    const submit = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
            
        setEmail('');
        setPassword('')
    }

    const Email = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const Password = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    return (

        <div>

            {/* Modal */}
            <div className="modal fade" id='Modal' tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 cclassName="modal-title" id="exampleModalLabel">REGISTRO</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="form-registro">
                                <label htmlFor="resgistro-email">Digite el E-mail</label>
                                <div className="">
                                    <input type="text" onChange={Email} id="resgistro-email" className="form-control" placeholder="E-mail" />
                                </div>
                                <div className="">
                                    <label htmlFor="resgistro-password">Digite el Password</label>
                                    <input type="password" onChange={Password} id="resgistro-password" className="form-control" placeholder="Password" />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={submit} className="btn btn-primary">Registrarme</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login;