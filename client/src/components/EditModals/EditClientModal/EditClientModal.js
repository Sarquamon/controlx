import React from "react";

import Axios from "axios";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

export const EditClientModal = ({
  curp,
  clienteID,
  nombreCliente,
  telefonoCliente,
}) => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        curp,
        clienteID,
        nuevoNombreCliente: "",
        nuevoTelefonoCliente: "",
      }}
      onSubmit={async (values) => {
        try {
          const result = await Axios.put(
            "http://localhost:9000/updateCliente",
            values
          );
          if (result.status === 202) {
            document.getElementById("closeEditModal").click();
            history.push("/");
          }
        } catch (e) {
          console.log(e);
        }
      }}
    >
      {({ handleSubmit, values, handleChange }) => (
        <div
          className="modal"
          id="editModal"
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
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <label>Nombre actual: {nombreCliente}</label>
                  </div>
                  <div className="input-group mb-3">
                    <label>Telefono actual: {telefonoCliente}</label>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      id="NombreViejo"
                      aria-label="Nombre"
                      onChange={handleChange}
                      className="form-control"
                      name="nuevoNombreCliente"
                      placeholder="Nuevo nombre"
                      aria-describedby="basic-addon1"
                      value={values["nuevoNombreCliente"]}
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
                      onChange={handleChange}
                      value={values["nuevoTelefonoCliente"]}
                    />
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <button
                  id="closeEditModal"
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
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
