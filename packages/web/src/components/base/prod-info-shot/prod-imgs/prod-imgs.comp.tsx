// pkgs:
import { useEffect, useState } from 'react';
import { BsShare } from 'react-icons/bs';
import ReactImageMagnify from 'react-image-magnify';
import { FiFacebook, FiHeart, FiTwitter } from 'react-icons/fi';
import { BsHeartFill } from 'react-icons/all';
import { TwitterShareButton, WhatsappShareButton, TelegramShareButton, FacebookShareButton } from 'react-share';

// utils:
import './style.sass';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { RootState } from '../../../../redux/store';
import { addNewWishlistItem } from '../../../../redux/slices/wishlist/logic/add.logic';
import { useHistory } from 'react-router-dom';
import { localStorageObjGetter } from '../../../../common/utilities/localstorage-dealer/localstorage-getters.util';

// comps:

// component>>>
const ProductImgs: React.VFC<{}> = () => {
  // use preConfigured hooks:
  const dispatch = useAppDispatch();
  const history = useHistory();

  const { prod } = useAppSelector((state: RootState) => state.SingleProd);
  const { stage: wishlistStage } = useAppSelector((state: RootState) => state.Wishlist);

  const [currentProdImg, setCurrentProdImg] = useState<string | undefined>(undefined);

  useEffect(() => {
    setCurrentProdImg(prod?.cover);
    return () => {
      setCurrentProdImg(prod?.cover);
    };
  }, [prod?.cover]);

  let currentViewedProdUrl: string = typeof window !== 'undefined' ? window.location.href : ``;

  const [wished, setWished] = useState<boolean>(false);

  const user = localStorageObjGetter(`@authedUser`)?.user;
  const handleAddToWishlist = () => {
    if (user) {
      dispatch(
        addNewWishlistItem({
          name: prod?.name,
          slug: prod?.slug,
          priceInDollar: prod?.priceInDollar,
          cover: prod?.cover,
          _id: prod?._id,
          categoryName: prod?.categoryName,
          subcategoryName: prod?.subcategoryName,
        })
      );
    } else {
      history.push('/auth/customer/login');
    }
  };
  return (
    <section className="prod-imgs">
      <div className="button-holder">
        <button onClick={handleAddToWishlist}>
          {wishlistStage === `busy` ? (
            <span className="spinner-for-wish loading-spinner"></span>
          ) : (
            <span className="icon">
              {wished ? (
                <span className="filled">
                  <BsHeartFill />
                </span>
              ) : (
                <span className="outlined">
                  <FiHeart />
                </span>
              )}
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
          enlargedImageContainerDimensions: { height: `120%`, width: `200%` },
          lensStyle: {
            background: `#ffffff5e`,
            border: `1px solid #4a67be`,
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
                background: `url(${img}) center/cover no-repeat`,
                boxShadow: `${img === currentProdImg ? `#4a67be88 0px 0px 1px 2px` : ''}`,
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
