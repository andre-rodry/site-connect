// src/components/successMessage/SuccessMessage.jsx
import React from "react";
import s from "./successMessage.module.scss";

const SuccessMessage = ({ mensagem = "Inscrito com sucesso!", onClose }) => {
  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.messageBox} onClick={(e) => e.stopPropagation()}>
        <div className={s.iconContainer}>
          <svg className={s.checkIcon} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#90EE90" opacity="0.3" />
            <path
              d="M9 12l2 2 4-4"
              stroke="#4CAF50"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className={s.message}>{mensagem}</p>
      </div>
    </div>
  );
};

export default SuccessMessage;