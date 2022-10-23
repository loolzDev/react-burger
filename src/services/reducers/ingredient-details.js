import { SET_INGREDIENT_DETAILS, REMOVE_INGREDIENT_DATA } from "../actions/ingredient";

const initialState = {
  ingredientDetails: null,
};

export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT_DETAILS: {
      return {
        ingredientDetails: {
          ...state.ingredientDetails,
          image: action.ingredient.image_large,
          name: action.ingredient.name,
          calories: action.ingredient.calories,
          fat: action.ingredient.fat,
          proteins: action.ingredient.proteins,
          carbohydrates: action.ingredient.carbohydrates,
        },
      };
    }

    case REMOVE_INGREDIENT_DATA: {
      return {
        ingredientDetails: initialState.ingredientDetails,
      };
    }

    default: {
      return state;
    }
  }
};
