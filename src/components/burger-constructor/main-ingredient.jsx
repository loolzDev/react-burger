import { useDispatch } from "react-redux";

import constructorStyles from "./burger-constructor.module.css";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { deleteIngredient } from "../../services/actions/ingredients";

const MainIngredient = ({ name, price, image, uuid }) => {
  const dispatch = useDispatch();
  return (
    <li
      className={constructorStyles["burger-main-ingredient"]}
      onClick={() => dispatch(deleteIngredient(uuid))}
    >
      <DragIcon type="primary" />
      <ConstructorElement text={name} price={price} thumbnail={image} />
    </li>
  );
};

export default MainIngredient;
