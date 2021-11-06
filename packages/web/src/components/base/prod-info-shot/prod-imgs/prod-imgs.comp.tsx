// pkgs:
import { useEffect, useState } from 'react';
import { BsShare } from 'react-icons/bs';
import ReactImageMagnify from 'react-image-magnify';
import { FiFacebook, FiHeart, FiTwitter } from 'react-icons/fi';
import {
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  FacebookShareButton,
} from 'react-share';

// utils:
import './style.sass';
import { ProdTypes } from '../../../../common/@types/prod.types';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

// comps:

// component>>>
const ProductImgs: React.VFC<{ prod: ProdTypes | null }> = ({ prod }) => {
  const [currentProdImg, setCurrentProdImg] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    setCurrentProdImg(prod?.cover);
    return () => {
      setCurrentProdImg(prod?.cover);
    };
  }, [prod?.cover]);

  const loadState: any = ``;
  let currentViewedProdUrl: string =
    typeof window !== 'undefined' ? window.location.href : ``;

  return (
    <section className="prod-imgs">
      <div className="button-holder">
        <button>
          {loadState === `busy` ? (
            <span className="spinner-for-wish loading-spinner"></span>
          ) : (
            <span className="icon">
              <FiHeart />
            </span>
          )}
        </button>
      </div>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: prod?.name,
            isFluidWidth: true,
            src: currentProdImg || ``,
          },
          largeImage: {
            src: currentProdImg || ``,
            width: 1200,
            height: 1200,
          },
          enlargedImageContainerDimensions: { height: `100%`, width: `180%` },
          lensStyle: {
            background: '#faeddb55',
            border: '1px solid #e0b989',
          },
          shouldUsePositiveSpaceLens: true,
        }}
      />
      <section className="prod-imgs-pickers">
        {prod?.images?.map(
          (img): JSX.Element => (
            <button
              className="img-picker"
              onClick={() => setCurrentProdImg(img)}
              style={{
                background: `url(${img}) center/contain no-repeat`,
              }}
            ></button>
          )
        )}
      </section>
      <section className="sharing-current-viewed-prod">
        <div className="heading">
          <span className="icon">
            <BsShare />
          </span>
          <span className="value">Share</span>
        </div>
        <div className="share">
          <ul>
            <li>
              <WhatsappShareButton
                url={currentViewedProdUrl}
                title={prod?.name}
              >
                <span className="share-it-btn" title="what's up">
                  <FaWhatsapp />
                </span>
              </WhatsappShareButton>
            </li>
            <li>
              <TelegramShareButton
                url={currentViewedProdUrl}
                title={prod?.name}
              >
                <span className="share-it-btn" title="telegram">
                  <FaTelegramPlane />
                </span>
              </TelegramShareButton>
            </li>
            <li>
              <FacebookShareButton
                url={currentViewedProdUrl}
                quote={prod?.name}
              >
                <span className="share-it-btn" title="facebook">
                  <FiFacebook />
                </span>
              </FacebookShareButton>
            </li>
            <li>
              <TwitterShareButton
                url={currentViewedProdUrl}
                via="fullcart"
                title={prod?.name}
              >
                <span className="share-it-btn" title="twitter">
                  <FiTwitter />
                </span>
              </TwitterShareButton>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default ProductImgs;
