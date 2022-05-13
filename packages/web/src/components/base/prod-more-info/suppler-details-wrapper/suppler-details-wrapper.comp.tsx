// pkgs:

// utils:
import { IoImagesOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../redux/hooks';
import { RootState } from '../../../../redux/store';
import './style.sass';

// comps:

// component>>>
const SupplerDetailsWrapper: React.VFC<{}> = () => {
  const { stage, userData } = useAppSelector((state: RootState) => state.UserActions);

  return (
    <section className="suppler-details-wrapper">
      <h4 className="heading">Company overview</h4>
      <h5 className="heading">
        <span className="txt">Company Albums</span>
        <span className="icon">
          <IoImagesOutline />
        </span>
      </h5>
      <section className="company-albums">
        {userData?.images?.map((img) => (
          <div className="album-img" key={img} style={{ background: `url(${img}) center/cover` }}></div>
        ))}
      </section>
      <section className="company-basic-info">
        <p>
          <span className="title">Company Name</span>
          <span className="value">{userData?.companyName}</span>
        </p>
        <p>
          <span className="title">Region / Country</span>
          <span className="value">
            {userData?.region} /{userData?.country}
          </span>
        </p>
        <p>
          <span className="title">Specialization</span>
          <span className="value">{userData?.specialization}</span>
        </p>
        <p>
          <span className="title">Total Employees</span>
          <span className="value">{userData?.totalEmployees}</span>
        </p>
        <p>
          <span className="title">Business Type</span>
          <span className="value">{userData?.businessType}</span>
        </p>
        <p>
          <span className="title">Year Established</span>
          <span className="value">{userData?.yearEstablished}</span>
        </p>
        <p>
          <span className="title">Certifications</span>
          <span className="value">{userData?.certifications}</span>
        </p>
        <p>
          <span className="title">Product Certifications</span>
          <span className="value">{userData?.productCertifications}</span>
        </p>
        <p>
          <span className="title">Patents</span>
          <span className="value">{userData?.patents}</span>
        </p>
        <p>
          <span className="title">Trademarks</span>
          <span className="value">{userData?.trademarks}</span>
        </p>
      </section>
      <footer className="section-footer">
        <Link to={`/suppler/${userData?._id}`}>View this supplier’s website</Link>
      </footer>
    </section>
  );
};

export default SupplerDetailsWrapper;
