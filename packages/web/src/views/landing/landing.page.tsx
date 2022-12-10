// pkgs:

// comps:
import Banner from '../../components/distributed/banner/banner.comp';
import PagesHero from '../../components/base/hero/hero.comp';
import LatestArrivals from '../../components/base/latest-arrivals/latest-arrivals';
import ShowCase from '../../components/base/show-case/show-case.comp';
import FeaturesWrapper from '../../components/base/features-wrapper/features-wrapper.comp';

// utils:
import Container from '../../components/utils/container/container.util';
import bannerLogo from '../../../public/assets/images/expo-merch/expo-merch.svg';
import bannerFlatLogo from '../../../public/assets/images/expo-merch/flat-expo-merch.svg';
import bannerFlatLogoBkg from '../../../public/assets/images/expo-merch/flat-expo-merch-bkg.svg';
import './style.sass';
import CategoryRow from '../../components/base/category-row/category-row.comp';
import consumerElectronics from '../../../public/assets/images/cats-row/consumer-electronics.svg';
import apparel from '../../../public/assets/images/cats-row/apparel.svg';
import vehicles from '../../../public/assets/images/cats-row/vehicles-parts-and-accessories.svg';
import machinary from '../../../public/assets/images/cats-row/machinary.svg';
import ReqForQutation from '../../components/base/req-for-qutation/req-for-qutation.comp';
import JusForYou from '../../components/base/just-for-you/just-for-you.comp';
import Services from '../../components/base/services/services.comp';
import SupplerSelect from '../../components/base/suppler-select/suppler-select.comp';

const bannerFeats = [
  { heading: '750,000 New products', description: 'Popular global releases.' },
  { heading: 'Exellent discounts', description: 'On shipping, Samples, & with PayPal.' },
  { heading: 'Verified Manfucturies', description: '4000 Trusted factories' },
];

// component>>>
const LandingPage = () => {
  return (
    <main className="page landing-page">
      <div className="bkg-holder">
        <Container xl>
          <Banner view="features" logo={bannerLogo} feats={bannerFeats} specialLinkTxt="Source Now" />
        </Container>
        <Container xxl>
          <PagesHero />
          <LatestArrivals />
          <ShowCase />
        </Container>
      </div>
      <Container xxl>
        <FeaturesWrapper />
        <CategoryRow forMarket={false} title="consumer electronics" rowImg={consumerElectronics} linkToSource="/" imgClr="#c1cfc1" />
        <CategoryRow forMarket={false} title="apparel" rowImg={apparel} linkToSource="/" imgClr="#a9c7c7" />
        <CategoryRow forMarket={false} title="vehicles parts and accessories" rowImg={vehicles} linkToSource="/" imgClr="#678ca8" />
        <CategoryRow forMarket={false} title="Machinary" rowImg={machinary} linkToSource="/" imgClr="#c1cfc1" />
        <ReqForQutation />
        <JusForYou />
        <Services />
        <SupplerSelect />
        <Banner view="declaration" logo={bannerFlatLogo} declaration="Featured Machinary Vehicles" specialLinkTxt="Source Now" bkg={bannerFlatLogoBkg} />
      </Container>
    </main>
  );
};

export default LandingPage;
