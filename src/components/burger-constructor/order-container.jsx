import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";

import orderContainerStyles from "./order-container.module.css";
import { sendSelectedIngredients } from "../../services/actions/order";

const OrderContainer = ({ totalPrice }) => {
  const dispatch = useDispatch();
  const { bun, mainIngredients } = useSelector((store) => store.burgerConstructor);

  const sendOrder = () => {
    dispatch(
      sendSelectedIngredients([bun._id, ...mainIngredients.map((item) => item._id), bun._id])
    );
  };

  return (
    <div className={`${orderContainerStyles["order-container"]} pl-4 pr-4 pt-10 pb-13`}>
      <span className={`${orderContainerStyles["total-price"]} text text_type_digits-medium`}>
        {totalPrice}
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

OrderContainer.propTypes = { totalPrice: PropTypes.number.isRequired };

export default OrderContainer;
