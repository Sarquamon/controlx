const { Op } = require("sequelize");
const Citas = require("../../models/Citas");

const findOneCitas = (citaID = null) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Citas.findOne({
        attributes: ["ID_CITA"],
        where: {
          [Op.or]: [{ ID_CITA: citaID }],
        },
      });
      return resolve(result);
    } catch (e) {
      console.log("\nError retrieving information: \n", e);
      return reject("\nError retrieving information: \n", e);
    }
  });
};

const findAllCitas = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Citas.findAll();
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
  findOneCitas,
  findAllCitas,
};
