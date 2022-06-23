// pkgs:
import { useState } from 'react';

// utils:
import './style.sass';
import { Link } from 'react-router-dom';

// comps:
import AppButton from '../../distributed/button/app-button.comp';
import { IoImagesOutline } from 'react-icons/io5';
import ProdDetailsWrapper from './prod-details-wrapper/prod-details-wrapper.comp';
import SupplerDetailsWrapper from './suppler-details-wrapper/suppler-details-wrapper.comp';
import ReviewsDetailsWrapper from './reviews-details-wrapper/reviews-details-wrapper.comp';
import AlbumsModal from './albums-modal/albums-modal.comp';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';

// component>>>
const ProdMoreInfo: React.VFC<{}> = () => {
  // use preConfigured hooks:
  const { stage, prod } = useAppSelector((state: RootState) => state.SingleProd);

  const [currDetailsWrapper, setCurrDetailsWrapper] = useState<string>(`prodWrapper`);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const moreInfoTabs = [
    { value: 'Product Details', contentName: 'prodWrapper' },
    { value: 'Company Profile', contentName: 'supplerWrapper' },
    { value: 'Product Reviews', contentName: 'reviewsWrapper' },
  ];

  return (
    <article className="prod-more-info">
      <header className="more-info-switcher">
        <section className="tabs-wrapper">
          {moreInfoTabs.map(({ value, contentName }): JSX.Element => {
            const tabStyle = { color: `#111`, border: `3px solid #111` };
            const activeTabStyle = currDetailsWrapper === contentName ? tabStyle : {};
            return (
              <button style={activeTabStyle} onClick={() => setCurrDetailsWrapper(contentName)}>
                {value}
              </button>
            );
          })}
        </section>
        <section className="show-albums-and-report-wrapper">
          <AppButton
            value="View Albums"
            type="button"
            wide={false}
            size="sm"
            border={{ size: 1 }}
            noBorder
            icon={<IoImagesOutline />}
            isIconBefore
            handleEvent={() => setIsModalOpen(!isModalOpen)}
          />
          <Link to="/reporting/product">Report this product</Link>
        </section>
        <AlbumsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </header>
      <article className="details-wrapper">
        {currDetailsWrapper === `prodWrapper` ? (
          <ProdDetailsWrapper prod={prod} />
        ) : currDetailsWrapper === `supplerWrapper` ? (
          <SupplerDetailsWrapper />
        ) : (
          <ReviewsDetailsWrapper />
        )}
      </article>
    </article>
  );
};

export default ProdMoreInfo;
