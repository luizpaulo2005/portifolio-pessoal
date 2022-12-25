import Head from "next/head";
import Image from "next/image";
import Animation from "../components/animation";
import Carrossel from "../components/carrossel";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="container-fluid g-0">
      <Head>
        <title>Portifólio - Luiz Paulo</title>
        <meta name="description" content="Portifolio pessoal criado com NextJS" />
      </Head>
      <Header />

      <div className="container mt-2 d-flex flex-column">
        <Animation/>
        <div className="align-self-center">
          Olá, me chamo Luiz Paulo, e vim aqui mostrar um pouco dos meus
          trabalhos
        </div>
        <div className="align-self-center">
          <legend>Meus Projetos</legend>
        </div>
          <Carrossel />
      </div>
    </div>
  );
}
