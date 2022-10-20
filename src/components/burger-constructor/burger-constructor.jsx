import { v4 as uuidv4 } from "uuid";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

import MainIngredients from "./main-ingredients";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import OrderContainer from "./order-container";

import constructorStyles from "./burger-constructor.module.css";
import { propTypesConstructor } from "../../constants";

import { updateIngredients } from "../../services/actions/ingredients";
import { addIngredient, addBun } from "../../services/actions/constructor";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const { bun, mainIngredients } = useSelector(
    (store) => store.burgerConstructor.selectedIngredients
  );
  const orderDetails = useSelector((store) => store.modal.orderDetails);

  const totalPrice = useMemo(
    () =>
      bun &&
      bun.price * 2 + mainIngredients.reduce((sum, currentItem) => sum + currentItem.price, 0),
    [bun, mainIngredients]
  );

  const [{ hasError, draggedItem }, dropTarget] = useDrop({
    accept: "ingredietns",
    drop(ingredient) {
      if (ingredient.type === "bun") {
        dispatch(updateIngredients(ingredient._id));
        dispatch(addBun(ingredient));
        return;
      }
      if (bun) {
        dispatch(updateIngredients(ingredient._id, "increment"));
        dispatch(addIngredient({ ...ingredient, uuid: uuidv4() }));
      }
    },
    collect: (monitor) => ({
      draggedItem: monitor.getItem(),
      hasError: monitor.isOver() && draggedItem.type !== "bun" && !bun,
    }),
  });

  return (
    <>
      <section className={constructorStyles["burger-constructor"]}>
        <ul
          className={`${constructorStyles["burger-ingredients"]} ${
            draggedItem && !bun ? constructorStyles["burger-ingredients-hover"] : ""
          }
          ${hasError && constructorStyles["burger-ingredients-error"]}`}
          ref={dropTarget}
        >
          <>
            {bun && (
              <li className={constructorStyles["burger-bun"]}>
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={`${bun.name} (верх)`}
                  price={bun.price}
                  thumbnail={bun.image_mobile}
                />
              </li>
            )}
            <li className={constructorStyles["burger-main"]}>
              {mainIngredients.length > 0 && <MainIngredients />}
            </li>
            {bun && (
              <li className={constructorStyles["burger-bun"]}>
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={`${bun.name} (низ)`}
                  price={bun.price}
                  thumbnail={bun.image_mobile}
                />
              </li>
            )}
          </>
        </ul>
        <OrderContainer totalPrice={totalPrice} />
      </section>
      {orderDetails && (
        <Modal classModifier="order-details">
          <OrderDetails identifier={orderDetails.order.number} />
        </Modal>
      )}
    </>
  );
};

BurgerConstructor.propTypes = propTypesConstructor;

export default BurgerConstructor;
