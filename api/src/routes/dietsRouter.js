const { Router } = require("express");
const { getDietsHandler } = require("../handlers/dietsHandler");
const dietsRouter = Router();

// define la ruta relacionada con las dietas y el handler correspondiente
dietsRouter.get("/", getDietsHandler);

module.exports = dietsRouter;
