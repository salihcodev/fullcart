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
      <Link to={`/customer/${user.id}`} style={{ background: `url(${avatar})` }} className="avatar-holder"></Link>

      <div className="user-options-list">
        <div className="options-list">
          <Link className="user-name" to={`/customer/${user.id}`}>{`${
            user.name.length < 20 ? user.name : user.name.substring(0, 20) + `...`
          }`}</Link>
          <small className="user-email">{`${user.email.length < 20 ? user.email : user.email.substring(0, 20) + `...`}`}</small>
        </div>
        <div className="logout-wrapper">
          <AppButton
            handleEvent={() => dispatch(logout())}
            loadState={stage}
            value="Logout"
            type="button"
            wide
            size="sm"
            border={{ size: 1 }}
            noBorder
            bkgSecondary
          />
        </div>
      </div>
    </section>
  );
};

export default UserAvatar;
