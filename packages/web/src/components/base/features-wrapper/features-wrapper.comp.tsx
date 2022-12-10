// pkgs:

// utils:
import { VFC } from 'react';
import Feature from './feature/feature.comp';
import './style.sass';
import fullcartTemp from '../../../../public/assets/images/fullcart-temp-img.svg';
import readyToShip from '../../../../public/assets/images/features/ready-to-ship.svg';
import customizedProducts from '../../../../public/assets/images/features/customized-products.svg';

// comps:

// component>>>
const FeaturesWrapper: VFC<any> = () => {
  return (
    <section className="features-wrapper">
      <Feature
        title="Customized products"
        description="Parterner with on of 60,000 manufactures with design & production capabilities and no-time delivery."
        sign={customizedProducts}
        examples={{
          subTitle: 'subTitle',
          imgs: [fullcartTemp, fullcartTemp, fullcartTemp],
          subTitle2: 'subTitle',
          imgs2: [fullcartTemp, fullcartTemp, fullcartTemp],
        }}
      />
      <Feature
        title="Ready-to-ship Products"
        description="Source from 15 million products that are ready to ship leave the facility within 15 days."
        sign={readyToShip}
        examples={{
          subTitle: 'subTitle',
          imgs: [fullcartTemp, fullcartTemp, fullcartTemp],
          subTitle2: 'subTitle',
          imgs2: [fullcartTemp, fullcartTemp, fullcartTemp],
        }}
      />
    </section>
  );
};

export default FeaturesWrapper;
