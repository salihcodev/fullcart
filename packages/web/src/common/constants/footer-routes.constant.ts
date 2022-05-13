const defaultFooterRoutes = {
  customerServices: [
    { value: `help center`, path: `/customer-services/help-center` },
    { value: `report abuse`, path: `/customer-services/report-abuse` },
    { value: `submit a dispute `, path: `/customer-services/submit-a-dispute` },
    { value: `polices & rules`, path: `/customer-services/polices-and-rules` },
    { value: `get paid for your feedback`, path: `/customer-services/get-paid-for-your-feedback` },
  ],
  aboutUs: [
    { value: `about fullcart.com`, path: `/about-us/about-fullcart.com` },
    { value: `about fullcart group.com`, path: `/about-us/about-fullcart-group.com` },
    { value: `sitemap`, path: `/about-us/sitemap` },
    { value: `fullcart.com blog`, path: `/about-us/fullcart.com-blog` },
  ],
  sourceOnFullcart: [
    { value: `resources`, path: `/sources-on-fullcart/resources` },
    { value: `all categories`, path: `/sources-on-fullcart/all-categories` },
    { value: `request for quotation`, path: `/sources-on-fullcart/request-for-quotation` },
    { value: `ready to ship`, path: `/sources-on-fullcart/ready-to-ship` },
    { value: `buyer partners`, path: `/sources-on-fullcart/buyer-partners` },
    { value: `fullcart.com select`, path: `/sources-on-fullcart/fullcart.com-select` },
  ],
  sellOnFullcart: [
    { value: `suppler membership`, path: `/sell-on-fullcart/suppler-membership` },
    { value: `learning center`, path: `/sell-on-fullcart/learning-center` },
    { value: `partner program`, path: `/sell-on-fullcart/partner-program` },
  ],
  tradeServices: [
    { value: `trade assurance`, path: `/trade-services/trade-assurance` },
    { value: `business identity`, path: `/trade-services/business-identity` },
    { value: `logistics services`, path: `/trade-services/logistics-services` },
    { value: `production monitoring & inspection services`, path: `/trade-services/production-monitoring-and-inspection-services` },
    { value: `letter of credit`, path: `/trade-services/letter-of-credit` },
  ],
};

export const noneExpandedFooterRoutes = {
  row1: [
    { value: `About Us`, path: `/about` },
    { value: ` FAQ`, path: `/fqa` },
    { value: ` Help`, path: `/help` },
    { value: `Site Map`, path: `/site-map` },
    { value: `Contact Us`, path: `/contact` },
    { value: ` Mobile Site`, path: `/mobile-site` },
  ],
  row2: [
    { value: `Terms & Conditions`, path: `/terms-and-conditions` },
    { value: ` Declaration`, path: `/declaration` },
    { value: `Privacy Policy`, path: `/privacy-and-policy` },
  ],
};

export default defaultFooterRoutes;
