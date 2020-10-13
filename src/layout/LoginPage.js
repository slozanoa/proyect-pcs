import React, { Fragment, useState } from "react";
import axios from "axios";
import clienteAxios from "../config/axios";
import { useHistory,Link } from "react-router-dom";

const LoginPage = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    email:'',
    password:''
  })
  const [error, actualizarError] = useState(false);
  const {email, password} = user
  const actualizarState = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const submitLogin = async (e) => {
    e.preventDefault();
    console.log(clienteAxios);
    // Validar
    if ( email.trim() === "" || password.trim() === "") {
      actualizarError(true);
      return;
    }
    actualizarError(false);
    let json = JSON.stringify(user);
    let params = "json=" + json;
    axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    clienteAxios.post("/user/login", params)
      .then(function (response) {
        console.log(response);
        history.push('/productos')
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Fragment>
      
      <div className="card margincard">
        <h2 className="title">Inicia sesión</h2>
        <div className="card-body">
          <form className="form" onSubmit={submitLogin}>
            <div className="form-group">
              <label for="exampleInputEmail1">Email </label>
              <input
                name="email"
                type="email"
                className="form-control"
                onChange={actualizarState}
                value={email}
              />
              
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Contraseña</label>
              <input
                name="password"
                type="password"
                className="form-control"
                onChange={actualizarState}
                value={password}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Iniciar sesión
            </button>
          </form>
          <hr/>
          <Link to="/Register">No tengo cuenta</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;
