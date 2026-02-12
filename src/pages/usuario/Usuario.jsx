import { MapPin, Mail, Calendar } from 'lucide-react';
import s from './usuario.module.scss';

const Usuario = () => {
  return (
    <section className={s.userSection}>
      
      <figure className={s.profilePicture}>
        <img 
          src="https://i.ibb.co/qw2XTBs/andre.png" 
          alt="Foto de perfil de André Rodry"
        />
      </figure>

      <div className={s.userInfo}>
        <h1>André Rodry</h1>
        <em>Voluntário Ativo</em>
        
        <p className={s.userBio}>
        Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar 
        vidas e estou sempre em busca de novas oportunidades para ajudar.
        </p>

        <address className={s.contactInfo}>
          <div className={s.contactItem}>
            <MapPin className={s.icon} />
            <span>Salvador, BA</span>
          </div>

          <div className={s.contactItem}>
            <Mail className={s.icon} />
            <a href="#">andrerodry@email.com</a>
          </div>

          <div className={s.contactItem}>
            <Calendar className={s.icon} />
            <time dateTime="2022-01">Membro desde Janeiro 2022</time>
          </div>
        </address>

        <ul className={s.userInterests}>
          <li>Educação</li> 
          <li>Meio Ambiente</li> 
          <li>Assistência Social</li> 
          <li>Design</li>
        </ul>
      </div>
      
    </section>
  );
};

export default Usuario;
