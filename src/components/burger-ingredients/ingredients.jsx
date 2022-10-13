import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ingredientsStyles from "./ingredients.module.css";
import { getBurgerIngredients, setIngredientDetails } from "../../services/actions/ingredients";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

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
                <li
                  key={item._id}
                  className={ingredientsStyles.card}
                  onClick={() => dispatch(setIngredientDetails(item))}
                >
                  <img className="pl-4 pr-4" src={item.image} alt={item.name} />
                  <span className={`${ingredientsStyles.price} text text_type_digits-default`}>
                    {item.price}
                    <CurrencyIcon />
                  </span>
                  <span className={ingredientsStyles["card-title"]}>{item.name}</span>
                  {item.proteins % 3 === 0 && <Counter count={1} size="default" />}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
