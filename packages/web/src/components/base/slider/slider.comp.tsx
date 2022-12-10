// pkgs:
import AliceCarousel from 'react-alice-carousel';

// utils:
import { VFC } from 'react';
import './style.sass';
import 'react-alice-carousel/lib/alice-carousel.css';

// comps:
const items = [
  <div className="item" data-value="1">
    1
  </div>,
  <div className="item" data-value="2">
    2
  </div>,
  <div className="item" data-value="3">
    3
  </div>,
  <div className="item" data-value="4">
    4
  </div>,
  <div className="item" data-value="5">
    5
  </div>,
];

// component>>>
const MainSlider: VFC<any> = () => {
  return (
    <section className="slider">
      <AliceCarousel animationType="fadeout" animationDuration={800} disableButtonsControls infinite items={items} mouseTracking />
    </section>
  );
};

export default MainSlider;
