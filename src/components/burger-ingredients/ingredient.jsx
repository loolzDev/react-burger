import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

import ingredientStyles from "./ingredient.module.css";
import { setIngredientDetails } from "../../services/actions/ingredient";

const Ingredient = ({ item }) => {
  const { name, price, image } = item;
  const dispatch = useDispatch();

  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredietns",
    item: item,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <li
      className={`${ingredientStyles.card} ${isDrag && ingredientStyles.dragged}`}
      onClick={() => dispatch(setIngredientDetails(item))}
      ref={dragRef}
    >
      <img className="pl-4 pr-4" src={image} alt={name} />
      <span className={`${ingredientStyles.price} text text_type_digits-default`}>
        {price}
        <CurrencyIcon />
      </span>
      <span className={ingredientStyles["card-title"]}>{name}</span>
      {item.count > 0 && <Counter count={item.count} size="default" />}
    </li>
  );
};

Ingredient.propTypes = {
  item: PropTypes.shape({
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
    count: PropTypes.number,
  }),
};

export default Ingredient;
