// pkgs:

// utils:
import './style.sass';
import Container from '../../components/utils/container/container.util';

// comps:
import Breadcrumb from '../../components/distributed/breadcrumb/breadcrumb.comp';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { GetCollectionOfProds } from '../../redux/slices/prods-collection/logic/reading.logic';
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';

// component>>>
const CategoriesPage = () => {
  // preConfigured hooks:
  const dispatch = useAppDispatch();

  const { stage, computedCats } = useAppSelector((state: RootState) => state.Categories);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      // replace with the right thing here:
      dispatch(GetCollectionOfProds(``));
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  return (
    <Container xxl>
      <main className="page categories">
        <Breadcrumb />
        <section className="categories-wrapper">
          <ul className="main-categories" id="sub-categories">
            {computedCats?.map(({ value, path: mainCatPath, subCats }: any) => (
              <li key={mainCatPath}>
                <Link to={`/market/${mainCatPath}?page=1&limit=20`} className="cat-heading">
                  <div className="head-wrapper">
                    <div className="num-wrapper">
                      <span className="count-num">{subCats?.length}</span>
                    </div>
                    <div className="txt-wrapper">
                      <h3>{value.length > 23 ? `${value.substring(0, 23)}...` : value}</h3>
                    </div>
                  </div>
                  <ul className="sub-categories" id="sub-categories">
                    {subCats?.map(({ value, path }: any) => (
                      <li key={path}>
                        <Link to={`/market/${mainCatPath}/${path}?page=1&limit=20`} className="cat-heading">
                          <div>
                            <h6> - {value.length > 23 ? `${value.substring(0, 23)}...` : value}</h6>
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
        </section>
      </main>
    </Container>
  );
};

export default CategoriesPage;
