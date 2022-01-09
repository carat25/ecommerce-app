import { createContext, useState, useEffect } from "react";
import { getItems } from "../services/CartItems";

export const CartContext = createContext({});

export const CartContextProvider = ({ children }, variants) => {
  const [cartItems, setCartItems] = useState([]);
  const [variant, setVariant] = useState(undefined);


  const getCartItems = async () => {
    const items = await getItems();
    setCartItems(items);
  };

  useEffect(() => {
    getCartItems();
  }, []);

  const onSelectHandler = (event) => {
    setVariant(event.target.value);
  };


  const onCartChanged = () => getCartItems();


  return (
    <CartContext.Provider
      value={{
        cartItems,
        onCartChanged,
        onSelectHandler,
        variant,
        setVariant
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
