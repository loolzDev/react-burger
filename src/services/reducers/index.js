import { combineReducers } from "redux";
import { ingredientsReducer } from "./burger-ingredients";
import { constructorReducer } from "./burger-constructor";
import { modalReducer } from "./modal";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  modal: modalReducer,
});
