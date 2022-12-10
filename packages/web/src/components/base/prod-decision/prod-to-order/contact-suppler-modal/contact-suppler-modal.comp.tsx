// pkgs:
import { useEffect, useState } from 'react';

// utils:
import './style.sass';
import { localStorageObjGetter } from '../../../../../common/utilities/localstorage-dealer/localstorage-getters.util';
import { ContactSupplerFormTypes } from '../../../../../common/@types/contact-suppler-form.types';

// comps:
import Modal from '../../../../distributed/modal/modal.comp';
import AppButton from '../../../../distributed/button/app-button.comp';
import ProdSmartCard from '../../../../distributed/prod-smart-card/prod-smart-card.comp';
import FormInput from '../../../../distributed/form-input/form-input.comp';
import { useAppSelector } from '../../../../../redux/hooks';
import { RootState } from '../../../../../redux/store';
import Alert from '../../../../distributed/alert/alert.comp';
import { useRef } from 'react';

// component>>>
const ContactSupplerModal: React.VFC<any> = ({ isModalOpen, setIsModalOpen }) => {
  // const quantityInputRef = useRef(HTMLInputElement);

  const { prod } = useAppSelector((state: RootState) => state.SingleProd);

  const user = localStorageObjGetter(`@authedUser`)?.user;

  const formSchema = {
    quantity: null,
    name: null,
    toMail: null,
    message: null,
  };

  // collect inputs data:
  const [formData, setFormData] = useState<ContactSupplerFormTypes>(formSchema);
  const handleContactFormSubmission = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // dispatch(mailSender(formData));
  };

  useEffect(() => {
    setFormData({ ...formData, quantity: prod?.count });
  }, [prod?.count]);

  useEffect(() => {
    setFormData({ ...formData, toMail: user?.email });
  }, [user?.email]);

  return (
    <Modal md state={isModalOpen} setState={setIsModalOpen}>
      <article className="contact-suppler-modal">
        <header>
          <h3 className="heading">Contact product's suppler</h3>
          <h6>Send message to the suppler, About this product</h6>
        </header>
        <section className="content">
          <div>
            {user ? (
              <section className="contact-suppler-form">
                <ProdSmartCard
                  name={prod?.name}
                  slug={prod?.slug}
                  priceInDollar={prod?.priceInDollar}
                  cover={prod?.cover}
                  _id={prod?._id}
                  category={prod?.categoryName}
                  subCategory={prod?.subcategoryName}
                />
                <form onSubmit={handleContactFormSubmission}>
                  <div className="inputs-group">
                    <div>
                      <FormInput
                        // ref={quantityInputRef}
                        type="number"
                        label="Quantity"
                        inputName="quantity"
                        placeholder="'7' - '5' - '3'"
                        value={formData.quantity}
                        collectInputData={(name: string, value: string) => setFormData({ ...formData, [name]: value })}
                      />
                    </div>
                    <div>
                      <FormInput
                        type="text"
                        label="Name"
                        inputName="name"
                        placeholder="Your name (1st, 2nd)"
                        collectInputData={(name: string, value: string) => setFormData({ ...formData, [name]: value })}
                      />
                    </div>
                    <div>
                      <FormInput
                        type="email"
                        label="Email"
                        inputName="toMail"
                        placeholder="john@example.com"
                        value={formData.toMail}
                        collectInputData={(name: string, value: string) => setFormData({ ...formData, [name]: value })}
                      />
                    </div>
                  </div>
                  <Alert
                    title=""
                    type=""
                    msg="Make sure to provide a specific description in your message."
                    list={['A self introduction', 'Special requests, if any']}
                  />
                  <FormInput
                    type="textarea"
                    label="Message"
                    inputName="message"
                    placeholder="Write down your message..."
                    collectInputData={(name: string, value: string) => setFormData({ ...formData, [name]: value })}
                  />
                  <div className="button-wrapper">
                    <AppButton
                      loadState={'idle'}
                      value="Submit"
                      type="submit"
                      wide
                      bkgDefault
                      size="lg"
                      border={{ size: 1 }}
                      noBorder={false}
                    />
                  </div>
                </form>
              </section>
            ) : (
              <section className="login-first">
                <p>It seems that you are not logged in</p>
                <p>You must login to processed this action.</p>
                <div className="button-wrapper">
                  <AppButton
                    value="Login"
                    type="button"
                    wide
                    size="lg"
                    bkgDefault
                    border={{ size: 1 }}
                    noBorder={false}
                    path="/auth/customer/login"
                  />
                </div>
              </section>
            )}
          </div>
        </section>
      </article>
    </Modal>
  );
};

export default ContactSupplerModal;
