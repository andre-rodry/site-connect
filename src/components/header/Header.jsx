// Header.jsx
import { Link } from 'react-router-dom'
import { useState } from 'react'
import s from './header.module.scss'
import logo from '../../assets/icons/logo.png'

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false)

  const toggleMenu = () => {
    setMenuAberto(!menuAberto)
  }

  const fecharMenu = () => {
    setMenuAberto(false)
  }

  return (
    <header className={s.header}>
      <div className={s.container}>
        {/* Logo */}
        <Link to="/" className={s.logoLink}>
          <img src={logo} alt="Logo" className={s.logo} />
        </Link>

        {/* Navegação Desktop */}
        <nav className={s.nav}>
          <Link to="/doacao">Doação</Link>
          <Link to="/voluntariado">Voluntariado</Link>
          <Link to="/mentoria">Mentoria</Link>
          <Link to="/eventos">Eventos & Palestras</Link>
        </nav>

        {/* Avatar do Usuário */}
        <div className={s.userMenu}>
          <button 
            className={s.avatarButton} 
            onClick={toggleMenu}
            aria-label="Menu do usuário"
          >
            <img 
              src="https://i.ibb.co/qw2XTBs/andre.png" 
              alt="Foto de perfil de André Rodry" 
              className={s.avatar}
            />
          </button>

          {/* Dropdown Menu */}
          {menuAberto && (
            <>
              <div className={s.overlay} onClick={fecharMenu}></div>
              <div className={s.dropdown}>
                <div className={s.userName}>Andre Rodry</div>
                <div className={s.dropdownDivider}></div>
                <Link to="/usuario" className={s.dropdownItem} onClick={fecharMenu}>
                  Voluntariados
                </Link>
                <span className={`${s.dropdownItem} ${s.disabled}`}>
                  Configurações de conta
                </span>
                
                {/* Links de navegação apenas no mobile */}
                <div className={s.navMobile}>
                  <div className={s.dropdownDivider}></div>
                  <Link to="/doacao" className={s.dropdownItem} onClick={fecharMenu}>
                    Doação
                  </Link>
                  <Link to="/voluntariado" className={s.dropdownItem} onClick={fecharMenu}>
                    Voluntariado
                  </Link>
                  <Link to="/mentoria" className={s.dropdownItem} onClick={fecharMenu}>
                    Mentoria
                  </Link>
                  <Link to="/eventos" className={s.dropdownItem} onClick={fecharMenu}>
                    Eventos & Palestras
                  </Link>
                </div>

                <div className={s.dropdownDivider}></div>
                <button className={s.dropdownItem} onClick={fecharMenu}>
                  Sair
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header