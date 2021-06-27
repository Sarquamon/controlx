import React from "react";

import Axios from "axios";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

export const RegisterCitaModal = () => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        nombre: "",
        telefono: "",
        servicio: "",
        precio: "",
        fechacita: "",
        horacita: "",
      }}
      onSubmit={async (values) => {
        try {
          const result = await Axios.post(
            `http://localhost:9000/registerDate`,
            values
          );
          if (result.status === 202) {
            document.getElementById("closeRegisterModal").click();
            history.push("/");
          }
        } catch (e) {
          console.log(e);
        }
      }}
    >
      {({ handleSubmit, values, handleChange }) => (
        <div
          className="modal fade"
          id="registerModal"
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
                  id="closeRegisterModal"
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
                      placeholder="Nombre cliente"
                      aria-label="Nombre"
                      name="nombre"
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                      value={values["nombre"]}
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
                      value={values["telefono"]}
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
                      onChange={handleChange}
                      value={values["servicio"]}
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
                      onChange={handleChange}
                      value={values["precio"]}
                    />
                  </div>

                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Fecha de cita"
                      aria-label="Fecha de cita"
                      name="fechacita"
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                      value={values["fechacita"]}
                    />
                  </div>

                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Hora de cita"
                      aria-label="Hora de cita"
                      name="horacita"
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                      value={values["horacita"]}
                    />
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <button
                  id="closeRegisterModal"
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
