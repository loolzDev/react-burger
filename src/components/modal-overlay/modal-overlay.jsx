import overlayStyles from "./modal-overlay.module.css";
import { propTypesModalOverlay } from "../../constants";

const ModalOverlay = ({ onCloseModal }) => {
  return <div className={overlayStyles.overlay} onClick={onCloseModal}></div>;
};

ModalOverlay.propTypes = propTypesModalOverlay;

export default ModalOverlay;
