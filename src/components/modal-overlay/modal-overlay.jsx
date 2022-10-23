import PropTypes from "prop-types";

import overlayStyles from "./modal-overlay.module.css";

const ModalOverlay = ({ onCloseModal }) => {
  return <div className={overlayStyles.overlay} onClick={onCloseModal}></div>;
};

ModalOverlay.propTypes = { onCloseModal: PropTypes.func.isRequired };

export default ModalOverlay;
