/* eslint-disable @next/next/no-img-element */

const slides = [
  { id: 1, titulo: "Biblioteca Digital de Pesquisas do IFMS", descricao: "Esta é uma biblioteca pata pesquisas feita para ser utilizada no IFMS, desenvolvi junto a um colega como forma de pesquisa, tanto para me formar quanto para auxiliar a comunidade do IF", link: "Link" },
  { id: 2, titulo: "2", descricao: "Desc", link: "Link" },
  { id: 3, titulo: "3", descricao: "Desc", link: "Link" },
];

const Carrossel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide col-lg-6 col-md-8 col-sm-12 align-self-center"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {slides.map(({ id, titulo, descricao, link }) => (
          <div className="carousel-item active" data-bs-interval="5000" key={id}>
            <img src="/gray.png" className="d-block carousel-image" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>{titulo}</h5>
              <p>{descricao}</p>
              <button className="btn btn-secondary btn-sm">GitHub</button>
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
