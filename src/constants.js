import PropTypes from "prop-types";

const propTypesIngredientCommonData = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  count: PropTypes.number,
};

export const propTypesIngredient = {
  item: PropTypes.shape({
    ...propTypesIngredientCommonData,
  }),
};

export const propTypesOrderContainer = {
  totalPrice: PropTypes.number,
};

export const propTypesMainIngredient = {
  ...propTypesIngredientCommonData,
  uuid: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  moveIngredient: PropTypes.func.isRequired,
};

export const propTypesModal = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  classModifier: PropTypes.string,
};

export const propTypesModalOverlay = {
  onCloseModal: PropTypes.func.isRequired,
};

export const propTypesOrderDetails = {
  identifier: PropTypes.number.isRequired,
};
