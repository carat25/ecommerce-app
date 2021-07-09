import styles from "./ProductDetails.module.scss";
import CardQuantity from "../cardquantity/CardQuantity";
import ProductVariant from "../productvariants";
import { addCartItem } from "../../services/CartItems";
import { useState } from "react";

const ProductDetails = ({ product, onCartChanged }) => {
  const { imageURL, name, price, description, variants } = product;
  const [variant, setVariant] = useState(undefined);

  const handleOnAddToCart = (quantity) => {
    addCartItem({ product, quantity, variant });
    onCartChanged();
  };

  const onSelectHandler = (event) => {
    setVariant(event.target.value);
  };

  return (
    <div>
      <div className={styles.ProductDetails}>
        <div className={styles.imgwrap}>
          <img className={styles.img} src={imageURL} alt="product"></img>
        </div>
        <div>
          <p className={styles.desc}>Product Description: {description}</p>
        </div>
        <div>
          <h4 className={styles.name}>{name}</h4>
          <h5 className={styles.price}>Price: {price}</h5>
          <ProductVariant
            variants={variants}
            onSelect={onSelectHandler}
            className={styles.variant}
          />
        </div>
        <div>
          <CardQuantity
            onAddToCart={handleOnAddToCart}
            className={styles.button}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
