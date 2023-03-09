<p align="center">
  <a href="" alt="alt" width="500" />
  </a>
</p>

<h1 align="center">e-Commercial platform</h1>

<p align="center"><a href="https://fullcart.com" /><code>@fullcart</code></a></p>

<br>

<p align="center">
  <!-- learn badge -->
  <a href="https://lerna.js.org">
  <img alt="Maintained with Learn" src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" />  
  </a>
  <!-- github starts -->
  <img alt="Github Stars" src="https://badgen.net/github/stars/salihcodev/prods-systems" />
</p>

---

<br />

## File Structure

### High level structure

```javascript

.../fullcart
.
├── dockerfiles
│   ├── docker-compose.yml
│   ├── Dockerfile
│   └── Dockerfile.dev
├── docs
│   ├── app-structure.doc.md
│   ├── server
│   │   └── main.doc.md
│   └── web
│       └── main.doc.md
├── LICENSE
├── packages
│   ├── server
│   │   ├── config
│   │   │   ├── default.yml
│   │   │   ├── development.yml
│   │   │   └── production.yml
│   │   ├── nodemon.json
│   │   ├── package.json
│   │   ├── pnpm-lock.yaml
│   │   ├── serve-local-db.sh
│   │   ├── src
│   │   │   ├── app.ts
│   │   │   ├── common
│   │   │   │   ├── constants
│   │   │   │   │   └── user
│   │   │   │   │       └── user-roles.const.ts
│   │   │   │   ├── db-schema
│   │   │   │   │   ├── cart-item.schema.json
│   │   │   │   │   ├── order.schema.json
│   │   │   │   │   ├── product.schema.json
│   │   │   │   │   ├── suppler.schema.json
│   │   │   │   │   └── wishlist-item.schema.json
│   │   │   │   ├── drafts
│   │   │   │   │   └── prod-ui-inDash.txt
│   │   │   │   ├── middlewares
│   │   │   │   │   └── auth.middleware.ts
│   │   │   │   ├── shared
│   │   │   │   │   ├── api-features-builder.shared.ts
│   │   │   │   │   └── auth-features.shared.ts
│   │   │   │   ├── @types
│   │   │   │   │   └── express
│   │   │   │   │       └── index.d.ts
│   │   │   │   └── utils
│   │   │   │       └── parsing-query-props.util.ts
│   │   │   ├── controllers
│   │   │   │   ├── auth
│   │   │   │   │   ├── customer.controller.ts
│   │   │   │   │   └── suppler.controller.ts
│   │   │   │   └── collections
│   │   │   │       ├── cart
│   │   │   │       │   ├── creating.controller.ts
│   │   │   │       │   ├── deleting.controller.ts
│   │   │   │       │   └── reading.controller.ts
│   │   │   │       ├── category
│   │   │   │       │   ├── creating.controller.ts
│   │   │   │       │   ├── deleting.controller.ts
│   │   │   │       │   └── reading.controller.ts
│   │   │   │       ├── contact-us.controller.ts
│   │   │   │       ├── newsletter-subscription.controller.ts
│   │   │   │       ├── order
│   │   │   │       │   ├── creating.controller.ts
│   │   │   │       │   ├── deleting.controller.ts
│   │   │   │       │   └── reading.controller.ts
│   │   │   │       ├── product
│   │   │   │       │   ├── creating.controller.ts
│   │   │   │       │   ├── deleting.controller.ts
│   │   │   │       │   ├── reading.controller.ts
│   │   │   │       │   └── updating.controller.ts
│   │   │   │       ├── subcategory
│   │   │   │       │   ├── creating.controller.ts
│   │   │   │       │   ├── deleting.controller.ts
│   │   │   │       │   └── reading.controller.ts
│   │   │   │       └── wishlist
│   │   │   │           ├── creating.controller.ts
│   │   │   │           ├── deleting.controller.ts
│   │   │   │           └── reading.controller.ts
│   │   │   ├── main.ts
│   │   │   ├── models
│   │   │   │   ├── cart-item.model.ts
│   │   │   │   ├── category.model.ts
│   │   │   │   ├── customer.model.ts
│   │   │   │   ├── news-letter.model.ts
│   │   │   │   ├── order.model.ts
│   │   │   │   ├── product.model.ts
│   │   │   │   ├── recent-searche.model.ts
│   │   │   │   ├── subcategory.model.ts
│   │   │   │   ├── suppler.model.ts
│   │   │   │   ├── utils
│   │   │   │   │   └── pre
│   │   │   │   │       └── index.ts
│   │   │   │   └── wishlist-item.model.ts
│   │   │   ├── routes
│   │   │   │   ├── cart.router.ts
│   │   │   │   ├── category.router.ts
│   │   │   │   ├── contact-us.router.ts
│   │   │   │   ├── customer.router.ts
│   │   │   │   ├── newsletter.router.ts
│   │   │   │   ├── order.router.ts
│   │   │   │   ├── product.router.ts
│   │   │   │   ├── subcategory.router.ts
│   │   │   │   ├── suppler.router.ts
│   │   │   │   └── wishlist.router.ts
│   │   │   └── services
│   │   │       └── mail-sending.service.ts
│   │   └── tsconfig.json
│   └── web
│       ├── config-overrides.js
│       ├── package.json
│       ├── pnpm-lock.yaml
│       ├── public
│       │   ├── assets
│       │   │   ├── fonts
│       │   │   │   ├── ebrima
│       │   │   │   │   ├── ebrimabd.ttf
│       │   │   │   │   └── ebrima.ttf
│       │   │   │   └── lato
│       │   │   │       ├── Lato-Black.ttf
│       │   │   │       ├── Lato-Light.ttf
│       │   │   │       ├── Lato-Medium.ttf
│       │   │   │       ├── Lato-Regular.ttf
│       │   │   │       ├── Lato-SemiboldItalic.ttf
│       │   │   │       └── Lato-Semibold.ttf
│       │   │   └── images
│       │   │       ├── avatar.jpg
│       │   │       ├── bkgs
│       │   │       │   ├── landing-bkg.svg
│       │   │       │   └── latest-arrivals-bkg.svg
│       │   │       ├── cats-row
│       │   │       │   ├── apparel.svg
│       │   │       │   ├── consumer-electronics.svg
│       │   │       │   ├── machinary.svg
│       │   │       │   └── vehicles-parts-and-accessories.svg
│       │   │       ├── company-profile
│       │   │       │   └── company-hero-cover.svg.svg
│       │   │       ├── expo-merch
│       │   │       │   ├── expo-merch.svg
│       │   │       │   ├── flat-expo-merch-bkg.svg
│       │   │       │   └── flat-expo-merch.svg
│       │   │       ├── features
│       │   │       │   ├── customized-products.svg
│       │   │       │   └── ready-to-ship.svg
│       │   │       ├── fullcart-temp-img.svg
│       │   │       ├── hero
│       │   │       │   ├── 1.svg
│       │   │       │   ├── merch-flag.svg
│       │   │       │   └── pro-buyer.svg
│       │   │       ├── logo-dark.svg
│       │   │       ├── logo-white.svg
│       │   │       ├── my-market
│       │   │       │   ├── all-categories.svg
│       │   │       │   ├── apparel.svg
│       │   │       │   ├── beauty-and-personal-care.svg
│       │   │       │   ├── consumer-electronics.svg
│       │   │       │   ├── home-and-garden.svg
│       │   │       │   ├── machinary.svg
│       │   │       │   ├── sports-and-entertainment.svg
│       │   │       │   └── vehicles-parts-and-accessories.svg
│       │   │       ├── non-exp-header-logo.svg
│       │   │       ├── payment-methods
│       │   │       │   ├── fawry.svg
│       │   │       │   ├── mastercard.svg
│       │   │       │   ├── on-delivary.svg
│       │   │       │   ├── paypal.svg
│       │   │       │   └── visa.svg
│       │   │       ├── qutation
│       │   │       │   ├── req-for-qutation-cover.svg
│       │   │       │   └── req-for-qutation.svg
│       │   │       ├── services
│       │   │       │   ├── 1.jpg
│       │   │       │   ├── 1.svg
│       │   │       │   ├── 2.jpg
│       │   │       │   ├── 2.svg
│       │   │       │   ├── 3.jpg
│       │   │       │   ├── 3.svg
│       │   │       │   ├── 4.jpg
│       │   │       │   └── 4.svg
│       │   │       ├── show-case
│       │   │       │   ├── 1.svg
│       │   │       │   ├── 2.svg
│       │   │       │   ├── 3.svg
│       │   │       │   ├── 4.svg
│       │   │       │   ├── 5.svg
│       │   │       │   └── 6.svg
│       │   │       ├── sm-logo.svg
│       │   │       └── suppler-logo.svg
│       │   ├── favicon.ico
│       │   ├── icon.svg
│       │   ├── index.html
│       │   ├── logo192.png
│       │   ├── logo512.png
│       │   ├── manifest.json
│       │   └── robots.txt
│       ├── src
│       │   ├── api
│       │   │   ├── app-resources
│       │   │   │   ├── collections
│       │   │   │   │   ├── cart-api-referrers.ts
│       │   │   │   │   ├── category-api-referrers.ts
│       │   │   │   │   ├── orders-api-referrers.ts
│       │   │   │   │   ├── products-api-referrers.ts
│       │   │   │   │   ├── utiles
│       │   │   │   │   │   └── wipe.ts
│       │   │   │   │   └── wishlist-api-referrers.ts
│       │   │   │   ├── contact-us
│       │   │   │   │   └── endpoints-referrers.ts
│       │   │   │   └── newsletter
│       │   │   │       └── endpoints-referrers.ts
│       │   │   ├── auth
│       │   │   │   └── endpoints-referrers.ts
│       │   │   └── base.ts
│       │   ├── App.test.tsx
│       │   ├── App.tsx
│       │   ├── common
│       │   │   ├── constants
│       │   │   │   ├── dash-aside-routes.constant.ts
│       │   │   │   ├── footer-routes.constant.ts
│       │   │   │   ├── header-routes.constant.ts
│       │   │   │   ├── my-market-routes.ts
│       │   │   │   ├── services.constant.ts
│       │   │   │   └── users-roles.constant.ts
│       │   │   ├── interfaces
│       │   │   │   ├── add-banner.interface.ts
│       │   │   │   ├── alert.interface.ts
│       │   │   │   ├── app-button.interface.ts
│       │   │   │   ├── banner.interface.ts
│       │   │   │   ├── checkout-calculations.interface.ts
│       │   │   │   ├── dash-entities-row.interface copy.ts
│       │   │   │   ├── dash-entities-row.interface.ts
│       │   │   │   ├── dash-monthly-views.interface.ts
│       │   │   │   ├── entities-basic-stats.interface.ts
│       │   │   │   ├── footer.interface.ts
│       │   │   │   ├── form-input.interface.ts
│       │   │   │   ├── header.interface.ts
│       │   │   │   ├── hero.interface.ts
│       │   │   │   ├── layout.interface.ts
│       │   │   │   ├── monthly-view-card.interface.ts
│       │   │   │   ├── prod-consume-card.interface.ts
│       │   │   │   ├── prod-highlights.interface.ts
│       │   │   │   ├── prod-smart-card.interface.ts
│       │   │   │   ├── prods-row.interface.ts
│       │   │   │   ├── system-stats-in-chart.interface.ts
│       │   │   │   ├── user-avatar.interface.ts
│       │   │   │   └── user-complete-checkout.interface.ts
│       │   │   ├── styles
│       │   │   │   ├── app.sass
│       │   │   │   ├── index.sass
│       │   │   │   └── utils
│       │   │   │       ├── _animation.util.sass
│       │   │   │       ├── _colors.util.sass
│       │   │   │       ├── _fonts.util.sass
│       │   │   │       ├── _helper-classes.util.sass
│       │   │   │       └── _mixins.util.sass
│       │   │   ├── @types
│       │   │   │   ├── auth.type.ts
│       │   │   │   ├── contact-form.types.ts
│       │   │   │   ├── contact-suppler-form.types.ts
│       │   │   │   ├── load-state.types.ts
│       │   │   │   ├── newsletter-subscription.types.ts
│       │   │   │   ├── prod.types.ts
│       │   │   │   ├── react-world-flags
│       │   │   │   │   └── index.d.ts
│       │   │   │   ├── signin-form.types.ts
│       │   │   │   ├── signup-form.types.ts
│       │   │   │   ├── slice-alert.types.ts
│       │   │   │   ├── slice-auth.types.ts
│       │   │   │   ├── slice-contact-us.types.ts
│       │   │   │   ├── slice-dash-aside.types.ts
│       │   │   │   ├── slice-newsletter-subscription.types.ts
│       │   │   │   ├── slice-prods-collections.types.ts
│       │   │   │   ├── slice-single-category.types.ts
│       │   │   │   ├── slice-sub-category-loader.types.ts
│       │   │   │   ├── slice-user-actions.types.ts
│       │   │   │   └── user.types.ts
│       │   │   └── utilities
│       │   │       ├── dashing-dealer.util.ts
│       │   │       ├── delayer.util.ts
│       │   │       ├── jwt-decoder.util.ts
│       │   │       ├── localstorage-dealer
│       │   │       │   ├── localstorage-getters.util.ts
│       │   │       │   └── localstorage-setter.util.ts
│       │   │       ├── scroll-to-top
│       │   │       │   └── scroll-to-top.util.ts
│       │   │       ├── to-fixed-number.util.ts
│       │   │       └── useQuery
│       │   │           └── useQuery.util.ts
│       │   ├── components
│       │   │   ├── base
│       │   │   │   ├── ___
│       │   │   │   │   ├── style.sass
│       │   │   │   │   └── t.comp.tsx
│       │   │   │   ├── category-row
│       │   │   │   │   ├── category-row.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── checkout-calculations
│       │   │   │   │   ├── checkout-calculations.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── dash-entities-row
│       │   │   │   │   ├── dash-entities-row.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── dash-monthly-views
│       │   │   │   │   ├── dash-monthly-views.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── dash-onthefly-info
│       │   │   │   │   ├── dash-onthefly-info.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── dash-onthefly-list
│       │   │   │   │   ├── dash-onthefly-list.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── dash-overview-info
│       │   │   │   │   ├── dash-overview-info.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── entities-basic-stats
│       │   │   │   │   ├── entities-basic-stats.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── features-wrapper
│       │   │   │   │   ├── feature
│       │   │   │   │   │   ├── feature.comp.tsx
│       │   │   │   │   │   └── style.sass
│       │   │   │   │   ├── features-wrapper.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── hero
│       │   │   │   │   ├── hero.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── just-for-you
│       │   │   │   │   ├── just-for-you.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── latest-arrivals
│       │   │   │   │   ├── arrival
│       │   │   │   │   │   ├── arrival.comp.tsx
│       │   │   │   │   │   └── style.sass
│       │   │   │   │   ├── latest-arrivals.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── market-prods-filter
│       │   │   │   │   ├── market-prods-filter.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── market-prods-viewer
│       │   │   │   │   ├── market-prods-viewer.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── monthly-view-card
│       │   │   │   │   ├── monthly-view-card.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── prod-decision
│       │   │   │   │   ├── prod-decision.comp.tsx
│       │   │   │   │   ├── prod-to-order
│       │   │   │   │   │   ├── contact-suppler-modal
│       │   │   │   │   │   │   ├── contact-suppler-modal.comp.tsx
│       │   │   │   │   │   │   └── style.sass
│       │   │   │   │   │   ├── prod-to-order.comp.tsx
│       │   │   │   │   │   └── style.sass
│       │   │   │   │   ├── style.sass
│       │   │   │   │   └── suppler-mini-info
│       │   │   │   │       ├── style.sass
│       │   │   │   │       └── suppler-mini-info.comp.tsx
│       │   │   │   ├── prod-info-shot
│       │   │   │   │   ├── prod-imgs
│       │   │   │   │   │   ├── prod-imgs.comp.tsx
│       │   │   │   │   │   └── style.sass
│       │   │   │   │   ├── prod-info-shot.comp.tsx
│       │   │   │   │   ├── prod-overview
│       │   │   │   │   │   ├── prod-overview.comp.tsx
│       │   │   │   │   │   └── style.sass
│       │   │   │   │   └── style.sass
│       │   │   │   ├── prod-more-info
│       │   │   │   │   ├── albums-modal
│       │   │   │   │   │   ├── albums-modal.comp.tsx
│       │   │   │   │   │   └── style.sass
│       │   │   │   │   ├── prod-details-wrapper
│       │   │   │   │   │   ├── prod-details-wrapper.comp.tsx
│       │   │   │   │   │   └── style.sass
│       │   │   │   │   ├── prod-more-info.comp.tsx
│       │   │   │   │   ├── reviews-details-wrapper
│       │   │   │   │   │   ├── reviews-details-wrapper.comp.tsx
│       │   │   │   │   │   └── style.sass
│       │   │   │   │   ├── style.sass
│       │   │   │   │   └── suppler-details-wrapper
│       │   │   │   │       ├── style.sass
│       │   │   │   │       └── suppler-details-wrapper.comp.tsx
│       │   │   │   ├── prods-collection
│       │   │   │   │   ├── prods-collection.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── req-for-qutation
│       │   │   │   │   ├── req-for-qutation.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── row-title
│       │   │   │   │   ├── row-title.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── services
│       │   │   │   │   ├── services.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── show-case
│       │   │   │   │   ├── case
│       │   │   │   │   │   ├── case.comp.tsx
│       │   │   │   │   │   └── style.sass
│       │   │   │   │   ├── show-case.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── slider
│       │   │   │   │   ├── slider.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── suppler-info-hero
│       │   │   │   │   ├── style.sass
│       │   │   │   │   └── suppler-info-hero.comp.tsx
│       │   │   │   ├── suppler-select
│       │   │   │   │   ├── style.sass
│       │   │   │   │   └── suppler-select.comp.tsx
│       │   │   │   └── system-stats-in-chart
│       │   │   │       ├── style.sass
│       │   │   │       └── system-stats-in-chart.comp.tsx
│       │   │   ├── distributed
│       │   │   │   ├── ad-banner
│       │   │   │   │   ├── add-banner.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── alert
│       │   │   │   │   ├── alert.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── banner
│       │   │   │   │   ├── banner.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── breadcrumb
│       │   │   │   │   ├── breadcrumb.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── button
│       │   │   │   │   ├── app-button.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── checkout-step
│       │   │   │   │   ├── checkout-step.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── customer-signin-form
│       │   │   │   │   ├── customer-signin-form.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── customer-signup-form
│       │   │   │   │   ├── customer-signup-form.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── dashboard-aside
│       │   │   │   │   ├── dashboard-aside.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── dash-header
│       │   │   │   │   ├── dash-header.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── footer
│       │   │   │   │   ├── default-footer
│       │   │   │   │   │   ├── default-footer.comp.tsx
│       │   │   │   │   │   ├── footer-head
│       │   │   │   │   │   │   ├── footer-head.comp.tsx
│       │   │   │   │   │   │   └── style.sass
│       │   │   │   │   │   ├── footer-links
│       │   │   │   │   │   │   ├── footer-links-column
│       │   │   │   │   │   │   │   ├── footer-links-column.comp.tsx
│       │   │   │   │   │   │   │   └── style.sass
│       │   │   │   │   │   │   ├── footer-links.comp.tsx
│       │   │   │   │   │   │   └── style.sass
│       │   │   │   │   │   ├── footer-middle-portion
│       │   │   │   │   │   │   ├── footer-middle-portion.comp.tsx
│       │   │   │   │   │   │   └── style.sass
│       │   │   │   │   │   └── style.sass
│       │   │   │   │   ├── footer.comp.tsx
│       │   │   │   │   ├── none-expanded-footer
│       │   │   │   │   │   ├── none-expanded-footer.comp.tsx
│       │   │   │   │   │   └── style.sass
│       │   │   │   │   └── style.sass
│       │   │   │   ├── form-input
│       │   │   │   │   ├── form-input.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── header
│       │   │   │   │   ├── after-header
│       │   │   │   │   │   ├── after-header.comp.tsx
│       │   │   │   │   │   ├── categories-list
│       │   │   │   │   │   │   ├── categories-list.comp.tsx
│       │   │   │   │   │   │   └── style.sass
│       │   │   │   │   │   └── style.sass
│       │   │   │   │   ├── header.comp.tsx
│       │   │   │   │   ├── header-search
│       │   │   │   │   │   ├── header-search.comp.tsx
│       │   │   │   │   │   └── style.sass
│       │   │   │   │   ├── pre-header
│       │   │   │   │   │   ├── pre-header.comp.tsx
│       │   │   │   │   │   ├── style.sass
│       │   │   │   │   │   └── suppler-auth-modal
│       │   │   │   │   │       ├── style.sass
│       │   │   │   │   │       └── suppler-auth-modal.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── layout
│       │   │   │   │   ├── layout.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── market-search-sort
│       │   │   │   │   ├── market-searcher-sorter.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── modal
│       │   │   │   │   ├── modal.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── no-items
│       │   │   │   │   ├── no-items.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── not-logged
│       │   │   │   │   ├── not-logged.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── pagination
│       │   │   │   │   ├── pagination.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── prod-card
│       │   │   │   │   ├── prod-card.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── prod-consume-card
│       │   │   │   │   ├── prod-consume-card.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── prod-highlights
│       │   │   │   │   ├── prod-highlights.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── prod-info-filler
│       │   │   │   │   ├── prod-info-filler.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── prod-smart-card
│       │   │   │   │   ├── prod-smart-card.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── skelton
│       │   │   │   │   ├── skeleton.comp.tsx
│       │   │   │   │   └── style.sass
│       │   │   │   ├── suppler-signin-form
│       │   │   │   │   ├── style.sass
│       │   │   │   │   └── suppler-signin-form.comp.tsx
│       │   │   │   ├── suppler-signup-form
│       │   │   │   │   ├── style.sass
│       │   │   │   │   └── suppler-signup-form.comp.tsx
│       │   │   │   ├── user-avatar
│       │   │   │   │   ├── style.sass
│       │   │   │   │   └── user-avatar.comp.tsx
│       │   │   │   └── user-complete-checkout
│       │   │   │       ├── style.sass
│       │   │   │       └── user-complete-checkout.comp.tsx
│       │   │   └── utils
│       │   │       └── container
│       │   │           ├── container.util.tsx
│       │   │           └── style.sass
│       │   ├── fullcart-temp-img.svg
│       │   ├── index.tsx
│       │   ├── react-app-env.d.ts
│       │   ├── redux
│       │   │   ├── hooks.ts
│       │   │   ├── slices
│       │   │   │   ├── auth
│       │   │   │   │   ├── Auth.slice.ts
│       │   │   │   │   └── logic
│       │   │   │   │       └── signing-utils.logic.ts
│       │   │   │   ├── cart
│       │   │   │   │   ├── cart.slice.ts
│       │   │   │   │   └── logic
│       │   │   │   │       ├── add.logic.ts
│       │   │   │   │       ├── crud-sync.logic.ts
│       │   │   │   │       ├── delete.logic.ts
│       │   │   │   │       └── read.logic.ts
│       │   │   │   ├── category
│       │   │   │   │   ├── category.slice.ts
│       │   │   │   │   └── logic
│       │   │   │   │       ├── add.logic.ts
│       │   │   │   │       ├── delete.logic.ts
│       │   │   │   │       └── read.logic.ts
│       │   │   │   ├── collection-utils
│       │   │   │   │   └── wipe.logic.ts
│       │   │   │   ├── contact-us
│       │   │   │   │   ├── contact-us.slice.ts
│       │   │   │   │   └── logic
│       │   │   │   │       └── mail-sender.logic.ts
│       │   │   │   ├── dash-aside
│       │   │   │   │   └── dash-aside.slice.ts
│       │   │   │   ├── newsletter
│       │   │   │   │   ├── logic
│       │   │   │   │   │   └── newsletter.logic.ts
│       │   │   │   │   └── newsletter.slice.ts
│       │   │   │   ├── order
│       │   │   │   │   ├── logic
│       │   │   │   │   │   ├── add.logic.ts
│       │   │   │   │   │   ├── delete.logic.ts
│       │   │   │   │   │   └── read.logic.ts
│       │   │   │   │   └── order.slice.ts
│       │   │   │   ├── prods-collection
│       │   │   │   │   ├── get-single-prod.slice.ts
│       │   │   │   │   ├── logic
│       │   │   │   │   │   └── reading.logic.ts
│       │   │   │   │   └── prods-collection.slice.ts
│       │   │   │   ├── user-actions
│       │   │   │   │   ├── logic
│       │   │   │   │   │   └── crud.logic.ts
│       │   │   │   │   └── user-actions.slice.ts
│       │   │   │   └── wishlist
│       │   │   │       ├── logic
│       │   │   │       │   ├── add.logic.ts
│       │   │   │       │   ├── delete.logic.ts
│       │   │   │       │   └── read.logic.ts
│       │   │   │       └── wishlist.slice.ts
│       │   │   └── store.ts
│       │   ├── serviceWorker.ts
│       │   ├── setupTests.ts
│       │   └── views
│       │       ├── auth
│       │       │   ├── auth.page.tsx
│       │       │   └── style.sass
│       │       ├── cart
│       │       │   ├── cart.page.tsx
│       │       │   └── style.sass
│       │       ├── categories
│       │       │   ├── categories.page.tsx
│       │       │   └── style.sass
│       │       ├── category
│       │       │   ├── category.page.tsx
│       │       │   └── style.sass
│       │       ├── checkout-cart
│       │       │   ├── checkout-cart.page.tsx
│       │       │   └── style.sass
│       │       ├── checkout-product
│       │       │   ├── checkout-product.page.tsx
│       │       │   └── style.sass
│       │       ├── checkout-simple
│       │       │   ├── checkout-simple.page.tsx
│       │       │   └── style.sass
│       │       ├── classified-category
│       │       │   ├── classified-category.page.tsx
│       │       │   └── style.sass
│       │       ├── company-profile
│       │       │   ├── company-profile.page.tsx
│       │       │   └── style.sass
│       │       ├── contact
│       │       │   ├── contact.page.tsx
│       │       │   └── style.sass
│       │       ├── customer-profile
│       │       │   ├── customer-profile.page.tsx
│       │       │   └── style.sass
│       │       ├── dashboard
│       │       │   ├── dashboard.page.tsx
│       │       │   └── style.sass
│       │       ├── dash-manage-products
│       │       │   ├── dash-manage-products.page.tsx
│       │       │   └── style.sass
│       │       ├── dash-monthly-views
│       │       │   ├── dash-monthly-views.page.tsx
│       │       │   └── style.sass
│       │       ├── dash-orders
│       │       │   ├── dash-orders.page.tsx
│       │       │   └── style.sass
│       │       ├── dash-products
│       │       │   ├── dash-products.page.tsx
│       │       │   └── style.sass
│       │       ├── dash-users
│       │       │   ├── dash-users.page.tsx
│       │       │   └── style.sass
│       │       ├── landing
│       │       │   ├── landing.page.tsx
│       │       │   └── style.sass
│       │       ├── market
│       │       │   ├── market.page.tsx
│       │       │   └── style.sass
│       │       ├── not-found
│       │       │   ├── notfound.page.tsx
│       │       │   └── style.sass
│       │       ├── orders
│       │       │   ├── orders.page.tsx
│       │       │   └── style.sass
│       │       ├── prod-viewer
│       │       │   ├── prod-viewer.page.tsx
│       │       │   └── style.sass
│       │       ├── subcategory
│       │       │   ├── style.sass
│       │       │   └── subcategory.page.tsx
│       │       ├── terms
│       │       │   ├── style.sass
│       │       │   └── terms.page.tsx
│       │       └── wishlist
│       │           ├── style.sass
│       │           └── wishlist.page.tsx
│       └── tsconfig.json
└── README.md


```

---

## Generals

### Project naming convention

- For naming files and directories i like to use **cabab-case**
- For naming functions, utilities i like to use **camelCase** is javascript used to be
- For naming interfaces, types i like to use **PascalCase**

<br>

## Support

Feel free to star the repo

Follow me on twitter [`@salihcodev`](https://t.me/salihcodev)
