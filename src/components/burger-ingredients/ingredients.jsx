import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ingredientsStyles from "./ingredients.module.css";
import { getBurgerIngredients } from "../../services/actions/ingredients";

import Ingredient from "./ingredient";

const Ingredients = () => {
  const dispatch = useDispatch();
  const { ingredients, ingredientTypes } = useSelector((store) => store.ingredients);

  useEffect(() => {
    dispatch(getBurgerIngredients());
  }, []);

  return (
    <div className={ingredientsStyles["ingredients-wrapper"]}>
      {ingredientTypes.map((ingredient, idx) => (
        <div key={idx} className={ingredientsStyles["ingredient-container"]}>
          <span className={`${ingredientsStyles.title} text text_type_main-medium`}>
            {ingredient.title}
          </span>
          <ul className={`${ingredientsStyles["ingredients-list"]} pl-4 pt-6`}>
            {ingredients
              .filter((item) => item.type === ingredient.type)
              .map((item) => (
                <Ingredient key={item._id} item={item} />
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
