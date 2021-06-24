import React from "react";

import "../styles/estilos.css";

export const Login = () => {
  return (
    <div className="container">
      <div id="container">
        <h1>CONTROL X</h1>
        <h2>Bienvenido</h2>
      </div>
      <div style={{ marginBottom: "5rem" }}>
        <div id="menu">
          <form>
            <div className="form-group">
              <label for="user">Usuario</label>
              <input
                type="email"
                className="form-control"
                id="user"
                aria-describedby="emailHelp"
                placeholder="Usuario"
                name="user"
              />
            </div>
            <div className="form-group">
              <label for="pwd">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Contraseña"
                name="pwd"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
