const { Recipe, Diets } = require("../db.js");
const {
  getRecipesById,
  getAllRecipes,
} = require("../controllers/recipesControllers");

// VALIDATING DATA AND RETURN --------------------

const getAllRecipesHandler = async (req, res) => {
  //maneja la solicitud para obtener todas las recetas
  try {
    const { diet } = req.query;
    const allRecipes = await getAllRecipes(diet);
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

// GET RECIPES BY ID HANDLER ---------------------

const getRecipesByIdHandler = async (req, res) => {
  // maneja la solicitud para obtener una receta por su ID
  const { id } = req.params;
  try {
    const getId = await getRecipesById(id);
    res.status(200).json(getId);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// POST RECIPES DATA ---------------------------

const postRecipesHandler = async (req, res) => {
  // maneja la solicitud para crear una nueva receta
  const { name, summary, healthscore, image, steps, diets } = req.body;
  try {
    const post = await Recipe.create({
      //metodo create de Sequelize para crear una nueva instancia de Recipe
      name,
      summary,
      healthscore,
      image,
      steps,
    }); // Asociatting data
    diets?.map(async (e) => {
      let dietDb = await Diets.findOne({ where: { name: e } });
      await post.addDiets(dietDb);
    });
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

module.exports = {
  getAllRecipesHandler,
  getRecipesByIdHandler,
  postRecipesHandler,
};
