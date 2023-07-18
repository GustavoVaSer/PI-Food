const { Router } = require("express");
const recipesRouter = Router(); //se crea esta instancia en el enritador
const {
  getAllRecipesHandler,
  getRecipesByIdHandler,
  postRecipesHandler,
} = require("../handlers/recipesHandler");

//ALL INFO ROUTER
recipesRouter.get("/", getAllRecipesHandler);

// INFO BY ID ROUTER
recipesRouter.get("/:id", getRecipesByIdHandler);

//POST INFO ROUTER
recipesRouter.post("/", postRecipesHandler);

// define las rutas relacionadas con las recetas y los handlers correspondientes que se encargarán de manejar las solicitudes HTTP entrantes.
module.exports = recipesRouter;
