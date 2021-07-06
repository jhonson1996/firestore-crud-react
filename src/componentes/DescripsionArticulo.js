import React from 'react'

export default function DescripsionArticulo({ productos, id, titulo, descripcion }) {

  

    return (
        <div className="modal fade" id={id} aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">{titulo}</h5>
                        
                    </div>
                    <div className="modal-body">
                        <p>{descripcion}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
