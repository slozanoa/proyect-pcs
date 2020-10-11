import React from 'react'

const BarraLaterl = ()=>{
    return (
        <>
        <div className="d-flex">
        <div id="sidebar-container" className="bg-primary">
          <div className="logo">
            <h4 className="text-light font-weight-bold">SOFTWARE</h4>
          </div>
          <div className="menu">
            <a href="#" className="d-block text-light p-3"><i className="icon ion-md-apps mr-2 lead"></i>Tablero</a>
            <a href="#" className="d-block text-light p-3"><i className="icon ion-md-people mr-2 lead"></i>Usuarios</a>
            <a href="#" className="d-block text-light p-3"><i className="icon ion-md-stats mr-2 lead"></i>Estadísticas</a>
            <a href="#" className="d-block text-light p-3"><i className="icon ion-md-person mr-2 lead"></i>Perfil</a>
            <a href="#" className="d-block text-light p-3"><i className="icon ion-md-settings mr-2 lead"></i>Configuración</a>

          </div>
        </div>
        <div className="w-100">
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
            <form className="form-inline position-relative my-2 d-inline-block">
              <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
              <button className="btn btn-search position-absolute" type="submit">
                <i className="icon ion-md-search"></i>
                </button>
            </form>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-4">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Santiago Lozano Alvarez
                </a>
                <div className="dropdown-menu mr-3" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Mi perfil</a>
                  
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Cerrar cesión</a>
                </div>
              </li>
              
            </ul>
         </div>
         </div>
        </nav>
          </div>
    </div>
    </>
    )
}

export default BarraLaterl