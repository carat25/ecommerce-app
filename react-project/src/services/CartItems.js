import firestore from "../firestore.js";

export const getItems = async () => {
  //method that will return collection reference

  const cartCollection = firestore.collection("cartItems");
  
  const queryItem = await cartCollection.get();

  const documents = queryItem.docs;

  return documents.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const addCartItem = async (record) => {
  const { product, quantity, variant } = record;
  const cartItems = await getItems();
  const existingCartItem = cartItems.find(
    ({ product: eachProduct, variant: eachVariant }) => {
      return eachProduct.id === product.id && eachVariant === variant;
    }
  );
  if (existingCartItem) {
    await updateCartItem(existingCartItem.id, {
      ...existingCartItem,
      quantity: existingCartItem.quantity + quantity,
    });
  } else {
    await createCartItem(record);
  }
};

export const createCartItem = async (record) => {
  const cartCollection = firestore.collection("cartItems");
  await cartCollection.add(record);
};

export const updateCartItem = async (id, record) => {
  const cartItem = firestore.collection("cartItems").doc(id);
  await cartItem.update(record);
};

export const deleteCartItem = async (id) => {
  // DocumentReference
  const cartItem = firestore.collection("cartItems").doc(id);
  // DocumentReference.delete
  await cartItem.delete();
};
