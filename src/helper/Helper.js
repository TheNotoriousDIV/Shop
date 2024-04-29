const ShortenText = (text) => {
  return text.split(" ").slice(0,3).join("");                 
}

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((p)=>
  p.title.toLowerCase().includes(search));
  return searchedProducts;
  
}

const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter((p) =>
  p.category === category);
  console.log(products , category)
  return filteredProducts; 
}

export {ShortenText , searchProducts , filterProducts}