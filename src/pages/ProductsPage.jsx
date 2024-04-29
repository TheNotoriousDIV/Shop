import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductsPage.module.css";
import { IoSearch } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { useEffect, useState } from "react";
import { filterProducts, searchProducts } from "../helper/Helper";



const ProductsPage = () => {
  const products = useProducts();

  const [search, setSearch] =useState ("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  

  useEffect(() => {
    setDisplayed(products);
  },[products]);

  useEffect(() => {
   let finalProducts = searchProducts(products, query.search);
   finalProducts = filterProducts(finalProducts , query.category);
   setDisplayed(finalProducts);
  }, [query]);

  const searchHandler = () => {
    setQuery((query) => ({...query, search}))
  };

  const categoryHandler = (event) => {
    const {tagName} = event.target;
    const category = event.target.innerText.toLowerCase();

    if(tagName !== "LI") return;
    setQuery((query) => ({...query, category}));
  };
  return (
    <>
      <div>
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
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>
          <div>
          <FaListUl />
          <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronic</li>
            <li>Jew</li>
            <li>Man Clothing</li>
            <li>Woman Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
