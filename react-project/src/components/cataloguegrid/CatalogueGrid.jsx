import ProductCard from "../productcard/ProductCard";
import { getProducts } from "../../services/Products";
import { useState, useEffect, useContext } from "react";
import styles from "./CatalogueGrid.module.scss";
import ProductVariant from "../productvariants";
import { CartContext } from "../../context/CartContext";


const CatalogueGrid = () => {
  const [products, setProducts] = useState([]);
  const { onCartChanged } = useContext(CartContext);

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
