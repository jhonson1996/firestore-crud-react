import React from 'react'

const Inicio = () => {
    return (
        
            
            <div className="modal fade" id='Modal1' tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 cclassName="modal-title" id="exampleModalLabel">INICIAR SECCION</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <form id="form-registro">
                                <label htmlFor="resgistro-email">Digite el E-mail</label>
                                <div className="">
                                <input type="text" id="resgistro-email" className="form-control" placeholder="E-mail" />
                                </div>
                                <div className="">
                                <label htmlFor="resgistro-password">Digite el Password</label>
                                <input type="password" id="resgistro-password" className="form-control" placeholder="Password" />
                                </div>

                            </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Iniciar</button>
                            </div>
                        </div>
                    </div>
                </div>
        
    )
}

export default Inicio
