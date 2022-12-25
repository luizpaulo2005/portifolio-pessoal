/* eslint-disable react/jsx-no-target-blank */
const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Meu Portifólio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="https://github.com/luizpaulo2005" target="_blank">
              GitHub
              </a>
              <a className="nav-link" href="https://www.linkedin.com/in/luiz-paulo-rodrigues-da-silva-santos-bab0b4247/" target="_blank">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Header;