import { combineReducers } from "redux";
import { ingredientsReducer } from "./burger-ingredients";
import { constructorReducer } from "./burger-constructor";
import { orderReducer } from "./order";
import { ingredientDetailsReducer } from "./ingredient-details";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  order: orderReducer,
  ingredient: ingredientDetailsReducer,
});
