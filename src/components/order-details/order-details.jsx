import PropTypes from "prop-types";

import orderStyles from "./order-details.module.css";
import doneImg from "../../images/done.png";

const OrderDetails = ({ identifier }) => {
  return (
    <div className={`${orderStyles.order} pt-20 pb-20 pl-16 pr-16`}>
      <div className={orderStyles.identifier}>
        <span className={`${orderStyles.number} text text_type_digits-large`}>{identifier}</span>
        <span className="text text_type_main-medium">идентификатор заказа</span>
      </div>
      <button type="button" className={orderStyles.done}>
        <img src={doneImg} alt="кнопка в виде галочки" />
      </button>
      <div className={`${orderStyles.description} text text_type_main-small`}>
        Ваш заказ начали готовить
        <span className="text text_type_main-default text_color_inactive">
          Дождитесь готовности на орбитальной станции
        </span>
      </div>
    </div>
  );
};

OrderDetails.propTypes = { identifier: PropTypes.number.isRequired };

export default OrderDetails;
