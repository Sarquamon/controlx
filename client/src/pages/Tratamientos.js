import React, { useState, useEffect } from "react";

import Axios from "axios";

import { RegisterTratamientoModal } from "../components/RegisterModals/RegisterTratamientoModal/RegisterTratamientoModal";
import { EditTratamientoModal } from "../components/EditModals/EditTratamientoModal/EditTratamientoModal";
import { DeleteTratamientoModal } from "../components/DeleteModals/DeleteTratamientoModal/DeleteTratamientoModal";

import "../styles/estilos.css";

export const Tratamientos = () => {
  const [clientsArray, setClientsArray] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllTratamientos = async () => {
      const result = await Axios.get(
        "http://localhost:9000/getAllTratamientos"
      );
      if (result.data.length > 0) {
        setClientsArray(result.data);
      }
      setIsLoading(false);
    };

    getAllTratamientos();
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
            Registrar tratamiento
          </button>
          {clientsArray ? (
            <table className="table table-light">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Opciones</th>
                </tr>
              </thead>
              <tbody>
                {clientsArray.map((client) => (
                  <tr key={client.ID_TRATAMIENTO}>
                    <th scope="row">{client.ID_TRATAMIENTO}</th>
                    <td>{client.NOMBRE}</td>
                    <td>{client.DESCRIPCION}</td>
                    <td>{client.PRODUCTO}</td>
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
                      <DeleteTratamientoModal
                        tratamientoID={client.ID_TRATAMIENTO}
                      />
                      <EditTratamientoModal
                        tratamientoID={client.ID_TRATAMIENTO}
                        descripcion={client.DESCRIPCION}
                        producto={client.PRODUCTO}
                        precio={client.PRECIO}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h1>No hay tratamientos registrados</h1>
          )}
          <RegisterTratamientoModal />
        </>
      )}
    </div>
  );
};
