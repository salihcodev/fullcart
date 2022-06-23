// pkgs:

// comps:
import SupplerInfoHero from '../../components/base/suppler-info-hero/suppler-info-hero.comp';

// utils:
import Container from '../../components/utils/container/container.util';
import './style.sass';

// component>>>
const CompanyProfile = () => {
  return (
    <main className="page company-profile-page">
      <SupplerInfoHero />
    </main>
  );
};

export default CompanyProfile;
