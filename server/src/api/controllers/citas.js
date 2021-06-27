const Citas = require("../../models/Citas");
const { findOneCitas, findAllCitas } = require("../functions/citasFunctions");

const registerCita = async (req, res) => {
  const { nombre, telefono, servicio, precio, fechacita, horacita } = req.body;

  try {
    await Citas.create({
      NOMBRE: nombre,
      TELEFONO: telefono,
      SERVICIO: servicio,
      PRECIO: precio,
      FECHACITA: fechacita,
      HORACITA: horacita,
    });
    res.status(202).json({ message: "Cita creado" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Fallo al registro del cita" });
  }
};

const getAllCitas = async (req, res) => {
  try {
    const result = await findAllCitas();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(200).json({ message: "No se encontraron citas" });
    }
  } catch (e) {
    console.log("Error en encontrar citas");
    res.status(500).json({ message: "Error en encontrar citas" });
  }
};

const deleteCita = async (req, res) => {
  const { citaID } = req.query;

  try {
    await Citas.destroy({
      where: {
        ID_CITA: citaID,
      },
    });
    res.status(202).json({ message: "Cita borrado" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Fallo al borrar del cita" });
  }
};

const updateCita = async (req, res) => {
  const {
    citaID,
    nombre,
    precio,
    telefono,
    servicio,
    horadeCita,
    fechadeCita,
  } = req.body;

  try {
    const cita = await findOneCitas(citaID);
    if (!cita) {
      res.status(409).json({
        message: "El cita no existe",
      });
    } else {
      try {
        await Citas.update(
          {
            NOMBRE: nombre,
            TELEFONO: telefono,
            SERVICIO: servicio,
            PRECIO: precio,
            FECHACITA: fechadeCita,
            HORACITA: horadeCita,
          },
          {
            where: {
              ID_CITA: citaID,
            },
          }
        );
        res.status(202).json({ message: "Cita actualizado" });
      } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Fallo al actualizar del cita" });
      }
    }
  } catch (e) {
    console.log(e);
    res.status(502).json({ message: "Fallo al actualizar el cita" });
  }
};

module.exports = { registerCita, getAllCitas, deleteCita, updateCita };
