const { Op } = require("sequelize");
const Productos = require("../../models/Productos");

const findOneProducto = (productoID = null) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Productos.findOne({
        attributes: ["ID_PRODUCTO"],
        where: {
          [Op.or]: [{ ID_PRODUCTO: productoID }],
        },
      });
      return resolve(result);
    } catch (e) {
      console.log("\nError retrieving information: \n", e);
      return reject("\nError retrieving information: \n", e);
    }
  });
};

const findAllProductos = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Productos.findAll();
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
  findOneProducto,
  findAllProductos,
};
