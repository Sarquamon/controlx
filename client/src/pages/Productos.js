import React, { useState, useEffect } from "react";

import Axios from "axios";

import { RegisterProductsModal } from "../components/RegisterModals/RegisterProductModal/RegisterProductModal";
import { EditProductModal } from "../components/EditModals/EditProductModal/EditProductModal";
import { DeleteProductModal } from "../components/DeleteModals/DeleteProductModal/DeleteProductModal";

import "../styles/estilos.css";

export const Productos = () => {
  const [clientsArray, setClientsArray] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllProductos = async () => {
      const result = await Axios.get("http://localhost:9000/getAllProductos");
      if (result.data.length > 0) {
        setClientsArray(result.data);
      }
      setIsLoading(false);
    };

    getAllProductos();
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
            data-bs-target="#registerModal"
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
                  <tr key={client.ID_PRODUCTO}>
                    <th scope="row">{client.ID_PRODUCTO}</th>
                    <td>{client.MARCA}</td>
                    <td>{client.NOMBRE}</td>
                    <td>{client.PRECIO}</td>
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
                          data-bs-target="#editModal"
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteModal"
                        >
                          Eliminar
                        </button>
                      </div>
                      <DeleteProductModal productID={client.ID_PRODUCTO} />
                      <EditProductModal
                        productID={client.ID_PRODUCTO}
                        marca={client.MARCA}
                        nombre={client.NOMBRE}
                        precio={client.PRECIO}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h1>No hay productos registrados</h1>
          )}
          <RegisterProductsModal />
        </>
      )}
    </div>
  );
};
