import React, { useState, useEffect } from "react";

import Axios from "axios";

import { RegisterCitaModal } from "../components/RegisterModals/RegisterCitaModal/RegisterCitaModal";
import { EditCitaModal } from "../components/EditModals/EditCitaModal/EditCitaModal";
import { DeleteCitaModal } from "../components/DeleteModals/DeleteCitaModal/DeleteCitaModal";

import "../styles/estilos.css";

export const Citas = () => {
  const [clientsArray, setClientsArray] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllCitas = async () => {
      const result = await Axios.get("http://localhost:9000/getAllDates");
      if (result.data.length > 0) {
        setClientsArray(result.data);
      }
      setIsLoading(false);
    };

    getAllCitas();
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
            Registrar cita
          </button>
          {clientsArray ? (
            <table className="table table-light">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre (s)</th>
                  <th scope="col">Telefono</th>
                  <th scope="col">servicio</th>
                  <th scope="col">precio</th>
                  <th scope="col">fechadeCita</th>
                  <th scope="col">horadeCita</th>
                  <th scope="col">Opciones</th>
                </tr>
              </thead>
              <tbody>
                {clientsArray.map((client) => (
                  <tr key={client.ID_CITA}>
                    <th scope="row">{client.ID_CITA}</th>
                    <td>{client.NOMBRE}</td>
                    <td>{client.TELEFONO}</td>
                    <td>{client.SERVICIO}</td>
                    <td>{client.PRECIO}</td>
                    <td>{client.FECHACITA}</td>
                    <td>{client.HORACITA}</td>
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
                      <DeleteCitaModal citaID={client.ID_CITA} />
                      <EditCitaModal
                        citaID={client.ID_CITA}
                        nombre={client.NOMBRE}
                        precio={client.PRECIO}
                        telefono={client.TELEFONO}
                        servicio={client.SERVICIO}
                        horadeCita={client.HORACITA}
                        fechadeCita={client.FECHACITA}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h1>No hay citas registrados</h1>
          )}
          <RegisterCitaModal />
        </>
      )}
    </div>
  );
};
