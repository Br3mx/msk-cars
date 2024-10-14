import React, { useState } from "react";
import style from "./ConfirmButton.module.scss";
const ConfirmButton = ({ onConfirm, children }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClick = () => {
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    onConfirm();
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <div>
      <button onClick={handleClick}>{children}</button>

      {showConfirm && (
        <>
          <div className={style.overlay} onClick={handleCancel}></div>
          <div className={style.container}>
            <div className={style.confirmBox}>
              <p>Czy na pewno chcesz usunąć tę realizację?</p>
              <button onClick={handleConfirm} className={style.confirmButton}>
                Tak
              </button>
              <button onClick={handleCancel} className={style.cancelButton}>
                Nie
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ConfirmButton;
