import { v4 as uuidv4 } from "uuid";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_BUN = "ADD_BUN";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const UPDATE_MAIN_INGREDIENTS = "UPDATE_MAIN_INGREDIENTS";

export const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  ingredient: { ...ingredient, uuid: uuidv4() },
});

export const addBun = (bun) => ({
  type: ADD_BUN,
  bun: bun,
});

export const deleteIngredient = (uuid) => ({
  type: DELETE_INGREDIENT,
  uuid,
});

export const updateMainIngredients = (newMainIngredients) => ({
  type: UPDATE_MAIN_INGREDIENTS,
  mainIngredients: newMainIngredients,
});
