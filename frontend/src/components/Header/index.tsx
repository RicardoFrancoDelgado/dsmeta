import logo from '../../assets/img/logo.svg'
import './style.css'

function Header() {
  return (
    <>
      <header>
        <div className="dsmeta-logo-container">
          <img src={logo} alt="DSMeta" />
          <h1>DSMeta</h1>
          <p>
            Desenvolvido por
            <a href="https://www.instagram.com/devsuperior.ig">
              @devsuperior.ig
            </a>
            <span> & </span>
            <a href="https://www.instagram.com/riicardiinn/">@riicardiinn</a>
            <span> </span>
            na Semana React Spring Devsuperior
          </p>
        </div>
      </header>
    </>
  )
}

export default Header
