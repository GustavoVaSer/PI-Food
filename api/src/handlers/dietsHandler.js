const { getAllDiets } = require("../controllers/dietsControllers");

const getDietsHandler = async (req, res) => {
  //maneja las solicitudes para obtener todas las dietas desde la base de datos
  try {
    const getDiets = await getAllDiets();
    res.status(200).json(getDiets);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

module.exports = {
  getDietsHandler,
};
