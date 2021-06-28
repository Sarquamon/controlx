const { jsPDF } = require("jspdf"); // will automatically load the node version
const { findOneTratamiento } = require("../functions/tratamientoFuncions");

const generateTicket = async (req, res) => {
  const { tratamientoID } = req.body;
  const precioTotal = 10;
  const doc = new jsPDF();
  try {
    const resultadoTratamiento = findOneTratamiento(tratamientoID);
    doc.text("Control X", 10, 10);
    doc.text(`Hora ${precioTotal}`, 10, 20);
    doc.text(`Fecha total ${precioTotal}`, 10, 30);
    doc.text(`Nombre cliente: total ${precioTotal}`, 10, 40);
    doc.text(`Empleado:  ${precioTotal}`, 10, 50);
    doc.text(`Tratamiento realizado:  ${resultadoTratamiento.precio}`, 10, 60);
    doc.text(`Precio final:  ${precioTotal}`, 10, 70);
    const result = await doc.save("../../a4.pdf", { returnPromise: true }); // will save the file in the current working directory
    if (result) {
      res.status(200).json({ message: "Ticket creado" });
    } else {
      res.status(500).json({ message: "Fallo al crear el PDF" });
    }
  } catch (e) {
    console.log("Error al crear el PDF");
    res.status(500).json({ message: "Fallo al crear el PDF" });
  }
};

module.exports = {
  generateTicket,
};
