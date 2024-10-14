import React from "react";
import style from "./CustomModal.module.scss";

const CustomModal = ({ message, showModal, onClose }) => {
  if (!showModal) return null;

  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
        <h2>Wiadomość</h2>
        <p>{message}</p>
        <button onClick={onClose} className={style.closeButton}>
          Zamknij
        </button>
      </div>
    </div>
  );
};

export default CustomModal;
