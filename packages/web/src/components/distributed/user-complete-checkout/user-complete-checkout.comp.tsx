// pkgs:
import { Fragment, useEffect, useState } from 'react';

// utils:
import './style.sass';
import { IUserCompleteCheckout } from '../../../common/interfaces/user-complete-checkout.interface';
import { RiPaypalLine } from 'react-icons/ri';
import { VscPreview } from 'react-icons/vsc';
import { FiClipboard } from 'react-icons/fi';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import AppButton from '../button/app-button.comp';
import CheckoutStep from '../checkout-step/checkout-step.comp';
import { AiOutlineFileDone } from 'react-icons/ai';
import FormInput from '../form-input/form-input.comp';

// comps:

const UserCompleteCheckout: React.VFC<IUserCompleteCheckout> = ({ user }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const steps = [
    { stepIndex: 1, stepKey: 'shipping-information', stepIcon: <FiClipboard />, stepLabel: 'Shipping Information' },
    { stepIndex: 2, stepKey: 'payment-methods', stepIcon: <RiPaypalLine />, stepLabel: 'Payment Methods' },
    { stepIndex: 3, stepKey: 'order-review', stepIcon: <VscPreview />, stepLabel: 'Order Review' },
  ];

  const stepsBtns = Array.from(document.getElementsByClassName('step-btn'));

  useEffect(() => {
    stepsBtns.forEach((el: any, idx) => {
      if (currentStep > idx + 1) {
        el.style.cssText = `background: #673fce; color: #f5f6f7`;
      }
    });
  }, [currentStep, stepsBtns]);

  const formSchema = {
    email: null,
    phone: null,
    address: null,
    city: null,
    zip_code: null,
    street: null,
  };

  // collect inputs data:
  const [formData, setFormData] = useState<any>(formSchema);

  return (
    <section className="user-complete-checkout">
      <header className="order-steps-map">
        {steps.map(({ stepIndex, stepIcon, stepLabel }) => {
          let activeStep: object = {};
          if (stepIndex === currentStep) {
            activeStep = { borderColor: `#673fce`, color: `#f5f6f7`, boxShadow: `1px 1px 4px 3px #6c6c6c78` };
          }
          return (
            <div>
              <div className="step">
                <button
                  className="step-btn"
                  key={stepIndex}
                  type="button"
                  onClick={() => setCurrentStep(stepIndex)}
                  style={activeStep}
                >
                  <div className="step-icon">{stepIcon}</div>
                </button>
              </div>
              <small className="step-label">{stepLabel}</small>
            </div>
          );
        })}
      </header>

      <section className="order-steps-wrapper">
        {currentStep === steps[0].stepIndex ? (
          <CheckoutStep stageNum="stage 1 of 3" label={steps[0].stepLabel}>
            <section className="first-step">
              <form>
                <div className="group-inputs">
                  <FormInput
                    type="email"
                    label="Contact"
                    inputName="email"
                    placeholder="john@example.com"
                    collectInputData={(name: string, value: string) => setFormData({ ...formData, [name]: value })}
                  />
                  <FormInput
                    type="phone"
                    label="Phone"
                    inputName="phone"
                    placeholder="+20 0123456789"
                    collectInputData={(name: string, value: string) => setFormData({ ...formData, [name]: value })}
                  />
                </div>
                <div className="group-inputs">
                  <FormInput
                    type="text"
                    label="Address"
                    inputName="address"
                    placeholder="EX: Egypt, Cairo, Dokkii"
                    collectInputData={(name: string, value: string) => setFormData({ ...formData, [name]: value })}
                  />
                  <FormInput
                    type="text"
                    label="City"
                    inputName="city"
                    placeholder="EX: Cairo"
                    collectInputData={(name: string, value: string) => setFormData({ ...formData, [name]: value })}
                  />
                  <FormInput
                    type="text"
                    label="Zip Code"
                    inputName="zip_code"
                    placeholder="EX: 98540 the postal code :)"
                    collectInputData={(name: string, value: string) => setFormData({ ...formData, [name]: value })}
                  />
                </div>
                <FormInput
                  type="text"
                  label="Street"
                  inputName="street"
                  placeholder="EX: Elmerghani st. 5th block, department 14 "
                  collectInputData={(name: string, value: string) => setFormData({ ...formData, [name]: value })}
                />
              </form>
            </section>
          </CheckoutStep>
        ) : currentStep === steps[1].stepIndex ? (
          <CheckoutStep stageNum="stage 2 of 3" label={steps[1].stepLabel}>
            <section className="second-step">
              <div className="physical-methods">
                <h6>Physical Methods</h6>
                <div className="pay-cards">
                  <div>
                    <input type="radio" name="pay-card" id="visa" />
                    <label htmlFor="visa"></label>
                  </div>
                  <div>
                    <input type="radio" name="pay-card" id="mastercard" />
                    <label htmlFor="mastercard"></label>
                  </div>
                  <div>
                    <input type="radio" name="pay-card" id="on-deliver" />
                    <label htmlFor="on-deliver"></label>
                  </div>
                </div>
              </div>
              <div className="virtual-methods">
                <h6>Virtual Methods</h6>
                <div className="pay-cards">
                  <div>
                    <input type="radio" name="pay-card" id="paypal" />
                    <label htmlFor="paypal"></label>
                  </div>
                  <div>
                    <input type="radio" name="pay-card" id="fawry" />
                    <label htmlFor="fawry"></label>
                  </div>
                </div>
              </div>
            </section>
          </CheckoutStep>
        ) : (
          <CheckoutStep stageNum="stage 3 of 3" label={steps[2].stepLabel}>
            <section className="third-step">3</section>
          </CheckoutStep>
        )}
      </section>
      <footer className="viewers">
        {currentStep === 3 ? (
          <AppButton
            value="Confirm"
            type="button"
            wide={false}
            size="md"
            bkgDefault
            border={{ size: 1 }}
            noBorder={false}
            icon={<AiOutlineFileDone />}
            isIconBefore
            handleEvent={() => {}}
          />
        ) : (
          <Fragment>
            <AppButton
              value="Back"
              type="button"
              wide={false}
              size="md"
              border={{ size: 1 }}
              noBorder={false}
              icon={<MdOutlineKeyboardArrowLeft />}
              isIconBefore
              handleEvent={() => (currentStep > 1 ? setCurrentStep(currentStep - 1) : null)}
              disabled={currentStep === 1}
            />
            <AppButton
              value="Next Step"
              type="button"
              wide={false}
              size="md"
              bkgDefault
              border={{ size: 1 }}
              noBorder={false}
              icon={<MdOutlineKeyboardArrowRight />}
              handleEvent={() => (currentStep < 3 ? setCurrentStep(currentStep + 1) : null)}
              disabled={currentStep === 3}
            />
          </Fragment>
        )}
      </footer>
    </section>
  );
};

export default UserCompleteCheckout;
