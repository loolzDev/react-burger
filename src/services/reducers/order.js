import {
  POST_SELECTED_INGREDIENTS_REQUEST,
  POST_SELECTED_INGREDIENTS_SUCCESS,
  POST_SELECTED_INGREDIENTS_FAILED,
  REMOVE_ORDER_DATA,
} from "../actions/order";

const initialState = {
  orderDetails: null,
  selectedIngredientsRequest: false,
  selectedIngredientsFailed: false,
};

export const orderReducer = (state = initialState, action) => {
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

    case REMOVE_ORDER_DATA: {
      return {
        ...state,
        orderDetails: initialState.orderDetails,
      };
    }

    default: {
      return state;
    }
  }
};
