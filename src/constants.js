import PropTypes from "prop-types";

const propTypesCommonData = PropTypes.shape({
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
});

const propTypesIngredientsData = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  propTypesCommonData,
});

const propTypesBunData = PropTypes.shape({
  image_mobile: PropTypes.string.isRequired,
  propTypesCommonData,
});

const propTypesMainIngredients = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  propTypesBunData,
});

export const propTypesIngredients = {
  ingredients: PropTypes.arrayOf(propTypesIngredientsData).isRequired,
};

export const propTypesConstructor = {
  burgerIngredients: PropTypes.shape({
    bun: propTypesBunData.isRequired,
    mainIngredients: PropTypes.arrayOf(propTypesMainIngredients).isRequired,
  }),
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
  identifier: PropTypes.string.isRequired,
};
