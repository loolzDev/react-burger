import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";

import ModalOverlay from "../modal-overlay/modal-overlay";
import modalStyles from "./modal.module.css";

const Modal = ({ children, title = "", classModifier, actionType }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.addEventListener("keydown", handlePressEscape);

    return () => document.removeEventListener("keydown", handlePressEscape);
  }, []);

  const handleClose = () => {
    dispatch({ type: actionType });
  };

  const handlePressEscape = (event) => {
    if (event.code !== "Escape") return;
    handleClose();
  };

  return createPortal(
    <>
      <div className={`${modalStyles.modal} ${modalStyles[classModifier]} p-10`}>
        {title.length > 0 && (
          <h2 className={`${modalStyles.title} text text_type_main-large pt-3 pb-3`}>{title}</h2>
        )}
        <button type="button" onClick={handleClose} className={modalStyles.close}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
      <ModalOverlay onCloseModal={handleClose} />
    </>,
    document.getElementById("modal")
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  classModifier: PropTypes.string,
  actionType: PropTypes.string.isRequired,
};

export default Modal;
