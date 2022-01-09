import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { CartContext } from "../../context/CartContext";


export const NavBar = () => {
const { cartItems } = useContext(CartContext);

  return (
    <nav>
        <Link to="/HomePage" className={styles.NavBar}>Home</Link>
      <div>
        <Link to="/CartPage" className={styles.NavBar}>Cart</Link>
        <span className={styles.Count}>({cartItems.length})</span>
      </div>
    </nav>
  );
};
