// pkgs:
import { useEffect, useState } from 'react';

// utils:
import './style.sass';
import { ProdTypes } from '../../../../common/@types/prod.types';
import ReactImageMagnify from 'react-image-magnify';
import { FiHeart } from 'react-icons/fi';
import AppButton from '../../../distributed/button/app-button.comp';

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
    </section>
  );
};

export default ProductImgs;
