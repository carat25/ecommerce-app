import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";



export const NavBar = ({cartItems}) => {


  return (
    <nav>
      <Link className={styles.NavBar} to="/HomePage">Home</Link>
      <div>
        <Link className={styles.NavBar} to="/CartPage">Cart</Link>
        <span className={styles.Count}>{cartItems.length}</span>
      </div>
    </nav>
  );
};
