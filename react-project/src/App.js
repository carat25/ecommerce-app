import "./App.module.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import HomePage from "./containers/home/HomePage";
import CartPage from "./containers/cartpage/CartPage";
import ProductInfo from "./containers/productpage/ProductPage";
import { NavBar } from "./components/navbar/NavBar";
import styles from "./App.module.scss";
import { CartContextProvider } from "./context/CartContext";


const App = () => {

  return (
    // <div className={styles.App}>
    <div className={styles.App}>
      <Router>
        <CartContextProvider>
          <header>
            <NavBar />
          </header>
          <Switch>
            <Route exact path="/">
              <Redirect to="/HomePage" />
            </Route>
            <Route exact path="/HomePage">
              <HomePage />
            </Route>
            <Route exact path="/CartPage">
              <CartPage />
            </Route>
            <Route path="/ProductInfo/:id">
              <ProductInfo />
            </Route>
          </Switch>
          <footer className={styles.footer}>
            <p>Free deliveries for orders over $50</p>
          </footer>
        </CartContextProvider>
      </Router>
    </div>
  );
};
export default App;
