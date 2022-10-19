import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";

import ingredientsStyles from "./ingredients.module.css";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

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
      {item.count > 0 && <Counter count={item.count} size="default" />}
    </li>
  );
};

export default Ingredient;
