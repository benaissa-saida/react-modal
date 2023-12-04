import React from "react";
import "./modal.css";

const Modal = ({ title, closeModal, isOpened }) => {
  return (
    <div>
      {isOpened && (
        <div className="modal-window">
          <div className="modal-body">
            <span>{title}</span>
            <button onClick={closeModal} className="modal-close"></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
