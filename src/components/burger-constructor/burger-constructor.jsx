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

import { addIngredient, addBun } from "../../services/actions/ingredients";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const { bun, mainIngredients } = useSelector((store) => store.ingredients.selectedIngredients);

  const totalPrice =
    bun.price * 2 + mainIngredients.reduce((sum, currentItem) => sum + currentItem.price, 0);

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredietns",
    drop(ingredient) {
      if (ingredient.type === "bun") {
        dispatch(addBun(ingredient));
        return;
      }
      bun.name && dispatch(addIngredient({ ...ingredient, uuid: uuidv4() }));
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
            {bun.name && (
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
                  {mainIngredients.map(({ name, price, image_mobile, uuid }, idx) => (
                    <MainIngredient
                      key={idx}
                      name={name}
                      price={price}
                      image={image_mobile}
                      uuid={uuid}
                    />
                  ))}
                </ul>
              )}
            </li>

            {bun.name && (
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
      {1 < 0 && (
        <Modal classModifier="order-details">
          <OrderDetails identifier="034536"></OrderDetails>
        </Modal>
      )}
    </>
  );
};

BurgerConstructor.propTypes = propTypesConstructor;

export default BurgerConstructor;
