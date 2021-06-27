import React from "react";

import Axios from "axios";
import { useHistory } from "react-router-dom";

export const DeleteClientModal = ({ clientID, curp }) => {
  const history = useHistory("/");
  return (
    <div
      className="modal fade"
      id="deleteModal"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Eliminar cliente
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            ¿Seguro que desea eliminar al empleado con el ID {`${clientID}`}?
          </div>

          <div className="modal-footer">
            <button
              id="closeDeleteModal"
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={async () => {
                try {
                  const result = await Axios.delete(
                    "http://localhost:9000/deleteCliente",
                    {
                      params: {
                        clienteID: clientID,
                        curp,
                      },
                    }
                  );
                  if (result.status === 202) {
                    document.getElementById("closeDeleteModal").click();
                    history.push("/");
                  } else {
                    console.log(result);
                  }
                } catch (e) {
                  console.log(e);
                }
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
