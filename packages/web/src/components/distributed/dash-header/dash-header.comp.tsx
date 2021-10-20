// pkgs:
import { VFC } from 'react';

// utils:
import './style.sass';
import Container from '../../utils/container/container.util';
import UserAvatar from '../user-avatar/user-avatar.comp';
import { localStorageObjGetter } from '../../../common/utilities/localstorage-dealer/localstorage-getters.util';

// comps:

// component>>>
const DashHeader: VFC<{}> = () => {
  // preConfigured hooks:
  // const history = useHistory();

  const user = localStorageObjGetter(`@authedUser`)?.user;

  return (
    <header className="dash-header">
      <Container xxl>
        <div className="header-wrapper">
          <section className="left-wing">
            <h3 className="title">Dashboard</h3>
          </section>
          <section className="middle-wing">
            <div className="header-search">
              <input
                type="text"
                name="searchingInprods"
                id="searchingInprods"
                placeholder="Search"
              />
            </div>
          </section>
          <section className="right-wing">
            <UserAvatar user={user} />
          </section>
        </div>
      </Container>
    </header>
  );
};

export default DashHeader;
