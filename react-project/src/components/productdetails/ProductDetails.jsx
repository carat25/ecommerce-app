import styles from "./ProductDetails.module.scss";
import CardQuantity from "../cardquantity/CardQuantity";
import ProductVariant from "../productvariants";
import { addCartItem } from "../../services/CartItems";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ProductDetails = ({ product }) => {
  const { onCartChanged, onSelectHandler, variant, setVariant } =
    useContext(CartContext);
  const { imageURL, name, price, description, variants } = product;

  const handleOnAddToCart = async (quantity) => {
    if (quantity <= 0) {
      return;
    }
    await addCartItem({ product, quantity, variant });
    onCartChanged();
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
