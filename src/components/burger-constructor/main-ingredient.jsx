import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import mainIngredientStyles from "./main-ingredient.module.css";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { propTypesMainIngredient } from "../../constants";
import { updateIngredients } from "../../services/actions/ingredients";
import { deleteIngredient } from "../../services/actions/constructor";

const MainIngredient = ({ name, price, image, uuid, id, index, moveIngredient }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    if (!e.target.closest(".constructor-element__action")) return;
    dispatch(updateIngredients(id, "decrement"));
    dispatch(deleteIngredient(uuid, id));
  };

  const [{ handlerId, isHover }, drop] = useDrop({
    accept: "component",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        isHover: monitor.isOver(),
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
      style={{ opacity: isHover && 0 }}
    >
      <DragIcon type="primary" />
      <ConstructorElement text={name} price={price} thumbnail={image} />
    </li>
  );
};

MainIngredient.propTypes = propTypesMainIngredient;

export default MainIngredient;
