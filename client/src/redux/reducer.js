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
  }
};
