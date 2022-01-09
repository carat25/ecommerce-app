import CardQuantity from "../cardquantity/CardQuantity";
import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import { addCartItem } from "../../services/CartItems";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import ProductVariant from "../productvariants";

const ProductCard = ({ product }) => {
  const { onCartChanged, onSelectHandler, variant, setVariant } = useContext(CartContext);
  const { imageURL, name, price, id, variants } = product;

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

  const productInfoUrl = `/ProductInfo/${id}`;

  return (
    <div className={styles.ProductCard}>
      <section>
        <img className={styles.img} src={imageURL} alt="product"></img>
        <Link className={styles.link} to={productInfoUrl}>
          <h4 className={styles.name}>{name}</h4>
        </Link>
        <h5 className={styles.price}>Price: ${price}</h5>
        <ProductVariant
          variants={variants}
          onSelect={onSelectHandler}
          className={styles.variant}
        />
        <CardQuantity onAddToCart={handleOnAddToCart} />
      </section>
    </div>
  );
};

export default ProductCard;
