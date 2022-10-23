import { useSelector } from "react-redux";

import ingredientsStyles from "./burger-ingredients.module.css";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Ingredients from "./ingredients";
import { REMOVE_INGREDIENT_DATA } from "../../services/actions/ingredient";

const BurgerIngredients = () => {
  const ingredientDetails = useSelector((store) => store.ingredient.ingredientDetails);

  return (
    <>
      <section className={ingredientsStyles["burger-ingredients"]}>
        <Ingredients />
      </section>
      {ingredientDetails && (
        <Modal
          title="Детали ингредиента"
          classModifier="ingredient-details"
          actionType={REMOVE_INGREDIENT_DATA}
        >
          <IngredientDetails />
        </Modal>
      )}
    </>
  );
};

export default BurgerIngredients;
