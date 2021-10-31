// pkgs:
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// utils:
import './style.sass';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { logout } from '../../../redux/slices/auth/logic/signing-utils.logic';
import avatar from '../../../../public/assets/images/avatar.jpg';
import AppButton from '../button/app-button.comp';
import { IUserAvatar } from '../../../common/interfaces/user-avatar.interface';

// comps:

// component>>>
const UserAvatar: React.VFC<IUserAvatar> = ({ user }) => {
  // preConfigured hooks:
  const dispatch = useDispatch();

  // component's state extractions and handling:
  const { stage } = useAppSelector((state: RootState) => state.Auth);

  return (
    <section className="user-avatar">
      <Link to={`/user/${user.id}`} style={{ background: `url(${avatar})` }} className="avatar-holder"></Link>

      <div className="user-options-list">
        <div className="options-list"></div>
        <div className="logout-wrapper">
          <AppButton handleEvent={() => dispatch(logout())} loadState={stage} value="Log out" type="button" wide size="sm" border={{ size: 1 }} />
        </div>
      </div>
    </section>
  );
};

export default UserAvatar;
