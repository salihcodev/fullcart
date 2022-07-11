// pkgs:

// utils:
import './style.sass';

// comps:

const NoItems: React.VFC<{ forCart?: boolean; forOrders?: boolean; forWish?: boolean }> = ({
  forCart,
  forOrders,
  forWish,
}) => {
  return (
    <section className="no-items">
      {forCart ? (
        <div className="wrapper">
          <h3 className="heading">There's no items to view!</h3>
        </div>
      ) : forOrders ? (
        <div className="wrapper">
          <h3 className="heading">There's no items to view!</h3>
        </div>
      ) : forWish ? (
        <div className="wrapper">
          <h3 className="heading">There's no items to view!</h3>
        </div>
      ) : null}
    </section>
  );
};

export default NoItems;
