import styles from "./ProductVariant.module.scss"

const ProductVariant = ({variants, onSelect}) => {
  return (
    <div className={styles.variant}>
      <select onInput={onSelect} className={styles.option} required>
        {variants.map((variant) => <option key={variant} className={styles.option}>{variant}</option>)}
      </select>
    </div>
  );
};

export default ProductVariant;
