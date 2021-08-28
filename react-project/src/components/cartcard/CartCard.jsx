import styles from "./CartCard.module.scss";
import { QuantityCount } from "../buttons/QuantityCount";
import { DeleteInCart } from "../buttons/DeleteInCart";
import { deleteCartItem, updateCartItem } from "../../services/CartItems";

const CartCard = ({ item, onCartChanged }) => {
  const { product, quantity, variant } = item;
  const { imageURL, name, price } = product;

  const onDecrementHandler = async () => {
    const updatedItem = { ...item, quantity: quantity - 1 };
    await updateCartItem(updatedItem.id, updatedItem);
    onCartChanged();
  };
  const onIncrementHandler = async () => {
    const updatedItem = { ...item, quantity: quantity + 1 };
    await updateCartItem(updatedItem.id, updatedItem);
    onCartChanged();
  };

  const handleDelete = async () => {
    await deleteCartItem(item.id);
    onCartChanged();
  };
  const calculateItemPrice = () => {
    return quantity * price;
  };

  return (
    <div className={styles.CartCard}>
      <img className={styles.img} src={imageURL} alt="product"></img>
      <div className={styles.details}>
        <h4 className={styles.name}>{name}</h4>
        <h4 className={styles.variant}>Unit Price: {price}</h4>
        <h5 className={styles.variant}>Variant: {variant}</h5>
        <QuantityCount
          className={styles.qtycount}
          quantity={quantity}
          onDecrement={onDecrementHandler}
          onIncrement={onIncrementHandler}
        />
        <DeleteInCart onClick={handleDelete} className={styles.delete} />
      </div>
      <h4 className={styles.price}>${calculateItemPrice()}</h4>
    </div>
  );
};

export default CartCard;
