import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductsPage.module.css";
import { useEffect, useState } from "react";
import { filterProducts, getInitialQuery, searchProducts } from "../helper/Helper";
import { useParams, useSearchParams } from "react-router-dom";
import { SearchBox } from "../components/SearchBox";
import SideBar from "../components/SideBar";



const ProductsPage = () => {
  const products = useProducts();

  const [search, setSearch] =useState ("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams)); 
  },[products]);

  useEffect(() => {
   setSearchParams(query)
   let finalProducts = searchProducts(products, query.search);
   setSearch(query.search || "");
   finalProducts = filterProducts(finalProducts , query.category);
   setDisplayed(finalProducts);
  }, [query]);

 

  
  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <SideBar query={query} setQuery={setQuery} />
      </div>
    </>
  );
};

export default ProductsPage;
