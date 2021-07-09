import CartCard from "../../components/cartcard";
import styles from "./CartPage.module.scss";


const CartPage = ({cartItems, onCartChanged}) => {

  const calculateTotalPrice = () => {
    return cartItems.reduce ((sum, item) => { 
      return sum + (item.product.price * item.quantity) 
    }, 0);

  // const calculateTotalPrice = () => {
  //   return cartItems.map((cartItem) => cartItem.price * cartItem.quantity).reduce ((sum, itemPrice) => sum + itemPrice
  // ,0)

}
  
  return (
    <div className={styles.CartPage}>
      <h3 className={styles.header}>Shopping Cart</h3>
      <div className={styles.price}>
        <h5>Price</h5>
      </div>
      <div className={styles.container}>
        {cartItems.map((cartItem) => (
          <CartCard key={cartItem.id} item={cartItem} onCartChanged={onCartChanged}/>
        ))}
      </div>
      <div className={styles.totalprice}>
        <h4>Subtotal: ${calculateTotalPrice()}</h4>
      </div>
    </div>
  );
};

export default CartPage;
