// pkgs:
import { VFC } from 'react';
import Carousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

// utils:
import './style.sass';

// comps:

// component>>>
const ProdsCategoryRow: VFC<any> = ({ title, prods }) => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    769: { items: 3 },
    992: { items: 4 },
    1024: { items: 5 },
    1200: { items: 6 },
  };

  return (
    <section className="prods-category-row">
      <h5 className="row-title">{title}</h5>
      <section className="row-prods">
        <Carousel
          mouseTracking
          // autoPlay
          // autoPlayControls={false}
          // autoPlayStrategy="none"
          // autoPlayInterval={5000}
          // animationDuration={500}
          animationType="slide"
          infinite
          touchTracking
          disableDotsControls
          disableButtonsControls={false}
          items={prods}
          responsive={responsive}
        />
      </section>

      <button className="slider-controller slide-prev">
        <BiLeftArrow />
      </button>
      <button className="slider-controller slide-next">
        <BiRightArrow />
      </button>
    </section>
  );
};

export default ProdsCategoryRow;
