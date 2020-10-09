import React, { Fragment, useState } from "react";

const LoginPage = () => {
  return (
    <Fragment>
      
      <div className="card margincard">
        <h2 className="title">Inicia sesión</h2>
        <div className="card-body">
          <form className="form">
            <div className="form-group">
              <label for="exampleInputEmail1">Email </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Acceder
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;
