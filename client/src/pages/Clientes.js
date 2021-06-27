import React, { useState, useEffect } from "react";

import Axios from "axios";

import { RegisterClientModal } from "../components/RegisterModals/RegisterClientModal/RegisterClientModal";
import { DeleteClientModal } from "../components/DeleteModals/DeleteClientModal/DeleteClientModal";
import { EditClientModal } from "../components/EditModals/EditClientModal/EditClientModal";

import "../styles/estilos.css";

export const Clientes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [clientsArray, setClientsArray] = useState(null);

  useEffect(() => {
    const getAllEmpleados = async () => {
      const result = await Axios.get("http://localhost:9000/getAllClientes");
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
            data-bs-target="#registerModal"
          >
            Registrar cliente
          </button>
          {clientsArray ? (
            <table className="table table-light">
              {console.log(clientsArray)}
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
                  <tr key={client.ID_CLIENTE}>
                    {console.log(client)}
                    <th scope="row">{client.ID_CLIENTE}</th>
                    <td>{client.FIRST_NAME}</td>
                    <td>{client.PHONE}</td>
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
                      <DeleteClientModal
                        curp={client.CURP}
                        clientID={client.ID_CLIENTE}
                      />
                      <EditClientModal
                        curp={client.CURP}
                        clienteID={client.ID_CLIENTE}
                        nombreCliente={client.FIRST_NAME}
                        telefonoCliente={client.PHONE}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h1>No hay clientes registrados</h1>
          )}
          <RegisterClientModal />
        </>
      )}
    </div>
  );
};
