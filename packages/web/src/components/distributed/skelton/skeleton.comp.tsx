// pkgs:

// utils:
import './style.sass';

// comps:

// component>>>
const Skeleton: React.VFC<any> = ({ target }) => {
  return (
    <div className="skeleton">
      <div className="router"></div>
      {target === `prod-consume-card` ? (
        <div className="skn-prod-consume-card">
          <div className="img skn"></div>
          <div className="content">
            <div>
              <div className="txt1 skn"></div>
              <div className="txt2 skn"></div>
              <div className="txt3 skn"></div>
              <div className="txt4 skn"></div>
            </div>
          </div>
          <div className="controllers">
            <div>
              <span className="skn"></span>
              <span className="skn"></span>
            </div>
          </div>
        </div>
      ) : target === `prods-collection` ? (
        <div className="skn-prods-collection">
          <div className="head">
            <div className="title skn"></div>
            <div className="line-wrapper">
              <div className="line skn"></div>
            </div>
          </div>
          <div className="prods">
            <div className="prod">
              <div className="cover skn"></div>
              <div className="info">
                <div className="txt1 skn"></div>
                <div className="txt2 skn"></div>
                <div className="txt3 skn"></div>
              </div>
            </div>
            <div className="prod">
              <div className="cover skn"></div>
              <div className="info">
                <div className="txt1 skn"></div>
                <div className="txt2 skn"></div>
                <div className="txt3 skn"></div>
              </div>
            </div>
            <div className="prod">
              <div className="cover skn"></div>
              <div className="info">
                <div className="txt1 skn"></div>
                <div className="txt2 skn"></div>
                <div className="txt3 skn"></div>
              </div>
            </div>
            <div className="prod">
              <div className="cover skn"></div>
              <div className="info">
                <div className="txt1 skn"></div>
                <div className="txt2 skn"></div>
                <div className="txt3 skn"></div>
              </div>
            </div>
            <div className="prod">
              <div className="cover skn"></div>
              <div className="info">
                <div className="txt1 skn"></div>
                <div className="txt2 skn"></div>
                <div className="txt3 skn"></div>
              </div>
            </div>
          </div>
        </div>
      ) : target === `single-prod` ? (
        <div className="skn-single-prod">
          <div className="media">
            <div className="cover skn"></div>
            <div className="media-row">
              <span className="skn"></span>
              <span className="skn"></span>
              <span className="skn"></span>
              <span className="skn"></span>
            </div>
            <div className="add-info skn"></div>
          </div>
          <div className="overview">
            <div className="block1">
              <div className="txt1 skn"></div>
              <div className="txt2 skn"></div>
            </div>
            <div className="block2">
              <div className="box">
                <span className="skn"></span>
                <span className="skn"></span>
              </div>
              <div className="box">
                <span className="skn"></span>
                <span className="skn"></span>
              </div>
              <div className="box">
                <span className="skn"></span>
                <span className="skn"></span>
              </div>
            </div>
            <div className="block3">
              <div className="txt1 skn"></div>
              <div className="txt2 skn"></div>
              <div className="txt3 skn"></div>
            </div>
          </div>
        </div>
      ) : target === `single-prod-to-order` ? (
        <div className="skn-single-prod-to-order">
          <div className="block">
            <div className="head">
              <div>
                <span className="skn"></span>
                <span className="skn"></span>
              </div>
              <div>
                <span className="skn"></span>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="head">
              <div>
                <span className="skn"></span>
                <span className="skn"></span>
              </div>
              <div>
                <span className="skn"></span>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="head">
              <div>
                <span className="skn"></span>
                <span className="skn"></span>
              </div>
              <div>
                <span className="skn"></span>
              </div>
            </div>
          </div>
          <div className="block">
            <span className="skn"></span>
          </div>
        </div>
      ) : target === `single-prod-suppler-info` ? (
        <div className="skn-single-prod-suppler-info">
          <span className="skn txt1"></span>
          <span className="skn txt2"></span>
          <div className="block">
            <div className="box">
              <span className="skn txt1"></span>
              <span className="skn txt2"></span>
            </div>
            <div className="box">
              <span className="skn txt1"></span>
              <span className="skn txt2"></span>
            </div>
          </div>
        </div>
      ) : target === `checkout-prod-info` ? (
        <div className="skn-checkout-prod-info">
          <div className="block1">
            <div className="box">
              <span className="skn"></span>
              <span className="skn"></span>
            </div>
            <div className="box">
              <span className="skn"></span>
              <span className="skn"></span>
            </div>
            <div className="box">
              <span className="skn"></span>
              <span className="skn"></span>
            </div>
          </div>
          <div className="block2">
            <div>
              <div className="cover skn"></div>
            </div>
          </div>
          <div className="block3">
            <div className="skn"></div>
            <div className="skn"></div>
            <div className="skn"></div>
            <div className="skn"></div>
            <div className="skn"></div>
            <div className="skn"></div>
            <div className="skn"></div>
            <div className="skn"></div>
            <div className="skn"></div>
          </div>
        </div>
      ) : target === `prods-collection` ? (
        <div className="skn-checkout-cart-info">
          <div className="block1">
            <div className="box">
              <span className="skn"></span>
              <span className="skn"></span>
            </div>
            <div className="box">
              <span className="skn"></span>
              <span className="skn"></span>
            </div>
            <div className="box">
              <span className="skn"></span>
              <span className="skn"></span>
            </div>
          </div>
          <div className="block2">
            <span className="txt1 skn"></span>
          </div>
          <div className="block3">
            <span className="cover skn"></span>
            <span className="cover skn"></span>
            <span className="cover skn"></span>
            <span className="cover skn"></span>
            <span className="cover skn"></span>
          </div>
        </div>
      ) : target === `hot-list-results` ? (
        <div className="skn-hot-list-results">
          <div className="block">
            <div className="cover skn"></div>
            <div className="txt">
              <span className="skn"></span>
            </div>
          </div>
          <div className="block">
            <div className="cover skn"></div>
            <div className="txt">
              <span className="skn"></span>
              <span className="skn"></span>
            </div>
          </div>
          <div className="block">
            <div className="cover skn"></div>
            <div className="txt">
              <span className="skn"></span>
            </div>
          </div>
          <div className="block">
            <div className="cover skn"></div>
            <div className="txt">
              <span className="skn"></span>
              <span className="skn"></span>
            </div>
          </div>
        </div>
      ) : target === `hot-list-recent-results` ? (
        <div className="skn-hot-list-recent-results">
          <div className="block">
            <div className="cover skn"></div>
            <div className="txt">
              <span className="skn"></span>
            </div>
          </div>
          <div className="block">
            <div className="cover skn"></div>
            <div className="txt">
              <span className="skn"></span>
            </div>
          </div>
          <div className="block">
            <div className="cover skn"></div>
            <div className="txt">
              <span className="skn"></span>
            </div>
          </div>
        </div>
      ) : target === `pagination` ? (
        <div className="pagination">
          <span className="skn"></span>
          <span className="skn"></span>
          <span className="skn"></span>
          <span className="skn"></span>
          <span className="skn"></span>
          <span className="skn"></span>
          <span className="skn"></span>
        </div>
      ) : null}
    </div>
  );
};

export default Skeleton;
