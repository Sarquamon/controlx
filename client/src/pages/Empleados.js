import React, { useState, useEffect } from "react";

import Axios from "axios";
import { Formik, useFormik } from "formik";
import { useHistory } from "react-router-dom";

import "../styles/estilos.css";

const DeleteClientModal = ({ empleadoID, curp }) => {
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
              Eliminar empleado
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            ¿Seguro que desea eliminar al empleado con el ID {`${empleadoID}`}?
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
                Axios.delete("http://localhost:9000/deleteEmpleado", {
                  params: {
                    empleadoID,
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
  direccionEmpleado,
  telefonoEmpleado,
  empleadoID,
  curp,
}) => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      nuevoDireccionEmpleado: "",
      nuevoTelefonoEmpleado: "",
      empleadoID,
      curp,
    },

    onSubmit: async (values) => {
      try {
        console.log(values);
        const result = await Axios.put(
          "http://localhost:9000/updateEmpleado",
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
              Editar empleado
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
                <label>Direccion actual: {direccionEmpleado}</label>
              </div>
              <div className="input-group mb-3">
                <label>Telefono actual: {telefonoEmpleado}</label>
              </div>
              <div className="input-group mb-3">
                <input
                  id="NombreViejo"
                  type="text"
                  className="form-control"
                  placeholder="Nueva direccion"
                  aria-label="nuevoDireccionEmpleado"
                  name="nuevoDireccionEmpleado"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.nuevoDireccionEmpleado}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nuevo telefono"
                  aria-label="Telefono"
                  name="nuevoTelefonoEmpleado"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.nuevoTelefonoEmpleado}
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
            <button
              type="submit"
              onClick={formik.handleSubmit}
              className="btn btn-primary"
            >
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

  return (
    <Formik
      initialValues={{
        nombre: "",
        apellido: "",
        telefono: "",
        direccion: "",
        curp: "",
        rfc: "",
      }}
      onSubmit={async (values) => {
        try {
          console.log("Hola");
          const result = await Axios.post(
            "http://localhost:9000/registerEmpleado",
            values
          );
          if (result.status === 202) {
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
      }}
    >
      {({ handleSubmit, values, handleChange }) => (
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
                  Registrar empleado
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre"
                      aria-label="Nombre"
                      name="nombre"
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                      value={values.nombre}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apellido"
                      aria-label="Apellido"
                      name="apellido"
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                      value={values.apellido}
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
                      onChange={handleChange}
                      value={values.telefono}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Direccion"
                      aria-label="Direccion"
                      name="direccion"
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                      value={values.direccion}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="CURP"
                      aria-label="CURP"
                      name="curp"
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                      value={values.curp}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="RFC"
                      aria-label="RFC"
                      name="rfc"
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                      value={values.rfc}
                    />
                  </div>
                </form>
                <pre>{JSON.stringify(values, null, 2)}</pre>
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
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary"
                >
                  Registrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export const Empleados = () => {
  const [clientsArray, setClientsArray] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [empleadoID, setEmpleadoID] = useState(null);
  const [direccionEmpleado, setDireccionEmpleado] = useState(null);
  const [telefonoEmpleado, setTelefonoEmpleado] = useState(null);
  const [empleadoCurp, setEmpleadoCURP] = useState(null);

  useEffect(() => {
    const getAllEmpleados = async () => {
      const result = await Axios.get("http://localhost:9000/getAllEmpleados");
      console.log(result.data);
      if (result.data.length > 0) {
        setClientsArray(result.data);
      }
      setIsLoading(false);
    };

    getAllEmpleados();
  }, []);

  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <button
            style={{ marginBottom: "1rem" }}
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Registrar empleado
          </button>
          {clientsArray ? (
            <table className="table table-light">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre (s)</th>
                  <th scope="col">Telefono</th>
                  <th scope="col">Direccion</th>
                  <th scope="col">CURP</th>
                  <th scope="col">RFC</th>
                  <th scope="col">Opciones</th>
                </tr>
              </thead>
              <tbody>
                {clientsArray.map((client) => (
                  <tr key={client.ID_EMPLEADO}>
                    <th scope="row">{client.ID_EMPLEADO}</th>
                    <td>{client.FIRST_NAME}</td>
                    <td>{client.PHONE}</td>
                    <td>{client.ADDRESS}</td>
                    <td>{client.CURP}</td>
                    <td>{client.RFC}</td>
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
                            setEmpleadoID(client.ID_EMPLEADO);
                            setDireccionEmpleado(client.ADDRESS);
                            setTelefonoEmpleado(client.PHONE);
                            setEmpleadoCURP(client.CURP);
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
                            setEmpleadoID(client.ID_EMPLEADO);
                            setEmpleadoCURP(client.CURP);
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
            <h1>No hay empleados registrados</h1>
          )}
          <ModalClients />
          <DeleteClientModal curp={empleadoCurp} empleadoID={empleadoID} />
          <EditClientModal
            curp={empleadoCurp}
            empleadoID={empleadoID}
            direccionEmpleado={direccionEmpleado}
            telefonoEmpleado={telefonoEmpleado}
          />
        </>
      )}
    </div>
  );
};
