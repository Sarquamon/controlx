import React, { useState } from "react";

import Axios from "axios";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

import "../styles/estilos.css";

const clientsArray = [
  {
    id: 1,
    nombre: "Vostro 14",
    marca: "Dell",
    precio: "13000",
  },
];

const DeleteClientModal = ({ clientID }) => {
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
              Eliminar producto
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            ¿Seguro que desea eliminar el producto con el ID {`${clientID}`}?
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
                Axios.delete("http://localhost:9000/deleteProducto", {
                  params: {
                    productoID: clientID,
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

const EditClientModal = ({ productID, nombre, marca, precio }) => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      productID,
      nombre,
      marca,
      precio,
    },

    onSubmit: async (values) => {
      try {
        const result = await Axios.put(
          "http://localhost:9000/updateProducto",
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
            <form onSubmit={formik.handleSubmit}>
              <div className="input-group mb-3">
                <label htmlFor="">Marca actual: {marca}</label>
              </div>
              <div className="input-group mb-3">
                <label htmlFor="">Nombre actual: {nombre}</label>
              </div>
              <div className="input-group mb-3">
                <label htmlFor="">Precio actual: {precio}</label>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nueva marca"
                  aria-label="marca"
                  name="marca"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.marca}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nuevo nombre"
                  aria-label="nombre"
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
                  placeholder="Nuevo precio"
                  aria-label="precio"
                  name="precio"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.precio}
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
      marca: "",
      precio: "",
    },

    onSubmit: async (values) => {
      try {
        const result = await Axios.post(
          "http://localhost:9000/registerProducto",
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
              Registrar producto
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
                  placeholder="Marca"
                  aria-label="Marca"
                  name="marca"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.marca}
                />
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
                  placeholder="Precio"
                  aria-label="Precio"
                  name="precio"
                  aria-describedby="basic-addon1"
                  onChange={formik.handleChange}
                  value={formik.values.precio}
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

export const Productos = () => {
  const [productID, setProductID] = useState(null);
  const [marca, setMarca] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [precio, setPrecio] = useState(null);

  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      <button
        style={{ marginBottom: "1rem" }}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Registrar producto
      </button>
      {clientsArray ? (
        <table className="table table-light">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Marca</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {clientsArray.map((client) => (
              <tr key={client.id}>
                <th scope="row">{client.id}</th>
                <td>{client.marca}</td>
                <td>{client.nombre}</td>
                <td>{client.precio}</td>
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
                        console.log(client);
                        setProductID(client.id);
                        setMarca(client.marca);
                        setNombre(client.nombre);
                        setPrecio(client.precio);
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
                        setProductID(client.id);
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
      <DeleteClientModal clientID={productID} />
      <EditClientModal
        clientID={productID}
        marca={marca}
        nombre={nombre}
        precio={precio}
      />
    </div>
  );
};
