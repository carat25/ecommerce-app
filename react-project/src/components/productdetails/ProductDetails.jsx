import styles from "./ProductDetails.module.scss";
import CardQuantity from "../cardquantity/CardQuantity";
import ProductVariant from "../productvariants";
import { addCartItem } from "../../services/CartItems";
import { useEffect, useState } from "react";

const ProductDetails = ({ product, onCartChanged }) => {
  const { imageURL, name, price, description, variants } = product;
  const [variant, setVariant] = useState(undefined);

  const handleOnAddToCart = async(quantity) => {
    await addCartItem({ product, quantity, variant });
    onCartChanged();
  };

  const onSelectHandler = (event) => {
    setVariant(event.target.value);
  };

  useEffect(() => {
    setVariant(variants[0]);
  }, []);

  return (
    <div>
      <div className={styles.ProductDetails}>
        <img className={styles.img} src={imageURL} alt="product"></img>
        <div className={styles.info}>
          <h4 className={styles.name}>{name}</h4>
          <h5 className={styles.desc}>Price: {price}</h5>
          <ProductVariant
            variants={variants}
            onSelect={onSelectHandler}
            className={styles.variant}
          />
          <p className={styles.desc}>Product Description: </p>
          <p className={styles.desc}>{description}</p>
        </div>
        <CardQuantity
          onAddToCart={handleOnAddToCart}
          className={styles.button}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
