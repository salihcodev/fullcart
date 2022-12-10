// pkgs:
import { Link } from 'react-router-dom';
import { Fragment, useEffect, VFC } from 'react';

// utils:
import './style.sass';
import { useAppSelector } from '../../../../../redux/hooks';
import { RootState } from '../../../../../redux/store';

// comps:

// component>>>
const CategoriesList: VFC<{ showCatsList: boolean }> = ({ showCatsList }) => {
  const { stage, computedCats } = useAppSelector((state: RootState) => state.Categories);

  return (
    <Fragment>
      {showCatsList ? (
        <article className="categories-lists">
          <div className="lists-wrapper">
            <ul className="main-categories" id="main-categories">
              {computedCats.map(({ value, path: mainCatPath, subCats }: any) => (
                <li key={mainCatPath}>
                  <Link to={`/market/${mainCatPath}?page=1&limit=20`} className="cat-heading">
                    <div>
                      <p>{value.length > 23 ? `${value.substring(0, 23)}...` : value}</p>
                    </div>
                    <div>
                      <span className="count-num">{subCats?.length}</span>
                    </div>
                    <ul className="sub-categories" id="sub-categories">
                      {subCats.map(({ value, path }: any) => (
                        <li key={path}>
                          <Link to={`/market/${mainCatPath}/${path}?page=1&limit=20`} className="cat-heading">
                            <div>
                              <p>{value.length > 23 ? `${value.substring(0, 23)}...` : value}</p>
                            </div>
                            <div></div>
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
