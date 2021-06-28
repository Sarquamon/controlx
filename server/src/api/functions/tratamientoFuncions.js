const { Op } = require("sequelize");
const Tratamientos = require("../../models/Tratamientos");

const findOneTratamiento = (tratamientoID) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Tratamientos.findOne({
        where: {
          [Op.or]: [{ ID_TRATAMIENTO: tratamientoID }],
        },
      });
      return resolve(result);
    } catch (e) {
      console.log("\nError retrieving information: \n", e);
      return reject("\nError retrieving information: \n", e);
    }
  });
};

const findAllTratamientos = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Tratamientos.findAll();
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
  findOneTratamiento,
  findAllTratamientos,
};
