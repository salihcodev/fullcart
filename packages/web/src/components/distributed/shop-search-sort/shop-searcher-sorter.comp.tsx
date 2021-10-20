// pkgs:
import { useEffect, useState, VFC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import FormInput from '../form-input/form-input.comp';

// utils:
import './style.sass';

// comps:

// component>>>
const ShopSearcherSorter: VFC<{}> = () => {
  // input state
  const [inputValue, setInputValue] = useState<null | string>(null);
  const [shopUserAction, setShowUserAction] = useState<boolean>(false);

  const handelShopSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (inputValue && inputValue.length > 0) setShowUserAction(true);
  };

  // TODO: make user action only appearers on click.
  useEffect(() => {
    if (inputValue?.length === 0) setShowUserAction(false);
  }, [inputValue?.length]);

  return (
    <section className="search-and-sort">
      <div className="search">
        <form onSubmit={handelShopSearch}>
          <FormInput
            autoComplete="off"
            type="text"
            inputName="shopSearchInput"
            placeholder="Search"
            collectInputData={(_, value) => setInputValue(value)}
          />
          <button type="submit">
            <AiOutlineSearch />
          </button>
        </form>
        <p className="searched-in">
          {shopUserAction ? (
            <em>
              Searching for <span className="search-value">{inputValue}</span>
            </em>
          ) : null}
        </p>
      </div>
      {shopUserAction ? (
        <div className="sort">
          <span className="tag">Sort</span>
          <button type="button">Relevance</button>
          <button type="button">Popular</button>
          <button type="button">Most new</button>
          <button type="button">Price range</button>
        </div>
      ) : null}
    </section>
  );
};

export default ShopSearcherSorter;
