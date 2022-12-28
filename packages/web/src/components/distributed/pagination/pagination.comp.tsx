// pkgs:

// utils:
import { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useQuery } from '../../../common/utilities/useQuery/useQuery.util';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import './style.sass';

const makeAnArr = (num: number) => {
  let arr: Array<number> = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }

  return arr;
};

// component>>>
const Pagination: React.VFC<any> = ({ setqueryStr, baseOptions }) => {
  const DEFAULT_LIMIT = 20;
  const MAX_LIMIT = 100;

  const { pathname } = useLocation();

  // Hooks:
  const { stage, count } = useAppSelector((state: RootState) => state.ProdsCollection);
  const { search } = useLocation();
  const history = useHistory();
  const query = useQuery(search);

  const [pageNum, setPageNum] = useState<number>(Number(query.get(`page`)) || 1);
  const [reqLimit, setReqLimit] = useState<any>(query.get(`limit`) || DEFAULT_LIMIT);
  const [pagesCount, setPagesCount] = useState<number>(0);

  // Send the query string back to the parent.
  useEffect(() => {
    setqueryStr(`?${baseOptions}&page=${pageNum}&limit=${reqLimit}`);
  }, [baseOptions, pageNum, reqLimit]);

  // Handle request limit.
  const handleChange = (e: any) => {
    let val = e.target.value;

    if (val >= DEFAULT_LIMIT && val <= MAX_LIMIT) {
      setReqLimit(Number(val));
    }

    history.push(`?page=${pageNum}&limit=${val}`);
  };

  // Get the pages count.
  useEffect(() => {
    count && setPagesCount(count / reqLimit);
  }, [reqLimit, pageNum, count, pathname]);

  // Previous & Next logic.
  const previousCacls = pageNum - 1 === 0 ? pageNum : pageNum - 1;
  const nextCacls = pageNum === Math.ceil(pagesCount) ? pageNum : pageNum + 1;

  // Previous & Next logic for style.
  const previousStyle = pageNum - 1 === 0 ? { opacity: 0.6, cursor: `not-allowed` } : {};
  const nextStyle = pageNum === Math.ceil(pagesCount) ? { opacity: 0.6, cursor: `not-allowed` } : {};
  return (
    <section className="pagination">
      <div className="pagination-wrapper">
        {/* LIMIT SELECTION */}
        <div className="options">
          <input type="number" name="" id="" min={DEFAULT_LIMIT} max={100} step={DEFAULT_LIMIT} onChange={handleChange} defaultValue={reqLimit} />
          <h6 className="heading">Products/page</h6>
        </div>

        {/* PAGES CONTROLLERS */}
        {stage == `busy` ? (
          `Loading...`
        ) : (
          <div className="handlers">
            <Link to={`?page=${previousCacls}&limit=${reqLimit}`} className="previous-page" style={previousStyle} onClick={() => setPageNum(previousCacls)}>
              Previos
            </Link>
            <div className="pages">
              {/* TODO: Change the implementation of generating a iterable arr. */}
              {makeAnArr(Math.ceil(pagesCount)).map((num) => {
                const activeStyle = num === pageNum ? { border: `2px solid #4a67be`, background: `#f6fffc` } : {};

                return (
                  <Link key={num} to={`?page=${num}&limit=${reqLimit}`} className="page" style={activeStyle} onClick={() => setPageNum(num)}>
                    {num}
                  </Link>
                );
              })}
            </div>
            <Link to={`?page=${nextCacls}&limit=${reqLimit}`} className="next-page" style={nextStyle} onClick={() => setPageNum(nextCacls)}>
              Next
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pagination;
