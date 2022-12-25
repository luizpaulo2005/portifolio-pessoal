/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */

const slides = [
  {
    id: 1,
    titulo: "Biblioteca Digital de Pesquisas do IFMS",
    descricao:
      "Esta é uma biblioteca pata pesquisas feita para ser utilizada no IFMS, desenvolvi junto a um colega como forma de pesquisa, tanto para me formar quanto para auxiliar a comunidade do IF",
    git: "https://github.com/luizpaulo2005/BibliotecaDigital-IFMS",
    deploy: "https://biblioteca-digital-ifms.vercel.app",
  },
  {
    id: 2,
    titulo: "Genshin Wiki",
    descricao:
      "Esse foi um desafio do FrontEnd Mentor solicitado por um professor",
    git: "https://github.com/luizpaulo2005/projeto-hospedagem-gsci",
    deploy: "https://projeto-hospedagem-gsci.vercel.app",
  },
  {
    id: 3,
    titulo: "Urubu Celulares - PWA",
    descricao: "Modelo de uma loja de celulares feita em NextJS, em PWA, ",
    git: "https://github.com/luizpaulo2005/pwa-urubu-celulares",
    deploy: "https://frontend-projetofinal-ptas3.vercel.app",
  },
];

const Carrossel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide col-lg-6 col-md-8 col-sm-12 align-self-center"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {slides.map(({ id, titulo, descricao, git, deploy }) => (
          <div
            className="carousel-item active"
            data-bs-interval="5000"
            key={id}
          >
            <img src="/gray.png" className="d-block carousel-image" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>{titulo}</h5>
              <p>{descricao}</p>
              <div className="btn-group" role="group">
                <a
                  href={git}
                  className="btn btn-secondary btn-sm"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href={deploy}
                  className="btn btn-primary btn-sm"
                  target="_blank"
                >
                  Deploy
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrossel;
