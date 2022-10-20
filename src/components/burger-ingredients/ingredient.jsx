import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";

import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

import ingredientStyles from "./ingredient.module.css";
import { propTypesIngredient } from "../../constants";
import { setIngredientDetails } from "../../services/actions/modal";

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

Ingredient.propTypes = propTypesIngredient;

export default Ingredient;
