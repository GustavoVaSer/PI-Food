const { Router } = require("express");
require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
