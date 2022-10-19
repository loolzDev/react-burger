import { useSelector, useDispatch } from "react-redux";

import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";

import { sendSelectedIngredients } from "../../services/actions/modal";

import constructorStyles from "./burger-constructor.module.css";
const TotalPrice = ({ totalPrice }) => {
  const dispatch = useDispatch();
  const { bun, mainIngredients } = useSelector(
    (store) => store.burgerConstructor.selectedIngredients
  );

  const sendOrder = () => {
    dispatch(sendSelectedIngredients([bun._id, ...mainIngredients.map((item) => item._id)]));
  };

  return (
    <div className={`${constructorStyles["burger-checkout"]} pl-4 pr-4 pt-10 pb-13`}>
      <span className={`${constructorStyles["burger-price"]} text text_type_digits-medium`}>
        {totalPrice || 0}
        <CurrencyIcon type="primary" />
      </span>
      <Button
        htmlType="button"
        type="primary"
        size="large"
        onClick={sendOrder}
        disabled={!totalPrice}
      >
        Оформить заказ
      </Button>
    </div>
  );
};

export default TotalPrice;
