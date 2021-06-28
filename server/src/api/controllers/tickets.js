const { jsPDF } = require("jspdf"); // will automatically load the node version
const { findOneTratamiento } = require("../functions/tratamientoFuncions");

const generateTicket = async (req, res) => {
  const { tratamientoID } = req.body;
  const doc = new jsPDF();
  try {
    const resultadoTratamiento = await findOneTratamiento(tratamientoID);
    doc.text("Control X", 10, 10);
    doc.text(`Tratamiento realizado:  ${resultadoTratamiento.NOMBRE}`, 10, 20);
    doc.text(`Producto: ${resultadoTratamiento.PRODUCTO}`, 10, 30);
    doc.text(`Descripcion:  ${resultadoTratamiento.DESCRIPCION}`, 10, 40);
    doc.text(`Precio final:  ${resultadoTratamiento.PRECIO}`, 10, 50);
    doc
      .save("a4.pdf", { returnPromise: true })
      .then(res.status(200).json({ message: "Ticket creado" }))
      .catch((e) => {
        console.log("Error", e);
        res.status(500).json({ message: "Fallo al crear el PDF" });
      });
  } catch (e) {
    console.log("Error al crear el PDF");
    res.status(500).json({ message: "Fallo al crear el PDF" });
  }
};

module.exports = {
  generateTicket,
};
