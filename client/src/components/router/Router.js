import React from "react";
import { Switch, Route } from "react-router-dom";

import { Navbar } from "../navbar/Navbar";

import { Index } from "../../pages/Index";
import { Login } from "../../pages/Login";
import { Productos } from "../../pages/Productos";
import { Servicios } from "../../pages/Servicios";
import { Contactos } from "../../pages/Contactos";
import { Citas } from "../../pages/Citas";
import { Empleados } from "../../pages/Empleados";
import { DetallesEmpleado } from "../../pages/DetallesEmpleado";
import { Clientes } from "../../pages/Clientes";
import { Tratamientos } from "../../pages/Tratamientos";
import { Tickets } from "../../pages/Tickets";

export const Router = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/citas" component={Citas} />
        <Route exact path="/clientes" component={Clientes} />
        <Route exact path="/tratamientos" component={Tratamientos} />
        <Route exact path="/empleados" component={Empleados} />
        <Route exact path="/detallesEmpleado" component={DetallesEmpleado} />
        <Route exact path="/contactanos" component={Contactos} />
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/servicios" component={Servicios} />
        <Route exact path="/tickets" component={Tickets} />
      </Switch>
    </>
  );
};
