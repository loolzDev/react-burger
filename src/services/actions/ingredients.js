import { getIngredients } from "../../utils/burger-api";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export const SET_INGREDIENT_DETAILS = "SHOW_INGREDIENT_DETAILS";
export const DELETE_INGREDIENT_DETAILS = "DELETE_INGREDIENT_DETAILS";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_BUN = "ADD_BUN";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";

export const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  ingredient: ingredient,
});

export const addBun = (bun) => ({
  type: ADD_BUN,
  bun: bun,
});

export const deleteIngredient = (uuid) => ({
  type: DELETE_INGREDIENT,
  uuid,
});

export const setIngredientDetails = (ingredient) => ({
  type: SET_INGREDIENT_DETAILS,
  ingredient: ingredient,
});

export function getBurgerIngredients() {
  return function (dispatch) {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    getIngredients()
      .then((res) => dispatch({ type: GET_INGREDIENTS_SUCCESS, ingredietns: res.data }))
      .catch(() => dispatch({ type: GET_INGREDIENTS_FAILED }));
  };
}
