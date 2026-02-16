import s from "./successMessage.module.scss";

const SuccessMessage = ({ mensagem = "Inscrito com sucesso!", onClose }) => {
  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.messageBox} onClick={(e) => e.stopPropagation()}>
        <div className={s.iconContainer}>
          <svg className={s.checkIcon} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" className={s.circle} />
            <path
              d="M9 12l2 2 4-4"
              className={s.path}
            />
          </svg>
        </div>
        <p className={s.message}>{mensagem}</p>
      </div>
    </div>
  );
};

export default SuccessMessage;
