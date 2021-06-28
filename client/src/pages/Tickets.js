import React from "react";

import Axios from "axios";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

export const Tickets = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      tratamientoID: "",
    },

    onSubmit: async (values) => {
      try {
        const result = await Axios.post(
          "http://localhost:9000/generateTicket",
          values
        );
        if (result.status === 200) {
          alert("El ticket se generó en el servidor");
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
      className="container"
      style={{ marginTop: "4rem", marginBottom: "4rem" }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="tratamientoID" className="form-label">
            Ingrese la referencia del tratamiento:
          </label>
          <input
            type="text"
            id="tratamientoID"
            className="form-control"
            placeholder="Referencia del tratamiento"
            aria-label="tratamientoID"
            name="tratamientoID"
            aria-describedby="basic-addon1"
            onChange={formik.handleChange}
            value={formik.values.tratamientoID}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Generar ticket
        </button>
      </form>
    </div>
  );
};
