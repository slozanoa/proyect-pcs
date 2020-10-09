import React, { Fragment, useState } from "react";
import axios from 'axios'

const Register = () => {
  const [register, setRegister] = useState({
    role_id: 1,
    name: '',
    surname: '',
    email: '',
    password: '',
    description: '',
    
});
const [ error, actualizarError ] = useState(false)
const actualizarState = e => {
  setRegister({
      ...register,
      [e.target.name]: e.target.value 
  })
}
 // Extraer los valores
 const { name, surname, email, password, description } = register

 const submitRegister = async e => {
  e.preventDefault();

  // Validar
  if(name.trim() === '' || email.trim() === ''   || password.trim() === '' ){
      actualizarError(true);
      return;
  }
  const registrar = JSON.stringify(register)
  // Eliminar el mensaje previo 
  actualizarError(false);
  const config = {
    headers: {'content-type': 'application/x-www-form-urlencoded'}
};
const url = "http://api-laravel.com.devel/api/user/register"
axios.post(url, registrar, config)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })

}
  return (
    <Fragment>
      
      <div className="card margincard">
      <h2 className="title">Registrate</h2>
      { error ? <p className="m-3 alert alert-danger">Todos los campos son obligatorios</p>     : null }
        <div className="card-body">
          <form className="form" onSubmit={submitRegister}>
          <div className="form-group">
              <label for="exampleInputEmail1">Nombre</label>
              <input
                name="name"
                type="text"
                className="form-control"
                onChange={actualizarState}
                value={name}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Apellido</label>
              <input
                name="surname"
                type="text"
                className="form-control"
                onChange={actualizarState}
                value={surname}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                onChange={actualizarState}
                value={email}
                
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Descripcción</label>
              <input
                name="description"
                type="text"
                className="form-control"
                onChange={actualizarState}
                value={description}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                onChange={actualizarState}
                value={password}
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