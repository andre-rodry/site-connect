// src/components/infoCard/InfoCard.jsx
import s from "./infoCard.module.scss";

const InfoCard = ({ titulo, descricao, imagem, textoBotao, onParticipate }) => {
  return (
    <article className={s.card}>
      <img src={imagem} alt={titulo} className={s.imagem} />
      <div className={s.content}>
        <h3 className={s.titulo}>{titulo}</h3>
        <p className={s.descricao}>{descricao}</p>
        <button className={s.botao} onClick={onParticipate}>
          {textoBotao}
        </button>
      </div>
    </article>
  );
};

export default InfoCard;