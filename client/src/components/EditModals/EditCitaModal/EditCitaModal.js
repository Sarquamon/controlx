import React from "react";

import Axios from "axios";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

export const EditCitaModal = ({
  citaID,
  nombre,
  precio,
  telefono,
  servicio,
  horadeCita,
  fechadeCita,
}) => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        citaID,
        nombre: "",
        precio: "",
        telefono: "",
        servicio: "",
        horadeCita: "",
        fechadeCita: "",
      }}
      onSubmit={async (values) => {
        try {
          const result = await Axios.put(
            "http://localhost:9000/updateDate",
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
          className="modal fade"
          id="editModal"
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
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <label>Nombre actual: {nombre}</label>
                  </div>
                  <div className="input-group mb-3">
                    <label>Telefono actual: {telefono}</label>
                  </div>
                  <div className="input-group mb-3">
                    <label>Servicio actual: {servicio}</label>
                  </div>
                  <div className="input-group mb-3">
                    <label>Precio actual: {precio}</label>
                  </div>
                  <div className="input-group mb-3">
                    <label>Fecha de cita actual: {fechadeCita}</label>
                  </div>
                  <div className="input-group mb-3">
                    <label>Hora de cita actual: {horadeCita}</label>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      id="NombreViejo"
                      type="text"
                      className="form-control"
                      placeholder="Nuevo nombre"
                      aria-label="Nuevo nombre"
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
                      placeholder="Nueva telefono"
                      aria-label="Nueva telefono"
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
                      placeholder="Nuevo servicio"
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
                      placeholder="Nuevo precio"
                      aria-label="Nuevo precio"
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
                      placeholder="Nuevo fecha de cita"
                      aria-label="Nuevo fecha de cita"
                      name="fechadeCita"
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                      value={values["fechadeCita"]}
                    />
                  </div>

                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nuevo hora de cita"
                      aria-label="Nuevo hora de cita"
                      name="horadeCita"
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                      value={values["horadeCita"]}
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
