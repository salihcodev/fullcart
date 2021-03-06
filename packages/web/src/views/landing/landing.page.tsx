// pkgs:

// comps:
import PagesHero from '../../components/distributed/hero/hero.comp';

// utils:
import Container from '../../components/utils/container/container.util';
import './style.sass';

// component>>>
const LandingPage = () => {
  const heroHeading = `Welcome to fullcart, which you can find what ever you wish`;
  const heroDescription = `Here in fullcart the fun begins with every new day!`;

  return (
    <main className="page landing-page">
      {/* hero */}
      <Container xxl>
        <PagesHero heading={heroHeading} description={heroDescription}></PagesHero>
      </Container>
    </main>
  );
};

export default LandingPage;
