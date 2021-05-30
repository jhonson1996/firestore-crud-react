import React, { useState } from "react";

const LinkForm = (props) => {
  const ValoresIniciales = {
    url: "",
    name: "",
    descripcion: "",
  };

  const [values, setValues] = useState( ValoresIniciales );

  const ManejarCambioInput = (e) => {
    const {name,value} = e.target;
    setValues({...values,[name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(values);
    setValues({...ValoresIniciales})
  };

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">insert_link</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="https://someurl.com"
          name="url"
          onChange={ManejarCambioInput}
          value={values.url}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Website Name"
          onChange={ManejarCambioInput}
          value={values.name}
        />
      </div>

      <div className="form-group">
        <textarea
          name="descripcion"
          rows="3"
          className="form-control"
          placeholder="Escribe Una Descripcion"
          onChange={ManejarCambioInput}
          value={values.descripcion}
        ></textarea>
      </div>

      <button className="btn btn-primary btn-warning">Save</button>
    </form>
  );
};

export default LinkForm;
