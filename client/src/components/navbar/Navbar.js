import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ token }) => {
  token = true;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Control X
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to="/signin">
                    Iniciar sesion
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/servicios">
                    Servicios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/contactanos">
                    Cont&aacute;ctanos
                  </Link>
                </li>
              </>
            )}
            {token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/clientes">
                    Clientes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/citas">
                    Citas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/empleados">
                    Empleados
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/productos">
                    Productos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tratamientos">
                    Tratamientos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tickets">
                    Tickets
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
