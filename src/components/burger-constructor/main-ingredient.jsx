import { useDispatch } from "react-redux";

import constructorStyles from "./burger-constructor.module.css";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { updateIngredients } from "../../services/actions/ingredients";
import { deleteIngredient } from "../../services/actions/constructor";

const MainIngredient = ({ name, price, image, uuid, id }) => {
  const dispatch = useDispatch();
  return (
    <li
      className={constructorStyles["burger-main-ingredient"]}
      onClick={() => {
        dispatch(updateIngredients(id, "decrement"));
        dispatch(deleteIngredient(uuid, id));
      }}
    >
      <DragIcon type="primary" />
      <ConstructorElement text={name} price={price} thumbnail={image} />
    </li>
  );
};

export default MainIngredient;
