require("dotenv").config();
const axios = require("axios");
const { Recipe, Diets } = require("../db.js");
const { API_KEY } = process.env;

// const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`;

const url = "https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5"; // mock

// GET RECIPE BY API ---------------

const getRecipesByApi = async (diet) => {
  //query param y mandarselo a la url
  // console.log(`hola desde recipies controller`);
  const apiUrl = await axios.get(url, {
    params: { diet },
  });
  const apiInfo = await apiUrl.data.results?.map((data) => {
    return {
      id: data.id,
      name: data.title,
      image: data.image,
      summary: data.summary,
      healthscore: data.healthScore,
      steps: data.instructions,
      vegetarian: data.vegetarian,
      vegan: data.vegan,
      glutenFree: data.glutenFree,
      diets: data.diets,
    };
  });

  return apiInfo;
};

//GET RECIPES BY DATA BASE

const getRecipesByDb = async (diet) => {
  const query = {};
  if (diet) query.name = diet;
  const recipe = await Recipe.findAll({
    include: {
      model: Diets,
      where: query,
      attributes: ["name"],
    },
  });
  const recipeDb = recipe.map((e) => {
    //iteramos todos los elementos del array "recipe"
    return {
      name: e.name,
      image: e.image,
      summary: e.summary,
      healthscore: e.healthscore,
      steps: e.steps,
      diets: e.Diets.map((x) => x.name), // se utiliza para obtener un array de nombres de dietas asociadas a cada receta
    };
  });
  return recipeDb;
};

// GET RECIPE BY ID -----------------

const getRecipesById = async (id) => {
  const source = isNaN(id) ? "db" : "api";
  if (source === "api") {
    const data = await axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&number=100`
      )
      .then((response) => response.data)
      .then((data) => {
        let received = {
          id: data.id,
          name: data.title,
          image: data.image,
          summary: data.summary.replace(/(<([^>]+)>)/gi, ""), //reemplazan todas las etiquetas HTML dentro del campo summary
          healthscore: data.healthScore,
          steps: data.instructions.replace(/(<([^>]+)>)/gi, ""), //reemplazan todas las etiquetas HTML dentro del campo summary
          vegetarian: data.vegetarian,
          vegan: data.vegan,
          glutenFree: data.glutenFree,
          diets: data.diets,
        };
        return received;
      });
    return data;
  }
  return await Recipe.findByPk(id);
};

// GET BOTH RECIPES FROM API & DB

const getAllRecipes = async (diet) => {
  const getByApi = await getRecipesByApi(diet);
  const getByDb = await getRecipesByDb(diet);
  const allRecipes = getByDb.concat(getByApi);
  return allRecipes;
};

module.exports = {
  getRecipesByApi,
  getRecipesByDb,
  getRecipesById,
  getAllRecipes,
};
