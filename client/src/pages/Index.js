import React from "react";

import "../styles/estilos.css";

import ticket from "../assets/img/TICKET.jpg";
import usuario from "../assets/img/USUARIO.jpg";
import cita from "../assets/img/CITA.jpg";
import tratamiento from "../assets/img/TRATAMIENTO.jpg";
import productos from "../assets/img/PRODUCTOS.jpg";
import empleado from "../assets/img/EMPLEADO.jpg";
import clientes from "../assets/img/CLIENTES.jpg";

export const Index = () => {
  return (
    <main>
      <div id="titulo">
        <h1 style={{ color: "black" }}>CONTROL X</h1>
        <h2 style={{ color: "black" }}>El cambio al pasaje tecnologico</h2>
      </div>
      <section className="contenedor">
        <div className="opciones-port">
          <a href="Ticket.html">
            <div className="imagen-port">
              <img src={ticket} alt="" />
            </div>
          </a>
        </div>
        <div className="opciones-port">
          <a href="BCita.html">
            <div className="imagen-port">
              <img src={cita} alt="" />
            </div>
          </a>
        </div>
        <div className="opciones-port">
          <a href="BUsuario.html">
            <div className="imagen-port">
              <img src={usuario} alt="" />
            </div>
          </a>
        </div>
        <div className="opciones-port">
          <a href="Productos.html">
            <div className="imagen-port">
              <img src={productos} alt="" />
            </div>
          </a>
        </div>
        <div className="opciones-port">
          <a href="BClientes.html">
            <div className="imagen-port">
              <img src={clientes} alt="" />
            </div>
          </a>
        </div>
        <div className="opciones-port">
          <a href="BEmpleado.html">
            <div className="imagen-port">
              <img src={empleado} alt="" />
            </div>
          </a>
        </div>
        <div className="opciones-port">
          <a href="BTratamiento.html">
            <div className="imagen-port">
              <img src={tratamiento} alt="" />
            </div>
          </a>
        </div>
      </section>
    </main>
  );
};
