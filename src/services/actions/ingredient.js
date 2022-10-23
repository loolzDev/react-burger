export const SET_INGREDIENT_DETAILS = "SHOW_INGREDIENT_DETAILS";
export const REMOVE_INGREDIENT_DATA = "REMOVE_INGREDIENT_DATA";

export const setIngredientDetails = (ingredient) => ({
  type: SET_INGREDIENT_DETAILS,
  ingredient: ingredient,
});
