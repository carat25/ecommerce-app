import styles from "./ProductDetails.module.scss";
import CardQuantity from "../cardquantity/CardQuantity";
import ProductVariant from "../productvariants";

const ProductDetails = ({ img, name, price, description, variants }) => {
  return (
    <div>
      <div className={styles.ProductDetails}>
        <img src={img} alt="product"></img>
        <h4>{name}</h4>
        <h5>Price: {price}</h5>
        <p>Product Description: {description}</p>
          <ProductVariant variants={variants} />
        <CardQuantity />
      </div>
    </div>
  );
};

export default ProductDetails;
