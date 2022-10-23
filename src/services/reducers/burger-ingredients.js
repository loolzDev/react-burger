import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  UPDATE_INGREDIENTS,
} from "../actions/ingredients";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

const getUpdateIngredients = (state, ingredientId, type) => {
  return state.ingredients.map((item) =>
    type ? updateCount(item, ingredientId, type) : updateBunCount(item, ingredientId)
  );
};

const updateCount = (item, ingredientId, type) => {
  let value = 1;
  let defaultValue = 1;

  if (type === "decrement") {
    value = -1;
    defaultValue = null;
  }

  if (item._id === ingredientId) {
    item.count = item.count ? item.count + value : defaultValue;
    return item;
  }

  return item;
};

const updateBunCount = (item, bunId) => {
  if (item.type === "bun" && item._id !== bunId) {
    item.count = null;
  }

  if (item._id === bunId) {
    item.count = 2;
    return item;
  }

  return item;
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
        ingredients: action.ingredients,
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

    case UPDATE_INGREDIENTS: {
      return {
        ...state,
        ingredients: getUpdateIngredients(state, action.ingredientId, action.actionType),
      };
    }

    default: {
      return state;
    }
  }
};
