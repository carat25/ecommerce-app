import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";



export const NavBar = ({cartItems}) => {


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
