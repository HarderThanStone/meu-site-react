import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {
  return (
    <>
      <Header />

      <section className="container">
        <div className="apresentacao">
          <p>
            Olá, sou <br />
            <span>Gabriel e Danillo</span> <br />
            Devs Full Stack
          </p>
         <Link to="/sobre" className="btn btn-red">
  Saiba mais sobre nós!
        </Link>
        </div>

        <figure>
          <img
            className="img-home"
            src="/undraw_space-exploration_dhu1.svg"
            alt="Imagem da home"
          />
        </figure>
      </section>

      <Footer />
    </>
  );
}

export default Home;
