// pkgs:

// utils:
import FooterLinksColumn from './footer-links-column/footer-links-column.comp';
import './style.sass';

// comps:

// component>>>
const FooterLinks: React.VFC<any> = ({ links }) => {
  return (
    <section className="footer-links">
      <section className="links-wrapper">
        <FooterLinksColumn columnTitle="customer services" column={links.customerServices} />
        <FooterLinksColumn columnTitle="about us" column={links.aboutUs} />
        <FooterLinksColumn columnTitle="source on fullcart" column={links.sourceOnFullcart} />
        <FooterLinksColumn columnTitle="sell on fullcart" column={links.sellOnFullcart} />
        <FooterLinksColumn columnTitle="trade services" column={links.tradeServices} />
      </section>
    </section>
  );
};

export default FooterLinks;
