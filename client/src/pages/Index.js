import React from "react";

import "../styles/estilos.css";

import { Link } from "react-router-dom";

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
          <Link to="/tickets">
            <div className="imagen-port">
              <img src={ticket} alt="" />
            </div>
          </Link>
        </div>
        <div className="opciones-port">
          <Link to="/citas">
            <div className="imagen-port">
              <img src={cita} alt="" />
            </div>
          </Link>
        </div>
        <div className="opciones-port">
          <Link to="/empleados">
            <div className="imagen-port">
              <img src={usuario} alt="" />
            </div>
          </Link>
        </div>
        <div className="opciones-port">
          <Link to="/productos">
            <div className="imagen-port">
              <img src={productos} alt="" />
            </div>
          </Link>
        </div>
        <div className="opciones-port">
          <Link to="/clientes">
            <div className="imagen-port">
              <img src={clientes} alt="" />
            </div>
          </Link>
        </div>
        <div className="opciones-port">
          <Link to="/empleados">
            <div className="imagen-port">
              <img src={empleado} alt="" />
            </div>
          </Link>
        </div>
        <div className="opciones-port">
          <Link to="/tratamientos">
            <div className="imagen-port">
              <img src={tratamiento} alt="" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};
