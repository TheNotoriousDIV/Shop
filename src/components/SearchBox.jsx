import { IoSearch } from "react-icons/io5";

import { createQueryObject } from "../helper/Helper";

import styles from "../components/SearchBox.module.css";

export const SearchBox = ({search , setSearch , setQuery}) => {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <IoSearch />
      </button>
    </div>
  );
};
