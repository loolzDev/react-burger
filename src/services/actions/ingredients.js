import { getIngredients } from "../../utils/burger-api";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";
export const CHANGE_CURRENT_TAB = "CHANGE_CURRENT_TAB";

export const updateIngredients = (ingredientId, actionType) => ({
  type: UPDATE_INGREDIENTS,
  ingredientId,
  actionType,
});

export const changeCurrentTab = (currentTab) => ({
  type: CHANGE_CURRENT_TAB,
  currentTab,
});

export function getBurgerIngredients() {
  return function (dispatch) {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    getIngredients()
      .then((res) => dispatch({ type: GET_INGREDIENTS_SUCCESS, ingredietns: res.data }))
      .catch(() => dispatch({ type: GET_INGREDIENTS_FAILED }));
  };
}
