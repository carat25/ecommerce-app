import CartCard from "../../components/cartcard";
import styles from "./CartPage.module.scss";


const CartPage = ({cartItems, onCartChanged}) => {

  
  return (
    <div className={styles.CartPage}>
      <h3 className={styles.header}>Shopping Cart</h3>
      <div className={styles.container}>
        {cartItems.map((cartItem) => (
          <CartCard key={cartItem.id} item={cartItem} onCartChanged={onCartChanged}/>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
