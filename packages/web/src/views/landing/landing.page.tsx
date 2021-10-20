// pkgs:

// comps:
import PagesHero from '../../components/distributed/hero/hero.comp';

// utils:
import Container from '../../components/utils/container/container.util';
import './style.sass';

// component>>>
const LandingPage = () => {
  const heroHeading = `Welcome to backprods, which you can find what ever you wish`;
  const heroDescription = `Here in backprods the fun begins with every new day!`;

  return (
    <main className="page landing-page">
      {/* hero */}
      <Container>
        <PagesHero heading={heroHeading} description={heroDescription}></PagesHero>
      </Container>
    </main>
  );
};

export default LandingPage;
