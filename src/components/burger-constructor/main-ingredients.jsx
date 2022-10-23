import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

import mainIngredientsStyles from "./main-ingredients.module.css";
import MainIngredient from "./main-ingredient";
import { updateMainIngredients } from "../../services/actions/constructor";

const MainIngredients = () => {
  const dispatch = useDispatch();
  const mainIngredients = useSelector((store) => store.burgerConstructor.mainIngredients);

  const moveIngredient = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = mainIngredients[dragIndex];
      const newMainIngredients = [...mainIngredients];
      newMainIngredients.splice(dragIndex, 1);
      newMainIngredients.splice(hoverIndex, 0, dragCard);

      dispatch(updateMainIngredients(newMainIngredients));
    },
    [mainIngredients, dispatch]
  );

  return (
    <ul className={`${mainIngredientsStyles["main-ingredients"]} pl-4 pr-4`}>
      {mainIngredients.map((ingredient, idx) => (
        <MainIngredient
          key={ingredient.uuid}
          ingredient={ingredient}
          index={idx}
          moveIngredient={moveIngredient}
        />
      ))}
    </ul>
  );
};

export default MainIngredients;
