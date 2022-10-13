import { getIngredients } from "../../utils/burger-api";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export const SET_INGREDIENT_DETAILS = "SHOW_INGREDIENT_DETAILS";
export const DELETE_INGREDIENT_DETAILS = "DELETE_INGREDIENT_DETAILS";

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
