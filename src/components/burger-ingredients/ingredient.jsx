import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";

import ingredientsStyles from "./ingredients.module.css";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

import { setIngredientDetails } from "../../services/actions/ingredients";

const Ingredient = ({ item }) => {
  const { _id: id, name, price, image } = item;
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
      className={ingredientsStyles.card}
      onClick={() => dispatch(setIngredientDetails(item))}
      ref={dragRef}
    >
      <img className="pl-4 pr-4" src={image} alt={name} />
      <span className={`${ingredientsStyles.price} text text_type_digits-default`}>
        {price}
        <CurrencyIcon />
      </span>
      <span className={ingredientsStyles["card-title"]}>{name}</span>
      <Counter count={1} size="default" />
    </li>
  );
};

export default Ingredient;
