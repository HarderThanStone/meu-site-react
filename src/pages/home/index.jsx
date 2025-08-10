import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import imgHome from '../../assets/undraw_in-the-office_e7pg.svg';
import LikeCounter from '../../components/LikeCounter'; // ⬅️ importar o contador

function Home() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.home}>
          <div className={styles.apresentacao}>
            <p>
              Olá, sou <br />
              <span>Gabriel e Danillo</span> <br />
              Devs Full Stack
            </p>
            <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais sobre nós!
            </Link>
          </div>
          <figure>
            <img className={styles.img_home} src={imgHome} alt="Imagem da home" />
          </figure>
        </section>

        {/* Contador de likes aqui */}
        <LikeCounter />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
