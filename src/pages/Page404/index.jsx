import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';


function Page404() {
  return (
    <>
      <Header />
      <Container>
        <h2>Erro 404 - Página não encontrada :(</h2>
        <p>O link que você tentou acessar não existe.</p>
      </Container>
      <Footer />
    </>
  );
}

export default Page404;
