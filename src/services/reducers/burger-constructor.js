import {
  ADD_INGREDIENT,
  ADD_BUN,
  DELETE_INGREDIENT,
  UPDATE_MAIN_INGREDIENTS,
} from "../actions/constructor";

const initialState = {
  bun: null,
  mainIngredients: [],
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        mainIngredients: [...state.mainIngredients, action.ingredient],
      };
    }

    case ADD_BUN: {
      return {
        ...state,
        bun: action.bun,
      };
    }

    case DELETE_INGREDIENT: {
      return {
        ...state,
        mainIngredients: state.mainIngredients.filter((item) => item.uuid !== action.uuid),
      };
    }

    case UPDATE_MAIN_INGREDIENTS: {
      return {
        ...state,
        mainIngredients: action.mainIngredients,
      };
    }

    default: {
      return state;
    }
  }
};
