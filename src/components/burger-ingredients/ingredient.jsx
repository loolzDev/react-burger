import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import { useMemo } from "react";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

import ingredientStyles from "./ingredient.module.css";
import { setIngredientDetails } from "../../services/actions/ingredient";

const Ingredient = ({ ingredient }) => {
  const { bun, mainIngredients } = useSelector((store) => store.burgerConstructor);
  const { name, price, image, _id: ingredientId, type } = ingredient;
  const dispatch = useDispatch();

  const count = useMemo(() => {
    if (!bun) return;

    return ingredientId === bun._id && type === "bun"
      ? 2
      : mainIngredients.filter((ingredient) => ingredient._id === ingredientId).length;
  }, [bun, mainIngredients, ingredientId, type]);

  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredietns",
    item: ingredient,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <li
      className={`${ingredientStyles.card} ${isDrag && ingredientStyles.dragged}`}
      onClick={() => dispatch(setIngredientDetails(ingredient))}
      ref={dragRef}
    >
      <img className="pl-4 pr-4" src={image} alt={name} />
      <span className={`${ingredientStyles.price} text text_type_digits-default`}>
        {price}
        <CurrencyIcon />
      </span>
      <span className={ingredientStyles["card-title"]}>{name}</span>
      {count > 0 && <Counter count={count} size="default" />}
    </li>
  );
};

Ingredient.propTypes = {
  ingredient: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
  }),
};

export default Ingredient;
