const express = require("express");

const {
  registerCita,
  getAllCitas,
  deleteCita,
  updateCita,
} = require("../controllers/citas");
const {
  registerCliente,
  getAllClientes,
  deleteCliente,
  updateCliente,
} = require("../controllers/clientes");
const {
  registerEmpleado,
  getAllEmpleados,
  getEmpleado,
  deleteEmpleado,
  updateEmpleado,
} = require("../controllers/empleados");
const {
  registerProducto,
  getAllProductos,
  deleteProducto,
  updateProducto,
} = require("../controllers/productos");
const {
  registerTratamiento,
  getAllTratamientos,
  deleteTratamiento,
  updateTratamiento,
} = require("../controllers/tratamientos");

const { generateTicket } = require("../controllers/tickets");

const router = express.Router();

router.post("/login");
router.post("/generateTicket", generateTicket);
router.post("/registerDate", registerCita);
router.post("/registerEmpleado", registerEmpleado);
router.post("/registerCliente", registerCliente);
router.post("/registerProducto", registerProducto);
router.post("/registerTratamiento", registerTratamiento);

router.get("/getAllDates", getAllCitas);
router.get("/getAllEmpleados", getAllEmpleados);
router.get("/getOneEmpleado", getEmpleado);
router.get("/getAllClientes", getAllClientes);
router.get("/getAllProductos", getAllProductos);
router.get("/getAllTratamientos", getAllTratamientos);

router.put("/updateDate", updateCita);
router.put("/updateEmpleado", updateEmpleado);
router.put("/updateCliente", updateCliente);
router.put("/updateProducto", updateProducto);
router.put("/updateTratamiento", updateTratamiento);

router.delete("/deleteDate", deleteCita);
router.delete("/deleteEmpleado", deleteEmpleado);
router.delete("/deleteCliente", deleteCliente);
router.delete("/deleteProducto", deleteProducto);
router.delete("/deleteTratamiento", deleteTratamiento);

module.exports = router;
