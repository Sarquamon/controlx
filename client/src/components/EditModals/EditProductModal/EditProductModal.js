import React from "react";

import Axios from "axios";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

export const EditProductModal = ({ productID, nombre, marca, precio }) => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        marca,
        nombre,
        precio,
        productoID: productID,
      }}
      onSubmit={async (values) => {
        try {
          const result = await Axios.put(
            "http://localhost:9000/updateProducto",
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
                  Editar producto
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
                    <label>Marca actual: {marca}</label>
                  </div>
                  <div className="input-group mb-3">
                    <label>Nombre actual: {nombre}</label>
                  </div>
                  <div className="input-group mb-3">
                    <label>Precio actual: {precio}</label>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      id="NombreViejo"
                      type="text"
                      className="form-control"
                      placeholder="Nueva Marca"
                      aria-label="Marca"
                      name="marca"
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                      value={values["marca"]}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nuevo nombre"
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
                      placeholder="Nuevo precio"
                      aria-label="Precio"
                      name="precio"
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                      value={values["precio"]}
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
