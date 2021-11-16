// pkgs:

// utils:
import './style.sass';

// comps:
import Modal from '../../../../distributed/modal/modal.comp';

// component>>>
const ContactSupplerModal: React.VFC<any> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal md state={isModalOpen} setState={setIsModalOpen}>
      <article className="contact-suppler-modal">
        <header>
          <h3 className="heading">Contact product's suppler</h3>
          <h6>Send message to the suppler, About this product</h6>
        </header>
        <section className="content">DATA</section>
      </article>
    </Modal>
  );
};

export default ContactSupplerModal;
