import { useEffect, useState } from "react";
import ProductDetails from "../../components/productdetails";
import { getProductById, getProducts } from "../../services/Products";
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss"

const ProductPage = ({onCartChanged}) => {
  const [product, setProduct] = useState(null);
  let { id } = useParams();

  useEffect(() => {

    const getData = async () => {
        let product = await getProductById(id);
        setProduct(product);
    };

    getData();
  }, []);

  return product === null ? null : (
    <div className={styles.ProductPage}>
      <ProductDetails
        key={product.id}
        product={product}
        onCartChanged={onCartChanged}
      />
    </div>
  );
};

export default ProductPage;
