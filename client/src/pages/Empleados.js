import React, { useState, useEffect } from "react";

import Axios from "axios";

import { RegisterEmployeeModal } from "../components/RegisterModals/RegisterEmployeeModal/RegisterEmployeeModal";
import { EditEmployeeModal } from "../components/EditModals/EditEmployeeModal/EditEmployeeModal";
import { DeleteEmployeeModal } from "../components/DeleteModals/DeleteEmployeeModal/DeleteEmployeeModal";

import "../styles/estilos.css";

export const Empleados = () => {
  const [clientsArray, setClientsArray] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllEmpleados = async () => {
      const result = await Axios.get("http://localhost:9000/getAllEmpleados");
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
                      <DeleteEmployeeModal
                        id={client.ID_EMPLEADO}
                        curp={client.CURP}
                        empleadoID={client.ID_EMPLEADO}
                      />
                      <EditEmployeeModal
                        curp={client.CURP}
                        empleadoID={client.ID_EMPLEADO}
                        direccionEmpleado={client.ADDRESS}
                        telefonoEmpleado={client.PHONE}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h1>No hay empleados registrados</h1>
          )}
          <RegisterEmployeeModal />
        </>
      )}
    </div>
  );
};
