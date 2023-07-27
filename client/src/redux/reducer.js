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
      return {
        ...state,
        recipes: action.payload,
      };
    case GET_RECIPES_BY_NAME:
      console.log(action.payload);
      return {
        ...state,
        recipes: action.payload,
      };
    case CREATE_RECIPE:
      return {
        ...state,
        recipes: /*[...state.recipes,*/ action.payload, // Agregar la nueva receta al array de recetas
      };
    case ORDER:
      return {
        ...state,
        recipes: state.recipes.sort((a, b) => a.name.localeCompare(b.name)),
      };
    case ORDER_DESC:
      return {
        ...state,
        recipes: state.recipes.sort((a, b) => b.name.localeCompare(a.name)),
      };
    case GET_BY_API:
      console.log("mi filtro" + state.recipes);
      return {
        ...state,
        recipes:
          action.payload === "db"
            ? state.recipes.filter((e) => e.createdInDb)
            : state.recipes.filter((x) => !x.createdInDb),
      };
    case HS_ASC:
      return {
        ...state,
        recipes: state.recipes.sort(
          (a, b) => b.healthscore - a.healthscore //recetas se muestren de manera ascendente según su puntaje de salud
        ),
      };
    case HS_DESC:
      return {
        ...state,
        recipes: state.recipes.sort((a, b) => a.healthscore - b.healthscore),
      };

    default:
      return { ...state };
  }
};

export default reducer;
