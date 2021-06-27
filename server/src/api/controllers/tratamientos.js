const Tratamientos = require("../../models/Tratamientos");
const {
  findOneTratamiento,
  findAllTratamientos,
} = require("../functions/tratamientoFuncions");

const registerTratamiento = async (req, res) => {
  const { producto, nombre, precio, descripcion } = req.body;

  try {
    await Tratamientos.create({
      PRODUCTO: producto,
      NOMBRE: nombre,
      PRECIO: precio,
      DESCRIPCION: descripcion,
    });
    res.status(202).json({ message: "Tratamiento creado" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Fallo al registro del tratamiento" });
  }
};

const getAllTratamientos = async (req, res) => {
  try {
    const result = await findAllTratamientos();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(200).json({ message: "No se encontraron tratamientos" });
    }
  } catch (e) {
    console.log("Error en encontrar tratamientos");
    res.status(500).json({ message: "Error en encontrar tratamientos" });
  }
};

const deleteTratamiento = async (req, res) => {
  const { tratamientoID } = req.query;

  try {
    await Tratamientos.destroy({
      where: {
        ID_TRATAMIENTO: tratamientoID,
      },
    });
    res.status(202).json({ message: "Tratamiento borrado" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Fallo al borrar del tratamiento" });
  }
};

const updateTratamiento = async (req, res) => {
  const { descripcion, producto, precio, tratamientoID } = req.body;
  console.log(descripcion);
  try {
    const tratamiento = await findOneTratamiento(tratamientoID);
    if (!tratamiento) {
      res.status(409).json({
        message: "El tratamiento no existe",
      });
    } else {
      try {
        await Tratamientos.update(
          { DESCRIPCION: descripcion, PRODUCTO: producto, PRECIO: precio },
          {
            where: {
              ID_TRATAMIENTO: tratamientoID,
            },
          }
        );
        res.status(202).json({ message: "Tratamiento actualizado" });
      } catch (e) {
        console.log(e);
        res
          .status(500)
          .json({ message: "Fallo al actualizar del tratamiento" });
      }
    }
  } catch (e) {
    console.log(e);
    res.status(502).json({ message: "Fallo al actualizar el tratamiento" });
  }
};

module.exports = {
  registerTratamiento,
  getAllTratamientos,
  deleteTratamiento,
  updateTratamiento,
};
