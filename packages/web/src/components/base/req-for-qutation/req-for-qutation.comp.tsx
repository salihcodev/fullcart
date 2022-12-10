// pkgs:

// utils:
import { useState, VFC } from 'react';
import RowTitle from '../row-title/row-title.comp';
import './style.sass';
import RFQ from '../../../../public/assets/images/qutation/req-for-qutation.svg';
import RFQCover from '../../../../public/assets/images/qutation/req-for-qutation-cover.svg';
import { Link } from 'react-router-dom';
import FormInput from '../../distributed/form-input/form-input.comp';
import AppButton from '../../distributed/button/app-button.comp';

// comps:

// component>>>
const ReqForQutation: VFC<any> = () => {
  const formSchema = {
    lookingForWhat: null,
    quantity: null,
    pieces: null,
  };

  // collect inputs data:
  const [formData, setFormData] = useState<any>(formSchema);

  return (
    <section className="req-for-qutation">
      <RowTitle whiteBkg={false} title="request for qutation" subTitle="customization service" icon={RFQ} />

      <div className="section-wrapper">
        <section className="info-card" style={{ background: `url(${RFQCover}) center/cover` }}>
          <h2 className="heading">Global Sourcing Market Place</h2>
          <div>
            <div className="stats">
              <div className="stat">
                <span className="title">2591000+</span>
                <span className="subtitle">RFQ</span>
              </div>
              <div className="stat">
                <span className="title">h23</span>
                <span className="subtitle">Avg. Qutation duration</span>
              </div>
              <div className="stat">
                <span className="title">173000+</span>
                <span className="subtitle">Active Supplers</span>
              </div>
              <div className="stat">
                <span className="title">6052</span>
                <span className="subtitle">Industries</span>
              </div>
            </div>

            <Link to="/">Learn More</Link>
          </div>
        </section>
        <section className="qutation-form">
          <h2 className="heading">One Request, Multiple Quotes</h2>
          <section className="form-wrapper">
            <p className="description">It's available now</p>
            <form>
              <FormInput
                type="text"
                inputName="lookingForWhat"
                placeholder="What you are looking for"
                collectInputData={(name: string, value: string) => setFormData({ ...formData, [name]: value })}
              />
              <div className="group-inputs">
                <FormInput
                  type="text"
                  inputName="quantity"
                  placeholder="Quantity"
                  collectInputData={(name: string, value: string) =>
                    setFormData({
                      ...formData,
                      [name]: value,
                    })
                  }
                />
                <FormInput
                  type="text"
                  inputName="pieces"
                  placeholder="Pieces"
                  collectInputData={(name: string, value: string) =>
                    setFormData({
                      ...formData,
                      [name]: value,
                    })
                  }
                />
              </div>
              <AppButton bkgSecondary value="Request for qutation now" type="button" wide={false} size="lg" border={{ size: 1 }} noBorder />
            </form>
          </section>
        </section>
      </div>
    </section>
  );
};

export default ReqForQutation;
