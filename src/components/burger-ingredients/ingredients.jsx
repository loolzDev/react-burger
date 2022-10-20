import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import ingredientsStyles from "./ingredients.module.css";
import { getBurgerIngredients, changeCurrentTab } from "../../services/actions/ingredients";

import Ingredient from "./ingredient";

const Ingredients = () => {
  const dispatch = useDispatch();
  const { ingredients, ingredientTypes } = useSelector((store) => store.ingredients);

  useEffect(() => {
    dispatch(getBurgerIngredients());
  }, []);

  const scrollWrapperRef = useRef(null);
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const handleScroll = () => {
    const bunDistance = getDistance(bunRef);
    const sauceDistance = getDistance(sauceRef);
    const mainDistance = getDistance(mainRef);
    const minDistance = Math.min(bunDistance, sauceDistance, mainDistance);
    const currentActiveTab =
      minDistance === bunDistance ? "bun" : minDistance === sauceDistance ? "sauce" : "main";
    dispatch(changeCurrentTab(currentActiveTab));
  };

  const getDistance = (refType) => {
    return Math.abs(
      scrollWrapperRef?.current?.getBoundingClientRect()?.top -
        refType?.current?.getBoundingClientRect()?.top
    );
  };

  const getRefType = (ingredientType) => {
    return ingredientType === "bun" ? bunRef : ingredientType === "sauce" ? sauceRef : mainRef;
  };

  return (
    <div
      className={ingredientsStyles["ingredients-wrapper"]}
      ref={scrollWrapperRef}
      onScroll={handleScroll}
    >
      {ingredientTypes.map((ingredient, idx) => (
        <div
          ref={getRefType(ingredient.type)}
          key={idx}
          className={ingredientsStyles["ingredient-container"]}
        >
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
