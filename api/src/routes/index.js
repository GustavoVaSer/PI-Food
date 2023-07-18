const { Router } = require("express");
require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const recipesRouter = require("./recipesRouter");
const dietsRouter = require("./dietsRouter");

const router = Router();

// configura los enrutadores para las rutas relacionadas con las recetas y las dietas

//REDIRECTING DATA
router.use("/recipes", recipesRouter);
router.use("/diets", dietsRouter);

module.exports = router;
