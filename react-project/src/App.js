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
import { getItems } from "./services/CartItems";
import { useState, useEffect } from "react";



const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = async () => {
    const items = await getItems();
    setCartItems(items);
  };

  useEffect(() => {
    getCartItems();
  }, []);

  const onCartChanged = () => getCartItems();

  return (
    // <div className={styles.App}>
    <div 
    className={styles.App}>
      <Router>
          <header>
            <NavBar cartItems={cartItems}/>
          </header>
          <Switch>
            <Route exact path="/">
              <Redirect to="/HomePage" />
            </Route>
            <Route exact path="/HomePage">
              <HomePage onCartChanged={onCartChanged}/>
            </Route>
            <Route exact path="/CartPage">
              <CartPage onCartChanged={onCartChanged} cartItems={cartItems}/>
            </Route>
            <Route path="/ProductInfo/:id">
              <ProductInfo onCartChanged={onCartChanged}/>
            </Route>
          </Switch>
          <footer className={styles.footer}>
            <p>Free deliveries for orders over $50</p>
          </footer>
      </Router>
    </div>
  );
};
export default App;
