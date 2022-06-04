// pkgs:
import { Link } from 'react-router-dom';
import { Fragment, useEffect, VFC } from 'react';

// utils:
import './style.sass';

// comps:

// component>>>
const CategoriesList: VFC<{ showCatsList: boolean }> = ({ showCatsList }) => {
  // hover on the first list item
  // useEffect(() => {
  //   document.querySelector('.main-categories-wrapper');

  //   return () => {};
  // }, []);

  return (
    <Fragment>
      {showCatsList ? (
        <article className="categories-list">
          <div className="list-wrapper">
            <section className="main-categories">
              <h6>All categories</h6>
              <ul className="main-categories-wrapper">
                {links.map((link: any) => {
                  const { value, path, subItems } = link;
                  return (
                    <li key={path} className="category">
                      <Link to={path}>{value}</Link>
                      <ul className="sub-categories-wrapper">
                        <h6>{value}</h6>
                        {subItems.map(({ value, path }: any) => (
                          <li key={path}>
                            <Link to={path}>{value}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </article>
      ) : null}
    </Fragment>
  );
};

export default CategoriesList;

const links = [
  {
    value: `Furniture`,
    path: `/furniture`,
    subItems: [
      { value: `test0`, path: `/office` },
      { value: `test1`, path: `/office` },
      { value: `test2`, path: `/office` },
      { value: `test3`, path: `/office` },
      { value: `test4`, path: `/office` },
    ],
  },
  {
    value: `Test`,
    path: `/test`,
    subItems: [
      { value: `test0`, path: `/office` },
      { value: `test1`, path: `/office` },
      { value: `test2`, path: `/office` },
      { value: `test3`, path: `/office` },
    ],
  },
  {
    value: `Furniture`,
    path: `/furniture`,
    subItems: [
      { value: `test1`, path: `/office` },
      { value: `test2`, path: `/office` },
      { value: `test3`, path: `/office` },
      { value: `test4`, path: `/office` },
    ],
  },
  {
    value: `Furniture`,
    path: `/furniture`,
    subItems: [
      { value: `test0`, path: `/office` },
      { value: `test1`, path: `/office` },
      { value: `test2`, path: `/office` },
      { value: `test4`, path: `/office` },
    ],
  },
  {
    value: `Furniture`,
    path: `/furniture`,
    subItems: [
      { value: `test0`, path: `/office` },
      { value: `test1`, path: `/office` },
      { value: `test2`, path: `/office` },
      { value: `test4`, path: `/office` },
    ],
  },
  {
    value: `Furniture`,
    path: `/furniture`,
    subItems: [
      { value: `test0`, path: `/office` },
      { value: `test2`, path: `/office` },
      { value: `test3`, path: `/office` },
      { value: `test4`, path: `/office` },
    ],
  },
  {
    value: `Furniture`,
    path: `/furniture`,
    subItems: [
      { value: `test0`, path: `/office` },
      { value: `test1`, path: `/office` },
      { value: `test2`, path: `/office` },
      { value: `test4`, path: `/office` },
    ],
  },
];
