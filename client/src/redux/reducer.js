import {
  GET_RECIPES,
  GET_RECIPE_DETAIL,
  GET_DIETS,
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
