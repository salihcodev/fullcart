// pkgs:
import { Link } from 'react-router-dom';
import { Fragment, useEffect, VFC } from 'react';

// utils:
import './style.sass';
import categoriesRoutes from '../../../../../common/constants/categories-routes.constant';

// comps:

// component>>>
const CategoriesList: VFC<{ showCatsList: boolean }> = ({ showCatsList }) => {
  return (
    <Fragment>
      {showCatsList ? (
        <article className="categories-lists">
          <div className="lists-wrapper">
            <ul className="main-categories" id="main-categories">
              {categoriesRoutes.map(({ value, path, subItems }) => (
                <li key={path}>
                  <Link to={``} className="cat-heading">
                    <div>
                      <p>{value.length > 23 ? `${value.substring(0, 23)}...` : value}</p>
                    </div>
                    <div>
                      <span className="count-num">{subItems?.length}</span>
                    </div>
                    <ul className="sub-categories" id="sub-categories">
                      {subItems.map(({ value, path }) => (
                        <li key={path}>
                          <Link to={``} className="cat-heading">
                            <div>
                              <p>{value.length > 23 ? `${value.substring(0, 23)}...` : value}</p>
                            </div>
                            <div>
                              <span className="count-num">0</span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ) : null}
    </Fragment>
  );
};

export default CategoriesList;
