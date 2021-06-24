const { Op } = require("sequelize");
const Clientes = require("../../models/Clientes");

const findOneCliente = (curp, clienteID = null) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Clientes.findOne({
        attributes: ["ID_CLIENTE"],
        where: {
          [Op.or]: [{ ID_CLIENTE: clienteID }, { CURP: curp }],
        },
      });
      return resolve(result);
    } catch (e) {
      console.log("\nError retrieving information: \n", e);
      return reject("\nError retrieving information: \n", e);
    }
  });
};

const findAllClientes = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Clientes.findAll();
      if (result.length > 0) {
        resolve(result);
      } else {
        resolve(false);
      }
    } catch (e) {
      console.log("\nError retrieving information findAllClientes: \n", e);
      return reject("\nError retrieving information findAllClientes: \n", e);
    }
  });
};

module.exports = {
  findOneCliente,
  findAllClientes,
};
