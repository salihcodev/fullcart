// pkgs:
import { useState } from 'react';

// utils:
import './style.sass';
import { LoadStateTypes } from '../../../common/@types/load-state.types';
import { ProdTypes } from '../../../common/@types/prod.types';
import { Link } from 'react-router-dom';
import AppButton from '../../distributed/button/app-button.comp';
import { IoImagesOutline } from 'react-icons/io5';
import ProdDetailsWrapper from './prod-details-wrapper/prod-details-wrapper.comp';
import SupplerDetailsWrapper from './suppler-details-wrapper/suppler-details-wrapper.comp';
import ReviewsDetailsWrapper from './reviews-details-wrapper/reviews-details-wrapper.comp';
import Modal from '../../distributed/modal/modal.comp';

// comps:

// component>>>
const ProdMoreInfo: React.VFC<{
  prod: ProdTypes | null;
  loadState: LoadStateTypes;
}> = ({ prod, loadState }) => {
  const [currDetailsWrapper, setCurrDetailsWrapper] = useState<string>(`prodWrapper`);
  const [isAlbumModalOpen, setIsAlbumModalOpen] = useState<boolean>(false);

  const tabsData = [
    { value: 'Product Details', contentName: 'prodWrapper' },
    { value: 'Company Profile', contentName: 'supplerWrapper' },
    { value: 'Product Reviews', contentName: 'reviewsWrapper' },
  ];
  return (
    <article className="prod-more-info">
      <Modal state={isAlbumModalOpen} setState={setIsAlbumModalOpen}>
        <h1>hello</h1>
      </Modal>
      <header className="more-info-switcher">
        <section className="tabs-wrapper">
          {tabsData.map(({ value, contentName }): JSX.Element => {
            const tabStyle = { color: `#4b6483`, border: `3px solid #4b6483` };
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
            handleEvent={() => setIsAlbumModalOpen(!isAlbumModalOpen)}
          />
          <Link to="/reporting/product">Report this product</Link>
        </section>
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
