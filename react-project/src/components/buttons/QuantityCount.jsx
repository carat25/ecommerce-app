import styles from "./QuantityCount.module.scss";


export const QuantityCount = ({ quantity, onDecrement, onIncrement }) => {
  const decrement = (event) => {
    if (quantity !== 0) onDecrement();
  };

  const increment = (event) => {
    onIncrement();
  };

  return (
    <div className={styles.QuantityCount}>
      Qty: 
      <button className={styles.Button} onClick={decrement}>-</button>
      {quantity}
      <button className={styles.Button}onClick={increment}>+</button>
    </div>
  );
};

