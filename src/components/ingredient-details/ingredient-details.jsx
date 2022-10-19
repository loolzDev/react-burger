import { useSelector } from "react-redux";

import detailsStyles from "./ingredient-details.module.css";

const IngredientDetails = () => {
  const { image, name, calories, fat, proteins, carbohydrates } = useSelector(
    (store) => store.modal.ingredientDetails
  );
  return (
    <div className={detailsStyles.ingredient}>
      <img src={image} alt={name} />
      <span className={`${detailsStyles.name} text text_type_main-medium`}>{name}</span>
      <ul
        className={`${detailsStyles.parameters} pt-4 pb-5 text text_type_main-default text_color_inactive`}
      >
        <li className={detailsStyles.parameter}>
          Калории, ккал
          <span className="text text_type_digits-default">{calories}</span>
        </li>
        <li className={detailsStyles.parameter}>
          Белки, г<span className="text text_type_digits-default">{proteins}</span>
        </li>
        <li className={detailsStyles.parameter}>
          Жиры, г<span className="text text_type_digits-default">{fat}</span>
        </li>
        <li className={detailsStyles.parameter}>
          Углеводы, г<span className="text text_type_digits-default">{carbohydrates}</span>
        </li>
      </ul>
    </div>
  );
};

export default IngredientDetails;
