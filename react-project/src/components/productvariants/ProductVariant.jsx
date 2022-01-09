import styles from "./ProductVariant.module.scss";

const ProductVariant = ({ variants, onSelect }) => {
  return (
    <div className={styles.variant}>
      <select
        defaultValue={"Default"}
        onInput={onSelect}
        className={styles.option}
        required
      >
        <option value="Default" disabled>Select a variant</option>
        {variants.map((variant) => (
          <option key={variant} className={styles.option}>
            {variant}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductVariant;
