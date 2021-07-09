import ProductCard from "../productcard/ProductCard";
import { getProducts } from "../../services/Products";
import { useState, useEffect } from "react";
import styles from "./CatalogueGrid.module.scss";

const CatalogueGrid = ({onCartChanged}) => {
  const [products, setProducts] = useState([]);

  const getItems = async () => {
    const items = await getProducts();
    setProducts(items);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (

      <div className={styles.CatalogueGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onCartChanged={onCartChanged}/>
        ))}
      </div>

  );
};

export default CatalogueGrid;
