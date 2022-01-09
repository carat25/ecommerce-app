import {AddToCartButton} from "../buttons/AddToCart";
import {QuantityCount} from "../buttons/QuantityCount";
import { useEffect, useState } from "react";
import styles from "./CardQuantity.module.scss";

const CardQuantity = ({ onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className={styles.CardQuantity}>
      <QuantityCount
        quantity={quantity}
        onDecrement={() => setQuantity(quantity - 1)}
        onIncrement={() => setQuantity(quantity + 1)}
      />
      <AddToCartButton
        onClick={() => onAddToCart(quantity)}
      />
    </div>
  );
};

export default CardQuantity; 