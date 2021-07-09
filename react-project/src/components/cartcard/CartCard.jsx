
import styles from "./CartCard.module.scss";
import { QuantityCount } from "../buttons/QuantityCount";
import { DeleteInCart } from "../buttons/DeleteInCart";
import { deleteCartItem, updateCart } from "../../services/CartItems";

const CartCard = ({ item, onCartChanged }) => {
  const { product, quantity, variant } = item;
  const { imageURL, name, price } = product;

  const onDecrementHandler = async () => {
    const updatedItem = { ...item, quantity: quantity - 1 };
    await updateCart(updatedItem.id, updatedItem);
    onCartChanged();
  };
  const onIncrementHandler = async () => {
    const updatedItem = { ...item, quantity: quantity + 1 };
    await updateCart(updatedItem.id, updatedItem);
    onCartChanged();
  };

  const handleDelete = async () => {
    await deleteCartItem(item.id);
    onCartChanged();
  };
  const calculateItemPrice = () => {
    return quantity * price;
  }

  return (
    <div>
      <div className={styles.CartCard}>
        <div className={styles.details}>
          <img className={styles.img} src={imageURL} alt="product"></img>
          <h4 className={styles.name}>{name}</h4>
          <h5 className={styles.name}>Variant: {variant}</h5>
          <QuantityCount
            className={styles.qtycount}
            quantity={quantity}
            onDecrement={onDecrementHandler}
            onIncrement={onIncrementHandler}
          />
          <DeleteInCart onClick={handleDelete} className={styles.delete} />
        </div>
        <h4 className={styles.name}>${calculateItemPrice()}</h4>
      </div>
    </div>
 
  );
};

export default CartCard;
