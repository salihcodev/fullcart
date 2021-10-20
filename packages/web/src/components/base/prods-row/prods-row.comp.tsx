// pkgs:
import { Fragment, VFC } from 'react';
import Carousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';

// utils:
import './style.sass';
import { IProdsCategoryRow } from '../../../common/interfaces/prods-row.interface';

// comps:

// component>>>
const ProdsCategoryRow: VFC<IProdsCategoryRow> = ({
  title,
  catLink,
  prods,
  loadState,
}) => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    769: { items: 3 },
    992: { items: 4 },
    1024: { items: 5 },
    1200: { items: 6 },
    1600: { items: 8 },
  };

  return (
    <Fragment>
      {loadState === `busy` ? (
        <section className="skeleton">
          <h1>Loading...</h1>
        </section>
      ) : (
        <section className="prods-category-row">
          <h5 className="row-title">
            <Link to={catLink}>{title}</Link>
          </h5>
          <section className="row-prods">
            <Carousel
              mouseTracking
              autoPlayControls={false}
              animationDuration={300}
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
      )}
    </Fragment>
  );
};

export default ProdsCategoryRow;
