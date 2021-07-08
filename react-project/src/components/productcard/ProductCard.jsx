import CardQuantity from "../cardquantity/CardQuantity";
import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import { addCartItem } from "../../services/CartItems";


const ProductCard = ({ product, onCartChanged }) => {
  const { imageURL, name, price, id } = product;



  const handleOnAddToCart = (quantity) => {
    addCartItem({ product, quantity });
    onCartChanged();
  };

  const productInfoUrl = `/ProductInfo/${id}`;

  return (
    <div className={styles.ProductCard}>
      <section>
        <img className={styles.img} src={imageURL} alt="product"></img>
        <Link className={styles.link} to={productInfoUrl}>
          <h4 className={styles.name}>{name}</h4>
        </Link>
        <h5 className={styles.price}>Price: ${price}</h5>
        <CardQuantity onAddToCart={handleOnAddToCart} />
      </section>
    </div>
  );
};

export default ProductCard;
