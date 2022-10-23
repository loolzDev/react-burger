import { useSelector } from "react-redux";

import detailsStyles from "./ingredient-details.module.css";

const IngredientDetails = () => {
  const ingredientDetails = useSelector((store) => store.ingredient.ingredientDetails);
  return (
    <div className={detailsStyles.ingredient}>
      <img src={ingredientDetails.image} alt={ingredientDetails.name} />
      <span className={`${detailsStyles.name} text text_type_main-medium`}>
        {ingredientDetails.name}
      </span>
      <ul
        className={`${detailsStyles.parameters} pt-4 pb-5 text text_type_main-default text_color_inactive`}
      >
        <li className={detailsStyles.parameter}>
          Калории, ккал
          <span className="text text_type_digits-default">{ingredientDetails.calories}</span>
        </li>
        <li className={detailsStyles.parameter}>
          Белки, г
          <span className="text text_type_digits-default">{ingredientDetails.proteins}</span>
        </li>
        <li className={detailsStyles.parameter}>
          Жиры, г<span className="text text_type_digits-default">{ingredientDetails.fat}</span>
        </li>
        <li className={detailsStyles.parameter}>
          Углеводы, г
          <span className="text text_type_digits-default">{ingredientDetails.carbohydrates}</span>
        </li>
      </ul>
    </div>
  );
};

export default IngredientDetails;
