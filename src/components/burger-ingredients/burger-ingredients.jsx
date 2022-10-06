import { useState } from "react";
import { Tab, CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import ingredientsStyles from "./burger-ingredients.module.css";
import { propTypesIngredients } from "../../constants";

const BurgerIngredients = ({ ingredients, modalData, showModal, onClose }) => {
  const [ingredientTypes, setIngredientTypes] = useState([
    { title: "Булки", type: "bun", active: true },
    { title: "Соусы", type: "sauce", active: false },
    { title: "Начинки", type: "main", active: false },
  ]);

  const [ingredientDetails, setIngredientDetails] = useState({});

  const handleClickIngredient = (ingredient) => {
    showModal("details");
    setIngredientDetails({ ...ingredient });
  };

  const toggleActiveIngredientType = (ingredient) => {
    setIngredientTypes([
      ...ingredientTypes.map((item) => {
        if (item.active) {
          item.active = false;
        }
        if (item.title === ingredient.title) {
          item.active = true;
        }
        return item;
      }),
    ]);
  };

  return (
    <>
      <section className={ingredientsStyles["burger-ingredients"]}>
        <nav className="mb-10">
          <ul className={ingredientsStyles["ingredient-types"]}>
            {ingredientTypes.map((ingredient, idx) => (
              <li key={idx} className={ingredientsStyles.item}>
                <Tab
                  onClick={() => toggleActiveIngredientType(ingredient)}
                  active={ingredient.active}
                >
                  {ingredient.title}
                </Tab>
              </li>
            ))}
          </ul>
        </nav>
        <div className={ingredientsStyles["burger-ingredients-wrapper"]}>
          {ingredientTypes.map((ingredient, idx) => (
            <div key={idx} className={ingredientsStyles["burger-ingredient-container"]}>
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
                      onClick={() => handleClickIngredient(item)}
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
      </section>
      {modalData.isOpen && modalData.type === "details" && (
        <Modal title="Детали ингредиента" classModifier="ingredient-details" onCloseModal={onClose}>
          <IngredientDetails details={ingredientDetails} />
        </Modal>
      )}
    </>
  );
};

BurgerIngredients.propTypes = propTypesIngredients;

export default BurgerIngredients;
