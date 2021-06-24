import React, { useState } from "react";

import Axios from "axios";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

import "../styles/estilos.css";

const clientsArray = [
  {
    id: 1,
    nombre: "Salomon",
    telefono: "7828833265",
    servicio: "Pelo",
    precio: "10 peso",
    fechadeCita: "25/06/2021",
    horadeCita: "7pm",
    estilista: "Mariana",
  },
];

const DeleteClientModal = ({ citaID }) => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Eliminar cliente
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            ¿Seguro que desea eliminar la cita con el ID {`${citaID}`}?
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                Axios.delete("http://localhost:9000/deleteDate", {
                  params: {
                    citaID,
                  },
                });
              }}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const EditClientModal = ({
  nombre,
  telefono,
  servicio,
  precio,
  fechadeCita,
  horadeCita,
  estilista,
  citaID,
}) => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      nombre: "",
      telefono: "",
      servicio: "",
      precio: "",
      fechadeCita: "",
      horadeCita: "",
      estilista: "",
      citaID,
    },

    onSubmit: async (values) => {
      try {
        const result = await Axios.put(
          "http://localhost:9000/updateDate",
          values
        );
        if (result.status === 200) {
          history.push("/");
        }
      } catch (e) {
        if (e.response) {
          if (
            e.response.status === 404 &&
            e.response.message === "Receptionists not found"
          ) {
            console.log("No receptionists were found");
          } else {
            console.log("Error on request: ", e);
          }
        } else {
          console.log("Error on request: ", e);
        }
      }
    },
  });

  return (
    <div
      className="modal fade"
      id="staticBackdrop2"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Editar cita
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={formik.handleSubmit}>
              <div className="input-group mb-3">
                <label htmlFor="">Nombre actual: {nombre}</label>
              </div>
              <div className="input-group mb-3">
                <label htmlFor="">Telefono actual: {telefono}</label>
              </div>
              <div className="input-group mb-3">
                <label htmlFor="">Servicio actual: {servicio}</label>
              </div>
              <div className="input-group mb-3">
                <label htmlFor="">Precio actual: {precio}</label>
              </div>
              <div className="input-group mb-3">
                <label htmlFor="">Fecha de Cita actual: {fechadeCita}</label>
              </div>
              <div className="input-group mb-3">
                <label htmlFor="">Hora de Cita actual: {horadeCita}</label>
              </div>
              <div className="input-group mb-3">
                <label htmlFor="">Estilista actual: {estilista}</label>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  aria-label="Nombre"
                  name="nombre"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.nombre}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Telefono"
                  aria-label="Telefono"
                  name="telefono"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.telefono}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Servicio"
                  aria-label="Servicio"
                  name="servicio"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.servicio}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Precio"
                  aria-label="Precio"
                  name="precio"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.precio}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fecha de Cita"
                  aria-label="Fecha de Cita"
                  name="fechadeCita"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.fechadeCita}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Hora de Cita"
                  aria-label="Hora de Cita"
                  name="horadeCita"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.horadeCita}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Estilista"
                  aria-label="Estilista"
                  name="estilista"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.estilista}
                />
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button type="submit" className="btn btn-primary">
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ModalClients = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      nombre: "",
      telefono: "",
      servicio: "",
      precio: "",
      fechacita: "",
      horacita: "",
      estilista: "",
    },

    onSubmit: async (values) => {
      try {
        const result = await Axios.post(
          "http://localhost:9000/registerDate",
          values
        );
        if (result.status === 200) {
          history.push("/");
        }
      } catch (e) {
        if (e.response) {
          if (
            e.response.status === 404 &&
            e.response.message === "Receptionists not found"
          ) {
            console.log("No receptionists were found");
          } else {
            console.log("Error on request: ", e);
          }
        } else {
          console.log("Error on request: ", e);
        }
      }
    },
  });

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Registrar cita
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={formik.handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  aria-label="Nombre"
                  name="nombre"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.nombre}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Telefono"
                  aria-label="Telefono"
                  name="telefono"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.telefono}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Servicio"
                  aria-label="Servicio"
                  name="servicio"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.servicio}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Precio"
                  aria-label="Precio"
                  name="precio"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.precio}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fecha de Cita"
                  aria-label="Fecha de Cita"
                  name="fechacita"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.fechacita}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Hora de Cita"
                  aria-label="Hora de Cita"
                  name="horacita"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.horacita}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Estilista"
                  aria-label="Estilista"
                  name="estilista"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.estilista}
                />
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button type="submit" className="btn btn-primary">
              Registrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Citas = () => {
  const [citaID, setCitaID] = useState(null);
  const [nombreCliente, setNombreCliente] = useState(null);
  const [telefonoCliente, setTelefonoCliente] = useState(null);
  const [servicio, setServicio] = useState(null);
  const [precio, setPrecio] = useState(null);
  const [fechadeCita, setFechadeCita] = useState(null);
  const [horadeCita, setHoradeCita] = useState(null);
  const [estilista, setEstilista] = useState(null);

  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      <button
        style={{ marginBottom: "1rem" }}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Registrar cita
      </button>
      {clientsArray ? (
        <table className="table table-light">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre (s)</th>
              <th scope="col">Telefono</th>
              <th scope="col">servicio</th>
              <th scope="col">precio</th>
              <th scope="col">fechadeCita</th>
              <th scope="col">horadeCita</th>
              <th scope="col">estilista</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {clientsArray.map((client) => (
              <tr key={client.id}>
                <th scope="row">{client.id}</th>
                <td>{client.nombre}</td>
                <td>{client.telefono}</td>
                <td>{client.servicio}</td>
                <td>{client.precio}</td>
                <td>{client.fechadeCita}</td>
                <td>{client.horadeCita}</td>
                <td>{client.estilista}</td>
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop2"
                      onClick={() => {
                        setCitaID(client.id);
                        setNombreCliente(client.nombre);
                        setTelefonoCliente(client.telefono);
                        setServicio(client.servicio);
                        setPrecio(client.precio);
                        setFechadeCita(client.fechadeCita);
                        setHoradeCita(client.horadeCita);
                        setEstilista(client.estilista);
                      }}
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop1"
                      onClick={() => {
                        setCitaID(client.id);
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>No hay clientes registrados</h1>
      )}
      <ModalClients />
      <DeleteClientModal citaID={citaID} />
      <EditClientModal
        citaID={citaID}
        nombre={nombreCliente}
        telefono={telefonoCliente}
        servicio={servicio}
        precio={precio}
        fechadeCita={fechadeCita}
        horadeCita={horadeCita}
        estilista={estilista}
      />
    </div>
  );
};
