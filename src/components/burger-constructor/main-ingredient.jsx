import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

import mainIngredientStyles from "./main-ingredient.module.css";
import { deleteIngredient } from "../../services/actions/constructor";

const MainIngredient = ({ ingredient, index, moveIngredient }) => {
  const { _id: id, uuid, name, price, image } = ingredient;
  const ref = useRef(null);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    if (!e.target.closest(".constructor-element__action")) return;
    dispatch(deleteIngredient(uuid, id));
  };

  const [{ handlerId }, drop] = useDrop({
    accept: "component",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveIngredient(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "component",
    item: () => ({ id: uuid, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));
  const preventDefault = (e) => e.preventDefault();

  return (
    <li
      className={mainIngredientStyles["main-ingredient"]}
      onClick={handleDelete}
      ref={ref}
      onDrop={preventDefault}
      data-handler-id={handlerId}
      style={{ opacity: isDragging ? 0 : 1 }}
    >
      <DragIcon type="primary" />
      <ConstructorElement text={name} price={price} thumbnail={image} />
    </li>
  );
};

MainIngredient.propTypes = {
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
    uuid: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
  moveIngredient: PropTypes.func.isRequired,
};

export default MainIngredient;
