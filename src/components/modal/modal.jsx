import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ModalOverlay from "../modal-overlay/modal-overlay";
import modalStyles from "./modal.module.css";
import { propTypesModal } from "../../constants";
import { REMOVE_MODAL_DATA } from "../../services/actions/modal";

const Modal = ({ children, title = "", classModifier }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.addEventListener("keydown", handlePressEscape);

    return () => document.addEventListener("keydown", handlePressEscape);
  });

  const handleClose = () => {
    dispatch({ type: REMOVE_MODAL_DATA });
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

Modal.propTypes = propTypesModal;

export default Modal;
