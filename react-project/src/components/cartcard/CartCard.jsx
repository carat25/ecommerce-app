
import styles from "./CartCard.module.scss";
import { QuantityCount } from "../buttons/QuantityCount";
import { DeleteInCart } from "../buttons/DeleteInCart";
import { deleteCartItem, updateCart } from "../../services/CartItems";


const CartCard = ({ item, onCartChanged }) => {
  const { product, quantity } = item;
  const { imageURL, name, price, id } = product;
 



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

  return (
    <div>
      <div className={styles.CartCard}>
        <img className={styles.img} src={imageURL} alt="product"></img>
        <div className={styles.details}>
          <h4 className={styles.name}>{name}</h4>
          <h5 className={styles.price}>$ {price}</h5>
          <QuantityCount
            className={styles.qtycount}
            quantity={quantity}
            onDecrement={onDecrementHandler}
            onIncrement={onIncrementHandler}
          />
          <DeleteInCart onClick={handleDelete} className={styles.delete} />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
