import { useSelector, useDispatch } from "react-redux";

import {
  ConstructorElement,
  CurrencyIcon,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import constructorStyles from "./burger-constructor.module.css";
import { propTypesConstructor } from "../../constants";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const { selectedIngredients, totalPrice } = useSelector((store) => store.ingredients);

  return (
    <>
      <section className={constructorStyles["burger-constructor"]}>
        {selectedIngredients.length > 0 && (
          <ul className={constructorStyles["burger-ingredients"]}>
            <li className={constructorStyles["burger-bun"]}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${selectedIngredients.bunName} (верх)`}
                price={selectedIngredients.bunPrice}
                thumbnail={selectedIngredients.bunImage}
              />
            </li>
            <li className={constructorStyles["burger-main"]}>
              <ul className={`${constructorStyles["burger-main-ingredients"]} pl-4 pr-4`}>
                {selectedIngredients.map(({ name, price, image_mobile, _id }) => (
                  <li key={_id} className={constructorStyles["burger-main-ingredient"]}>
                    <DragIcon type="primary" />
                    <ConstructorElement text={name} price={price} thumbnail={image_mobile} />
                  </li>
                ))}
              </ul>
            </li>
            <li className={constructorStyles["burger-bun"]}>
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${selectedIngredients.bunName} (низ)`}
                price={selectedIngredients.bunPrice}
                thumbnail={selectedIngredients.bunImage}
              />
            </li>
          </ul>
        )}
        <div className={`${constructorStyles["burger-checkout"]} pl-4 pr-4 pt-10 pb-13`}>
          <span className={`${constructorStyles["burger-price"]} text text_type_digits-medium`}>
            {totalPrice}
            <CurrencyIcon type="primary" />
          </span>
          <Button htmlType="button" type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
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
