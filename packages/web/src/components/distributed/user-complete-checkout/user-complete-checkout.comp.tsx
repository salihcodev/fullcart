// pkgs:

// utils:
import './style.sass';
import { IUserCompleteCheckout } from '../../../common/interfaces/user-complete-checkout.interface';

// comps:

const UserCompleteCheckout: React.VFC<IUserCompleteCheckout> = ({ user }) => {
  return <section className="user-complete-checkout">{user?.email}</section>;
};

export default UserCompleteCheckout;
