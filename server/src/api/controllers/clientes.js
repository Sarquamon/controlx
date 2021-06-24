const Clientes = require("../../models/Clientes");
const {
  findOneCliente,
  findAllClientes,
} = require("../functions/clienteFunctions");

const registerCliente = async (req, res) => {
  const { nombre, telefono, curp } = req.body;

  try {
    const cliente = await findOneCliente(curp);
    if (cliente) {
      res.status(409).json({
        message: "Un cliente con ese CURP ya existe",
      });
    } else {
      try {
        await Clientes.create({
          FIRST_NAME: nombre,
          PHONE: telefono,
          CURP: curp,
        });
        res.status(202).json({ message: "Cliente creado" });
      } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Fallo al registro del cliente" });
      }
    }
  } catch (e) {
    console.log(e);
    res.status(502).json({ message: "Fallo al registro del cliente" });
  }
};

const getAllClientes = async (req, res) => {
  try {
    const result = await findAllClientes();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "No se encontraron clientes" });
    }
  } catch (e) {
    console.log("Error en encontrar clientes");
    res.status(500).json({ message: "Error en encontrar clientes" });
  }
};

const deleteCliente = async (req, res) => {
  const { clienteID, curp } = req.query;

  try {
    const cliente = await findOneCliente(curp);
    if (!cliente) {
      res.status(409).json({
        message: "El cliente no existe",
      });
    } else {
      try {
        await Clientes.destroy({
          where: {
            ID_CLIENTE: clienteID,
          },
        });
        res.status(202).json({ message: "Cliente borrado" });
      } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Fallo al borrar del cliente" });
      }
    }
  } catch (e) {
    console.log(e);
    res.status(502).json({ message: "Fallo al borrar el cliente" });
  }
};

const updateCliente = async (req, res) => {
  const { nuevoNombreCliente, nuevoTelefonoCliente, clienteID, curp } =
    req.body;

  try {
    const cliente = await findOneCliente(curp);
    if (!cliente) {
      res.status(409).json({
        message: "El cliente no existe",
      });
    } else {
      try {
        await Clientes.update(
          { FIRST_NAME: nuevoNombreCliente, PHONE: nuevoTelefonoCliente },
          {
            where: {
              ID_CLIENTE: clienteID,
            },
          }
        );
        res.status(202).json({ message: "Cliente actualizado" });
      } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Fallo al actualizar del cliente" });
      }
    }
  } catch (e) {
    console.log(e);
    res.status(502).json({ message: "Fallo al actualizar el cliente" });
  }
};

module.exports = {
  registerCliente,
  getAllClientes,
  deleteCliente,
  updateCliente,
};
