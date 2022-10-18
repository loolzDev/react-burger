import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";

import constructorStyles from "./burger-constructor.module.css";
const TotalPrice = ({ totalPrice }) => {
  return (
    <div className={`${constructorStyles["burger-checkout"]} pl-4 pr-4 pt-10 pb-13`}>
      <span className={`${constructorStyles["burger-price"]} text text_type_digits-medium`}>
        {totalPrice || 0}
        <CurrencyIcon type="primary" />
      </span>
      <Button htmlType="button" type="primary" size="large">
        Оформить заказ
      </Button>
    </div>
  );
};

export default TotalPrice;
