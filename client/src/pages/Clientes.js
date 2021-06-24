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
    curp: "PIGS",
  },
];

const DeleteClientModal = ({ clientID, curp }) => {
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
            ¿Seguro que desea eliminar al cliente con el ID {`${clientID}`}?
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
                Axios.delete("http://localhost:9000/deleteCliente", {
                  params: {
                    clientID,
                    curp,
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
  curp,
  nombreCliente,
  telefonoCliente,
  clienteID,
}) => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      nuevoNombreCliente: "",
      nuevoTelefonoCliente: "",
      curp,
      clienteID,
    },

    onSubmit: async (values) => {
      try {
        const result = await Axios.put(
          "http://localhost:9000/updateCliente",
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
              Editar cliente
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
                <label htmlFor="">Nombre actual: {nombreCliente}</label>
              </div>
              <div className="input-group mb-3">
                <label htmlFor="">Telefono actual: {telefonoCliente}</label>
              </div>
              <div className="input-group mb-3">
                <input
                  id="NombreViejo"
                  type="text"
                  className="form-control"
                  placeholder="Nuevo nombre"
                  aria-label="Nombre"
                  name="nuevoNombreCliente"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.nuevoNombreCliente}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nuevo telefono"
                  aria-label="Telefono"
                  name="nuevoTelefonoCliente"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.nuevoTelefonoCliente}
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
      curp: "",
    },

    onSubmit: async (values) => {
      try {
        const result = await Axios.post(
          "http://localhost:9000/registerCliente",
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
              Registrar cliente
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
                  placeholder="CURP"
                  aria-label="Curp"
                  name="curp"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.curp}
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

export const Clientes = () => {
  const [clientID, setClientID] = useState(null);
  const [nombreCliente, setNombreCliente] = useState(null);
  const [telefonoCliente, setTelefonoCliente] = useState(null);
  const [clientCurp, setClientCurp] = useState(null);

  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      <button
        style={{ marginBottom: "1rem" }}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Registrar cliente
      </button>
      {clientsArray ? (
        <table className="table table-light">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre (s)</th>
              <th scope="col">Telefono</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {clientsArray.map((client) => (
              <tr key={client.id}>
                <th scope="row">{client.id}</th>
                <td>{client.nombre}</td>
                <td>{client.telefono}</td>
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
                        setClientID(client.id);
                        setNombreCliente(client.nombre);
                        setTelefonoCliente(client.telefono);
                        setClientCurp(client.curp);
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
                        setClientID(client.id);
                        setClientCurp(client.curp);
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
      <DeleteClientModal curp={clientCurp} clientID={clientID} />
      <EditClientModal
        curp={clientCurp}
        clienteID={clientID}
        nombreCliente={nombreCliente}
        telefonoCliente={telefonoCliente}
      />
    </div>
  );
};
