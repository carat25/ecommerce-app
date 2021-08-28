import CatalogueGrid from "../../components/cataloguegrid/CatalogueGrid";
import styles from "./HomePage.module.scss";

const HomePage = ({ onCartChanged }) => {
  return (
    <header className={styles.Home}>
      <h1 className={styles.Heading}>sprinkles and dreams</h1>
      <main className={styles.main}>
        <h3 className={styles.secondheader}>Available Products</h3>
        <CatalogueGrid
          className={styles.catalogue}
          onCartChanged={onCartChanged}
        />
      </main>
    </header>
  );
};

export default HomePage;
