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
