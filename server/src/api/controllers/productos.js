const Productos = require("../../models/Productos");
const {
  findOneProducto,
  findAllProductos,
} = require("../functions/productoFunctions");

const registerProducto = async (req, res) => {
  const { marca, nombre, precio } = req.body;

  try {
    await Productos.create({
      MARCA: marca,
      NOMBRE: nombre,
      PRECIO: precio,
    });
    res.status(202).json({ message: "Producto creado" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Fallo al registro del producto" });
  }
};

const getAllProductos = async (req, res) => {
  try {
    const result = await findAllProductos();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "No se encontraron productos" });
    }
  } catch (e) {
    console.log("Error en encontrar productos");
    res.status(500).json({ message: "Error en encontrar productos" });
  }
};

const deleteProducto = async (req, res) => {
  const { productoID } = req.query;

  try {
    const producto = await findOneProducto(productoID);
    if (!producto) {
      res.status(409).json({
        message: "El producto no existe",
      });
    } else {
      try {
        await Productos.destroy({
          where: {
            ID_PRODUCTO: productoID,
          },
        });
        res.status(202).json({ message: "Producto borrado" });
      } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Fallo al borrar del producto" });
      }
    }
  } catch (e) {
    console.log(e);
    res.status(502).json({ message: "Fallo al borrar el producto" });
  }
};

const updateProducto = async (req, res) => {
  const { nombre, marca, precio, productoID } = req.body;

  try {
    const producto = await findOneProducto(curp);
    if (!producto) {
      res.status(409).json({
        message: "El producto no existe",
      });
    } else {
      try {
        await Productos.update(
          { NOMBRE: nombre, MARCA: marca, PRECIO: precio },
          {
            where: {
              ID_PRODUCTO: productoID,
            },
          }
        );
        res.status(202).json({ message: "Producto actualizado" });
      } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Fallo al actualizar del producto" });
      }
    }
  } catch (e) {
    console.log(e);
    res.status(502).json({ message: "Fallo al actualizar el producto" });
  }
};

module.exports = {
  registerProducto,
  getAllProductos,
  deleteProducto,
  updateProducto,
};
