import {
  GET_RECIPES,
  GET_RECIPE_DETAIL,
  GET_DIETS,
  FILTER_BY_DIETS,
  GET_RECIPES_BY_NAME,
  CREATE_RECIPE,
  ORDER,
  ORDER_DESC,
  GET_BY_API,
  HS_ASC,
  HS_DESC,
  RESET,
} from "./actions";

const initialState = {
  recipes: [],
  recipeDetail: {},
  diets: [],
  filteredRecipes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case GET_RECIPE_DETAIL:
      return {
        ...state,
        recipeDetail: action.payload,
      };
    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
    case FILTER_BY_DIETS:
      // const dietsFiltered = state.filteredRecipes.filter((e) =>
      //   e.diets.includes(action.payload)
      // );
      return {
        ...state,
        recipes: action.payload,
        // === "All" ? state.filteredRecipes : dietsFiltered,
      };
    case GET_RECIPES_BY_NAME:
      return {
        ...state,
        filteredRecipes: action.payload,
      };
    case CREATE_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload], // Agregar la nueva receta al array de recetas
      };
    case ORDER:
      return {
        ...state,
        recipes: state.filteredRecipes.sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
      };
    case ORDER_DESC:
      return {
        ...state,
        recipes: state.filteredRecipes.sort((a, b) =>
          b.name.localeCompare(a.name)
        ),
      };
    case GET_BY_API:
      // la acción trae un arreglo de recetas de la API en action.payload
      const apiRecipes = action.payload;
      // Combina las recetas de la API con las recetas actuales del estado
      const combinedRecipes = [...state.recipes, ...apiRecipes];
      return {
        ...state,
        recipes: combinedRecipes, // Actualiza las recetas con las combinadas
      };
    case HS_ASC:
      return {
        ...state,
        recipes: state.filteredRecipes.sort(
          (a, b) => b.healthscore - a.healthscore //recetas se muestren de manera ascendente según su puntaje de salud
        ),
      };
    case HS_DESC:
      return {
        ...state,
        recipes: state.filteredRecipes.sort(
          (a, b) => a.healthscore - b.healthscore
        ),
      };
    case RESET:
      return {
        ...state,
        recipes: state.filteredRecipes,
      };

    default:
      return { ...state };
  }
};

export default reducer;
