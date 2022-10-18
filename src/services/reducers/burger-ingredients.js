import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  SET_INGREDIENT_DETAILS,
  DELETE_INGREDIENT_DETAILS,
  ADD_INGREDIENT,
  ADD_BUN,
  DELETE_INGREDIENT,
} from "../actions/ingredients";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,

  currentTab: "Булки",
  ingredientTypes: [
    { title: "Булки", type: "bun" },
    { title: "Соусы", type: "sauce" },
    { title: "Начинки", type: "main" },
  ],

  ingredientDetails: {
    image: "",
    name: "",
    calories: null,
    fat: null,
    proteins: null,
    carbohydrates: null,
  },

  selectedIngredients: {
    bun: {},
    mainIngredients: [],
  },

  orderDetails: {},
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredietns,
        ingredientsRequest: false,
        ingredientsFailed: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true,
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

    case DELETE_INGREDIENT_DETAILS: {
      return {
        ...state,
        ingredientDetails: initialState.ingredientDetails,
      };
    }

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

    default: {
      return state;
    }
  }
};
