import {
  POST_SELECTED_INGREDIENTS_REQUEST,
  POST_SELECTED_INGREDIENTS_SUCCESS,
  POST_SELECTED_INGREDIENTS_FAILED,
  SET_INGREDIENT_DETAILS,
  REMOVE_MODAL_DATA,
} from "../actions/modal";

const initialState = {
  ingredientDetails: {
    image: "",
    name: "",
    calories: null,
    fat: null,
    proteins: null,
    carbohydrates: null,
  },

  orderDetails: null,
  selectedIngredientsRequest: false,
  selectedIngredientsFailed: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SELECTED_INGREDIENTS_REQUEST: {
      return {
        ...state,
        selectedIngredientsRequest: true,
      };
    }
    case POST_SELECTED_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        orderDetails: action.order,
        selectedIngredientsRequest: false,
        selectedIngredientsFailed: false,
      };
    }
    case POST_SELECTED_INGREDIENTS_FAILED: {
      return {
        ...state,
        selectedIngredientsRequest: false,
        selectedIngredientsFailed: true,
      };
    }

    case SET_INGREDIENT_DETAILS: {
      return {
        ...state,
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

    case REMOVE_MODAL_DATA: {
      return {
        ...state,
        ingredientDetails: initialState.ingredientDetails,
        orderDetails: initialState.orderDetails,
      };
    }

    default: {
      return state;
    }
  }
};
