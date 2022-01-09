import CartCard from "../../components/cartcard";
import styles from "./CartPage.module.scss";
import { useContext } from "react";
import {CartContext} from "../../context/CartContext";


const CartPage = () => {
  const { cartItems, onCartChanged } = useContext(CartContext);
  const calculateTotalPrice = () => {
    return cartItems.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);

    // const calculateTotalPrice = () => {
    //   return cartItems.map((cartItem) => cartItem.price * cartItem.quantity).reduce ((sum, itemPrice) => sum + itemPrice
    // ,0)
  };

  return (
    <div className={styles.CartPage}>
      <h3 className={styles.header}>Shopping Cart</h3>
      <h5 className={styles.price}>Price</h5>
      {cartItems.map((cartItem) => (
        <CartCard
          key={cartItem.id}
          item={cartItem}
          onCartChanged={onCartChanged}
        />
      ))}

      <h4 className={styles.price}>Subtotal: ${calculateTotalPrice()}</h4>
    </div>
  );
};

export default CartPage;
