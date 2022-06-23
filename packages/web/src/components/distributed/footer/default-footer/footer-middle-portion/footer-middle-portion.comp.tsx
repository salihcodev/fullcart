// pkgs:

// utils:
import './style.sass';
import smallLogo from '../../../../../../public/assets/images/sm-logo.svg';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { GrAndroid, FaApple, FiFacebook, FiTwitter } from 'react-icons/all';
import { Link } from 'react-router-dom';

// comps:

// component>>>
const FooterMiddlePortion: React.VFC<any> = () => {
  return (
    <section className="footer-middle-portion">
      <div className="download">
        <div className="wing">
          <span>Download: </span>
        </div>
        <div className="wing">
          <div className="app-store">
            <Link to="">
              <span className="icon">
                <FaApple />
              </span>
              <span className="txt">
                <span>Available on </span>
                <b>App store</b>
              </span>
            </Link>
          </div>
          <div className="google-play">
            <Link to="">
              <span className="icon">
                <GrAndroid />
              </span>
              <span className="txt">
                <span>Available on </span>
                <b>Google play</b>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="suppler-app">
        <div className="wing">
          <p>Fullcart suppler app</p>
        </div>
        <div className="wing">
          <Link to="">
            <img src={smallLogo} alt="" />
          </Link>
        </div>
      </div>
      <div className="social-follow">
        <div className="wing">
          <p>Follow us</p>
        </div>
        <div className="wing">
          <Link to="">
            <FaWhatsapp />
          </Link>
          <Link to="">
            <FaTelegramPlane />
          </Link>
          <Link to="">
            <FiFacebook />
          </Link>
          <Link to="">
            <FiTwitter />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FooterMiddlePortion;
