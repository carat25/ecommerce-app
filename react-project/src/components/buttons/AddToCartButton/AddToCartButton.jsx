import styles from "./AddToCartButton.module.scss";

export const AddToCartButton = ({ onClick }) => {
  return (
    <div className={styles.AddToCart}>
      <button className={styles.AddButton} onClick={onClick}>
        Add To Cart
      </button>
    </div>
  );
};
