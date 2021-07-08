import styles from "./AddToCart.module.scss";

export const AddToCartButton = ({ onClick }) => {
  return (
    <div className={styles.AddToCart}>
      <button className={styles.AddButton} onClick={onClick}>
        Add To Cart
      </button>
    </div>
  );
};
