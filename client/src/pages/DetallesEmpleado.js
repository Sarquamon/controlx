import React from "react";

import "../styles/estilos.css";

export const DetallesEmpleado = () => {
  return (
    <div>
      <body>
        <div id="titulo">
          <h1>CONTROL X</h1>
          <h2>Empleado</h2>
        </div>
        <div className="wave" style={{ height: "150px", overflow: "hidden" }}>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M-2.00,30.06 C150.19,148.99 373.73,-20.56 500.68,49.65 L500.68,148.99 L0.00,148.99 Z"
              style={{ stroke: "none", fill: "#fff" }}
            ></path>
          </svg>
        </div>
        <br />
        <div id="container">
          Ingresa ID del ID_Empleado:
          <input type="text" name="CajaIDEmpleado" />
          <br />
          <input type="submit" value="Enter" />
          <br />
          <br />
          Datos Encontrados:
          <br />
          <br />
          <form>
            Nombre:
            <input type="text" name="CajaNom" />
            <br />
            <br />
            Apellido/s:
            <input type="text" name="CajaApe" />
            <br />
            <br />
            Telefono:
            <input type="text" name="CajaTel" />
            <br />
            <br />
            Direccion:
            <input type="text" name="CajaDir" />
            <br />
            <br />
            CURP:
            <input type="text" name="CajaCURP" />
            <br />
            <br />
            RFC:
            <input type="text" name="CajaRFC" />
            <br />
            <br />
            <input type="submit" value=" Modificar " />
            <br />
            <br />
          </form>
          <form>
            <input type="submit" value=" Eliminar " />
            <br />
            <br />
          </form>
          <form method="post" action="IEmpleado.html">
            <input type="submit" value=" Ingreso " />
          </form>
        </div>
      </body>
      <section>
        <div id="regresar">
          <form method="post" action="BUsuario.html">
            <input type="submit" value=" Regreso " />
          </form>
        </div>
      </section>
    </div>
  );
};
