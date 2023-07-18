const { Diets } = require("../db");
const { getRecipesByApi } = require("./recipesControllers");

// GET DIETS BY API ---------------

const getDietsByApi = async () => {
  let allDiets = [];

  const getDiets = await getRecipesByApi();

  const mapDiets = await getDiets?.map((e) => e.diets);

  mapDiets.forEach((e) => e.forEach((dietByDiet) => allDiets.push(dietByDiet))); //  Utiliza dos bucles forEach() para iterar sobre el array multidimensional "allDiets"

  return [...new Set(allDiets)]; //eliminar duplicados del array allDiets
};

// POST DIETS ON DB

const getAllDiets = async () => {
  const apiDiets = await getDietsByApi();

  apiDiets.forEach((e) => {
    Diets.findOrCreate({
      where: { name: e },
    });
  });
  const getDiets = await Diets.findAll();

  return getDiets;
};

module.exports = {
  getAllDiets,
  getDietsByApi,
};
