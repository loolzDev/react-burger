import { useSelector, useDispatch } from "react-redux";

import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";

import { propTypesOrderContainer } from "../../constants";
import { sendSelectedIngredients } from "../../services/actions/modal";
import orderContainerStyles from "./order-container.module.css";

const OrderContainer = ({ totalPrice }) => {
  const dispatch = useDispatch();
  const { bun, mainIngredients } = useSelector(
    (store) => store.burgerConstructor.selectedIngredients
  );

  const sendOrder = () => {
    dispatch(sendSelectedIngredients([bun._id, ...mainIngredients.map((item) => item._id)]));
  };

  return (
    <div className={`${orderContainerStyles["order-container"]} pl-4 pr-4 pt-10 pb-13`}>
      <span className={`${orderContainerStyles["total-price"]} text text_type_digits-medium`}>
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

OrderContainer.propTypes = propTypesOrderContainer;

export default OrderContainer;
