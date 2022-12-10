// pkgs:

// utils:
import { Link } from 'react-router-dom';
import './style.sass';

// comps:

const NoItems: React.VFC<{ forCart?: boolean; forOrders?: boolean; forWish?: boolean; pagination?: boolean }> = ({
  pagination,
  forCart,
  forOrders,
  forWish,
}) => {
  return (
    <section className="no-items">
      {pagination ? (
        <div className="wrapper">
          <div>
            <h5 className="heading">You has accessed a non existed page for this category</h5>
          </div>
        </div>
      ) : forCart ? (
        <div className="wrapper">
          <h5 className="heading">There's no items to view!</h5>
        </div>
      ) : forOrders ? (
        <div className="wrapper">
          <h5 className="heading">There's no items to view!</h5>
        </div>
      ) : forWish ? (
        <div className="wrapper">
          <h5 className="heading">There's no items to view!</h5>
        </div>
      ) : null}
    </section>
  );
};

export default NoItems;
