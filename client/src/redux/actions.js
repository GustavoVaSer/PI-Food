import axios from "axios";

// Definimos los tipos de acciones
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE_DETAIL = "GET_RECIPE_DETAIL";
export const GET_DIETS = "GET_DIETS";
export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const ORDER = "ORDER";
export const ORDER_DESC = "ORDER_DESC ";
export const GET_BY_API = "GET_BY_API";
export const HS_ASC = "HS_ASC";
export const HS_DESC = "HS_DESC";
export const RESET = "RESET";

// Acción para obtener todas las recetas
export const getRecipes = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/recipes");
    dispatch({
      type: GET_RECIPES,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};

// Acción para obtener los detalles de una receta por su ID
export const getRecipeDetail = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/recipes/${id}`);
    dispatch({
      type: GET_RECIPE_DETAIL,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error fetching recipe detail:", error);
  }
};

// Acción para obtener todos los tipos de dietas
export const getDiets = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/diets");
    dispatch({
      type: GET_DIETS,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error fetching diets:", error);
  }
};

// Acción para buscar recetas por nombre
export const getRecipesByName = (name) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/recipes?name=${name}`
    );
    dispatch({
      type: GET_RECIPES_BY_NAME,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error searching recipes by name:", error);
  }
};

// Acción para crear una nueva receta
export const createRecipe = (recipeData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/recipes",
      recipeData
    );
    dispatch({
      type: CREATE_RECIPE,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error creating recipe:", error);
  }
};

// Accion para ordenar
export const order = () => {
  return {
    type: ORDER,
  };
};
// Accion orden descendiente
export const orderDesc = () => {
  return {
    type: ORDER_DESC,
  };
};
// Accion para obtener de la API
export const getByApi = () => {
  return {
    type: GET_BY_API,
  };
};
// Accion ascendente por healhscore
export const healthScoreAsc = () => {
  return {
    type: HS_ASC,
  };
};
// Accion descendente por healthscore
export const healthScoreDesc = () => {
  return {
    type: HS_DESC,
  };
};
// Accion para resetear
export const resetRecipes = () => {
  return {
    type: RESET,
  };
};
