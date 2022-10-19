import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

import MainIngredient from "./main-ingredient";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import TotalPrice from "./total-price";

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

  const totalPrice =
    bun && bun.price * 2 + mainIngredients.reduce((sum, currentItem) => sum + currentItem.price, 0);

  const [{ isHover }, dropTarget] = useDrop({
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
      isHover: monitor.isOver() && monitor.getItem().type === "bun",
    }),
  });

  return (
    <>
      <section className={constructorStyles["burger-constructor"]}>
        <ul
          className={`${constructorStyles["burger-ingredients"]} ${
            isHover ? constructorStyles["burger-ingredients-hover"] : ""
          }`}
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
              {mainIngredients.length > 0 && (
                <ul className={`${constructorStyles["burger-main-ingredients"]} pl-4 pr-4`}>
                  {mainIngredients.map(({ name, price, image_mobile, uuid, _id }, idx) => (
                    <MainIngredient
                      key={idx}
                      name={name}
                      price={price}
                      image={image_mobile}
                      uuid={uuid}
                      id={_id}
                    />
                  ))}
                </ul>
              )}
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
        <TotalPrice totalPrice={totalPrice} />
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
