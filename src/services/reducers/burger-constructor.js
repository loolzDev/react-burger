import {
  ADD_INGREDIENT,
  ADD_BUN,
  DELETE_INGREDIENT,
  UPDATE_MAIN_INGREDIENTS,
} from "../actions/constructor";

const initialState = {
  selectedIngredients: {
    bun: null,
    mainIngredients: [],
  },
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        selectedIngredients: {
          ...state.selectedIngredients,
          mainIngredients: [...state.selectedIngredients.mainIngredients, action.ingredient],
        },
      };
    }

    case ADD_BUN: {
      return {
        ...state,
        selectedIngredients: {
          ...state.selectedIngredients,
          bun: action.bun,
        },
      };
    }

    case DELETE_INGREDIENT: {
      return {
        ...state,
        selectedIngredients: {
          ...state.selectedIngredients,
          mainIngredients: state.selectedIngredients.mainIngredients.filter(
            (item) => item.uuid !== action.uuid
          ),
        },
      };
    }

    case UPDATE_MAIN_INGREDIENTS: {
      return {
        ...state,
        selectedIngredients: {
          ...state.selectedIngredients,
          mainIngredients: action.mainIngredients,
        },
      };
    }

    default: {
      return state;
    }
  }
};
