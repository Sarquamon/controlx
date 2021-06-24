const Empleados = require("../../models/Empleados");
const {
  findOneEmpleado,
  findAllEmpleados,
} = require("../functions/empleadoFunctions");

const registerEmpleado = async (req, res) => {
  const { nombre, apellido, telefono, direccion, curp, rfc } = req.body;

  try {
    const empleado = await findOneEmpleado(curp);
    if (empleado) {
      res.status(409).json({
        message: "Un empleado con ese CURP ya existe",
      });
    } else {
      try {
        await Empleados.create({
          CURP: curp,
          PHONE: telefono,
          FIRST_NAME: nombre,
          LAST_NAME: apellido,
          RFC: rfc,
          ADDRESS: direccion,
        });
        res.status(202).json({ message: "Empleado creado" });
      } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Fallo al registro del empleado" });
      }
    }
  } catch (e) {
    console.log(e);
    res.status(502).json({ message: "Fallo al registro del empleado" });
  }
};

const getEmpleado = async (req, res) => {
  const { curp } = req.body;

  try {
    const empleado = await findOneEmpleado(curp);
    if (empleado && empleado.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "No se encontro el empleado" });
    }
  } catch (e) {
    console.log("Error en encontrar al empleado");
    res.status(500).json({ message: "Error en encontrar al empleado" });
  }
};

const getAllEmpleados = async (req, res) => {
  try {
    const result = await findAllEmpleados();
    if (result) {
      res.status(200).json(result);
    } else {
      res.json({ message: "No se encontraron empleados" });
    }
  } catch (e) {
    console.log("Error en encontrar empleados");
    res.status(500).json({ message: "Error en encontrar empleados" });
  }
};

const deleteEmpleado = async (req, res) => {
  const { empleadoID, curp } = req.query;

  try {
    const empleado = await findOneEmpleado(curp);
    if (!empleado) {
      res.status(409).json({
        message: "El empleado no existe",
      });
    } else {
      try {
        await Empleados.destroy({
          where: {
            ID_EMPLEADO: empleadoID,
          },
        });
        res.status(202).json({ message: "Empleado borrado" });
      } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Fallo al borrar del empleado" });
      }
    }
  } catch (e) {
    console.log(e);
    res.status(502).json({ message: "Fallo al borrar el empleado" });
  }
};

const updateEmpleado = async (req, res) => {
  const { nuevoDireccionEmpleado, nuevoTelefonoEmpleado, empleadoID, curp } =
    req.body;

  console.log(req.body);

  try {
    const empleado = await findOneEmpleado(curp);
    if (!empleado) {
      res.status(409).json({
        message: "El empleado no existe",
      });
    } else {
      try {
        await Empleados.update(
          { ADDRESS: nuevoDireccionEmpleado, PHONE: nuevoTelefonoEmpleado },
          {
            where: {
              ID_EMPLEADO: empleadoID,
            },
          }
        );
        res.status(202).json({ message: "Empleado actualizado" });
      } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Fallo al actualizar del empleado" });
      }
    }
  } catch (e) {
    console.log(e);
    res.status(502).json({ message: "Fallo al actualizar el empleado" });
  }
};

module.exports = {
  registerEmpleado,
  getAllEmpleados,
  deleteEmpleado,
  updateEmpleado,
  getEmpleado,
};
