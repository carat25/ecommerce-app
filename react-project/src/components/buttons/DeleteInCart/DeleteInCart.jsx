import styles from "./DeleteInCart.module.scss";

export const DeleteInCart = ({ onClick }) => {
  return (
    <div>
      <button className={styles.Delete} onClick={onClick}>Delete</button>
    </div>
  );
};
