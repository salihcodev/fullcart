// pkgs:

// utils:
import { VFC } from 'react';
import Case from './case/case.comp';
import './style.sass';
import fullcartTemp from '../../../../public/assets/images/fullcart-temp-img.svg';
import one from '../../../../public/assets/images/show-case/1.svg';
import two from '../../../../public/assets/images/show-case/2.svg';
import three from '../../../../public/assets/images/show-case/3.svg';
import four from '../../../../public/assets/images/show-case/4.svg';
import five from '../../../../public/assets/images/show-case/5.svg';
import six from '../../../../public/assets/images/show-case/6.svg';

// comps:

// component>>>
const ShowCase: VFC<any> = () => {
  return (
    <section className="show-case">
      <Case
        title="New Arrivals"
        icon={one}
        prods={[
          { cover: fullcartTemp, price: `$2`, subTitle: 'sub-title' },
          { cover: fullcartTemp, price: `$5`, subTitle: 'sub-title' },
          { cover: fullcartTemp, price: `$1`, subTitle: 'sub-title' },
        ]}
      />
      <Case
        title="Top-ranked Products"
        icon={two}
        prods={[
          { cover: fullcartTemp, price: `$2`, subTitle: 'sub-title' },
          { cover: fullcartTemp, price: `$5`, subTitle: 'sub-title' },
          { cover: fullcartTemp, price: `$1`, subTitle: 'sub-title' },
        ]}
      />
      <Case
        title="Personal Protective Equipment"
        icon={three}
        prods={[
          { cover: fullcartTemp, price: `$2`, subTitle: 'sub-title' },
          { cover: fullcartTemp, price: `$5`, subTitle: 'sub-title' },
          { cover: fullcartTemp, price: `$1`, subTitle: 'sub-title' },
        ]}
      />
      <Case
        title="Dropshipping"
        icon={four}
        prods={[
          { cover: fullcartTemp, price: `$2`, subTitle: 'sub-title' },
          { cover: fullcartTemp, price: `$5`, subTitle: 'sub-title' },
          { cover: fullcartTemp, price: `$1`, subTitle: 'sub-title' },
        ]}
      />
      <Case
        title="Glopal Orignal Sources"
        icon={five}
        prods={[
          { cover: fullcartTemp, price: `$2`, subTitle: 'sub-title' },
          { cover: fullcartTemp, price: `$5`, subTitle: 'sub-title' },
          { cover: fullcartTemp, price: `$1`, subTitle: 'sub-title' },
        ]}
      />
      <Case
        title="True View"
        icon={six}
        prods={[
          { cover: fullcartTemp, price: `$2`, subTitle: 'sub-title' },
          { cover: fullcartTemp, price: `$5`, subTitle: 'sub-title' },
          { cover: fullcartTemp, price: `$1`, subTitle: 'sub-title' },
        ]}
      />
    </section>
  );
};

export default ShowCase;
