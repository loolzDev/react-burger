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

const BurgerConstructor = ({ burgerIngredients, modalData, onClose, showModal }) => {
  const { bun, mainIngredients } = burgerIngredients;
  const { name: bunName, price: bunPrice, image_mobile: bunImage } = bun;

  const getPrice = () => {
    return bunPrice * 2 + mainIngredients.reduce((acc, { price }) => acc + price, 0);
  };

  return (
    <>
      <section className={constructorStyles["burger-constructor"]}>
        <ul className={constructorStyles["burger-ingredients"]}>
          <li className={constructorStyles["burger-bun"]}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bunName} (верх)`}
              price={bunPrice}
              thumbnail={bunImage}
            />
          </li>
          <li className={constructorStyles["burger-main"]}>
            <ul className={`${constructorStyles["burger-main-ingredients"]} pl-4 pr-4`}>
              {mainIngredients.map(({ name, price, image_mobile, _id }) => (
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
              text={`${bunName} (низ)`}
              price={bunPrice}
              thumbnail={bunImage}
            />
          </li>
        </ul>
        <div className={`${constructorStyles["burger-checkout"]} pl-4 pr-4 pt-10 pb-13`}>
          <span className={`${constructorStyles["burger-price"]} text text_type_digits-medium`}>
            {getPrice()}
            <CurrencyIcon type="primary" />
          </span>
          <Button htmlType="button" type="primary" size="large" onClick={() => showModal("order")}>
            Оформить заказ
          </Button>
        </div>
      </section>
      {modalData.isOpen && modalData.type === "order" && (
        <Modal classModifier="order-details" onCloseModal={onClose}>
          <OrderDetails identifier="034536"></OrderDetails>
        </Modal>
      )}
    </>
  );
};

BurgerConstructor.propTypes = propTypesConstructor;

export default BurgerConstructor;
