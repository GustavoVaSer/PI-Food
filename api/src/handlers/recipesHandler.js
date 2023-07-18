const { Recipe, Diets } = require("../db.js");
const {
  getRecipesById,
  getAllRecipes,
} = require("../controllers/recipesControllers");

// VALIDATING DATA AND RETURN --------------------

const getAllRecipesHandler = async (req, res) => {
  //maneja la solicitud para obtener todas las recetas
  try {
    const allRecipes = await getAllRecipes();
    if (req.query.hasOwnProperty("name")) {
      const { name } = req.query;
      const filteredName = allRecipes.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );

      filteredName.length > 0
        ? res.status(200).json(filteredName)
        : res.status(404).send("couldn't find the recipe you're searching for");
    } else {
      res.status(200).json(allRecipes);
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
