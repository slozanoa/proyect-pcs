import React, { Fragment, useState } from "react";

const Register = () => {
  return (
    <Fragment>
      
      <div className="card margincard">
      <h2 className="title">Registrate</h2>
        <div className="card-body">
          <form className="form">
          <div className="form-group">
              <label for="exampleInputEmail1">Nombre</label>
              <input
                type="text"
                className="form-control"
               
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Register