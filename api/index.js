const server = require("./src/app.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
const { getAllDiets } = require("./src/controllers/dietsControllers.js");

// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  //no se forza la creacion de tablas si ya existen
  await getAllDiets(); //obtiene y almacena todas las dietas
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
