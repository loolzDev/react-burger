import { useSelector } from "react-redux";

import ingredientsStyles from "./burger-ingredients.module.css";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Tabs from "./tabs";
import Ingredients from "./ingredients";

const BurgerIngredients = () => {
  const { name: ingredientName } = useSelector((store) => store.modal.ingredientDetails);

  return (
    <>
      <section className={ingredientsStyles["burger-ingredients"]}>
        <Tabs />
        <Ingredients />
      </section>
      {ingredientName && (
        <Modal title="Детали ингредиента" classModifier="ingredient-details">
          <IngredientDetails />
        </Modal>
      )}
    </>
  );
};

export default BurgerIngredients;
