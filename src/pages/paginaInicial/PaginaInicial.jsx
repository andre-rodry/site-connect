// PaginaInicial.jsx
import { Link } from 'react-router-dom';
import s from './paginaInicial.module.scss';

import imageBannerDesktop from '../../assets/images/images_banner/image_banner_desktop.png';
import imageBannerMobile from '../../assets/images/images_banner/image_banner_mobile.png';

const PaginaInicial = () => {
  return (
    <section className={s.paginaInicial}>
      
      <div className={s.conteudo}>
        <h1>Projetos Sociais <span className={s.break}>que transformam</span></h1>

        <p>
          Conectamos sua empresa com projetos sociais impactantes.
          <span className={s.break}>Juntos, criamos mudanças reais na comunidade.</span>
        </p>

        <Link to="#" className={s.botao}>
          Cadastrar Empresa 🡢
        </Link>

        <ul className={s.metricas}>
          <li className={s.metrica}>
            <strong>500+</strong>
            <span>Empresas Voluntárias</span>
          </li>

          <li className={s.metrica}>
            <strong>1.2K+</strong>
            <span>Projetos Realizados</span>
          </li>

          <li className={s.metrica}>
            <strong>50K+</strong>
            <span>Vidas Impactadas</span>
          </li>
        </ul>
      </div>

      <figure className={s.imagem}>
        <picture>
          {/* tablet */}
          <source
            srcSet={imageBannerDesktop}
            media="(min-width: 992px)"
          />

          {/* Mobile*/}
          <img
            src={imageBannerMobile}
            alt="Pessoas unidas representando projetos sociais"
            loading="lazy"
          />
        </picture>
      </figure>

    </section>
  );
};

export default PaginaInicial;