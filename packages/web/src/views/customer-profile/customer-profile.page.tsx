// pkgs:

// comps:

// utils:
import { useState } from 'react';
import { localStorageObjGetter } from '../../common/utilities/localstorage-dealer/localstorage-getters.util';
import Container from '../../components/utils/container/container.util';
import avatar from '../../../public/assets/images/avatar.jpg';
import { MdOutlineEdit } from 'react-icons/md';
import { FiTwitter, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import './style.sass';

// component>>>
const CustomerProfile = () => {
  const user = localStorageObjGetter(`@authedUser`)?.user;

  const [activeBtn, setActiveBtn] = useState(`basic-info`);

  const profileBtns = [
    { name: `basic-info`, value: 'Basic Info' },
    { name: `location-information`, value: 'Location Information' },
    { name: `payment-information`, value: 'Payment Information' },
    { name: `account-deletion`, value: 'Account Deletion' },
  ];

  const userFirstName = user?.name.split(' ')[0];

  return (
    <main className="page customer-profile-page">
      <Container xl>
        <h3 className="greeting">
          <span>Hi There, </span> <b className="user-name">{userFirstName}</b>
        </h3>
        <div className="info-wrapper">
          <aside className="profile-routes">
            {profileBtns.map(({ value, name }) => (
              <button onClick={() => setActiveBtn(name)}>
                {value} {name === activeBtn ? <span className="active-point"></span> : null}
              </button>
            ))}
          </aside>
          <article className="profile-info">
            {activeBtn === `basic-info` ? (
              <section className="basic-info">
                <h4>Basic Information</h4>
                <section className="customer-info-card">
                  <div className="avatar-wrapper">
                    <div className="avatar">
                      <img src={avatar} alt={userFirstName + `Avatar`} />
                      <button className="edit">
                        <MdOutlineEdit />
                      </button>
                    </div>
                  </div>
                  <div className="txt-info-wrapper">
                    <h3>{user?.name}</h3>
                    <p className="bio">Some dummy information about this person...</p>
                    <div className="socials">
                      <a href="#" className="social-link">
                        <FiTwitter />
                      </a>
                      <a href="#" className="social-link">
                        <FiInstagram />
                      </a>
                      <a href="#" className="social-link">
                        <FaWhatsapp />
                      </a>
                    </div>
                  </div>
                </section>
              </section>
            ) : activeBtn === `location-information` ? (
              <section className="location-info">
                <h4>Location Information</h4>
              </section>
            ) : activeBtn === `payment-information` ? (
              <section className="payment-information">
                <h4>Payment Information</h4>
              </section>
            ) : (
              <section className="account-deletion">
                <h4>Account Deletion</h4>
              </section>
            )}
          </article>
        </div>
      </Container>
    </main>
  );
};

export default CustomerProfile;
