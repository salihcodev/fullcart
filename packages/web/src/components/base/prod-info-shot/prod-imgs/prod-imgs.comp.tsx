// pkgs:
import { useEffect, useState } from 'react';
import { BsShare } from 'react-icons/bs';
import ReactImageMagnify from 'react-image-magnify';
import { FiFacebook, FiHeart, FiTwitter } from 'react-icons/fi';
import { TwitterShareButton, WhatsappShareButton, TelegramShareButton, FacebookShareButton } from 'react-share';

// utils:
import './style.sass';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { useAppSelector } from '../../../../redux/hooks';
import { RootState } from '../../../../redux/store';

// comps:

// component>>>
const ProductImgs: React.VFC<{}> = () => {
  // use preConfigured hooks:
  const { stage, prod } = useAppSelector((state: RootState) => state.SingleProd);

  const [currentProdImg, setCurrentProdImg] = useState<string | undefined>(undefined);

  useEffect(() => {
    setCurrentProdImg(prod?.cover);
    return () => {
      setCurrentProdImg(prod?.cover);
    };
  }, [prod?.cover]);

  let currentViewedProdUrl: string = typeof window !== 'undefined' ? window.location.href : ``;

  return (
    <section className="prod-imgs">
      <div className="button-holder">
        <button>
          {stage === `busy` ? (
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
            background: `#ffffff5e`,
            border: `1px solid #bdaaec`,
            backdropFilter: `blur(3px)`,
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
                boxShadow: `${img === currentProdImg ? `0 0 1px 2px #5624d0a9` : ''}`,
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
              <WhatsappShareButton url={currentViewedProdUrl} title={prod?.name}>
                <span className="share-it-btn" title="what's up">
                  <FaWhatsapp />
                </span>
              </WhatsappShareButton>
            </li>
            <li>
              <TelegramShareButton url={currentViewedProdUrl} title={prod?.name}>
                <span className="share-it-btn" title="telegram">
                  <FaTelegramPlane />
                </span>
              </TelegramShareButton>
            </li>
            <li>
              <FacebookShareButton url={currentViewedProdUrl} quote={prod?.name}>
                <span className="share-it-btn" title="facebook">
                  <FiFacebook />
                </span>
              </FacebookShareButton>
            </li>
            <li>
              <TwitterShareButton url={currentViewedProdUrl} via="fullcart" title={prod?.name}>
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
