import { sendIngredients } from "../../utils/burger-api";

export const POST_SELECTED_INGREDIENTS_REQUEST = "POST_SELECTED_INGREDIENTS_REQUEST";
export const POST_SELECTED_INGREDIENTS_SUCCESS = "POST_SELECTED_INGREDIENTS_SUCCESS";
export const POST_SELECTED_INGREDIENTS_FAILED = "POST_SELECTED_INGREDIENTS_FAILED";

export const REMOVE_ORDER_DATA = "REMOVE_MODAL_DATA";

export function sendSelectedIngredients(ids) {
  return function (dispatch) {
    dispatch({ type: POST_SELECTED_INGREDIENTS_REQUEST });
    sendIngredients(ids)
      .then((res) => dispatch({ type: POST_SELECTED_INGREDIENTS_SUCCESS, order: res }))
      .catch(() => dispatch({ type: POST_SELECTED_INGREDIENTS_FAILED }));
  };
}
