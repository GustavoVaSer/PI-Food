const { Diets } = require("../db");
const { getRecipesByApi } = require("./recipesControllers");

// GET DIETS BY API ---------------

const getDietsByApi = async (diet) => {
  let allDiets = [];

  const getDiets = await getRecipesByApi(diet); // te estass trayendo recetas de la api

  const mapDiets = await getDiets?.map((e) => e.diets); // de cada receta creas un mapa de dietas

  mapDiets.forEach((e) => e.forEach((dietByDiet) => allDiets.push(dietByDiet))); //  Utiliza dos bucles forEach() para iterar sobre el array multidimensional "allDiets"

  return [...new Set(allDiets)]; //eliminar duplicados del array allDiets
};

// POST DIETS ON DB

const getAllDiets = async (diet) => {
  const apiDiets = await getDietsByApi(diet);

  // Crea un array de promesas para el método findOrCreate
  const promises = apiDiets.map((e) => {
    return Diets.findOrCreate({
      where: { name: e },
    });
  });

  // Espera a que todas las promesas se resuelvan
  await Promise.all(promises);

  const getDiets = await Diets.findAll();

  return getDiets;
};

module.exports = {
  getAllDiets,
  getDietsByApi,
};
