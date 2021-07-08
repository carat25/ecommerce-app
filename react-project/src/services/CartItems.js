import firestore from "../firestore.js";

export const getItems = async () => {
  //method that will return collection reference
 
  const cartCollection = firestore.collection("cartItems");
  const queryItem = await cartCollection.get();

  const documents = queryItem.docs;

  return documents.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const addCartItem = async (record) => {
  const cartCollection = firestore.collection("cartItems");
  await cartCollection.add(record);
};

export const updateCart = async (id, record) => {
  const cartCollection = firestore.collection("cartItems").doc(id);
  await cartCollection.update(record);
};

export const deleteCartItem = async (id) => {
  // DocumentReference
  const cartCollection = firestore.collection("cartItems").doc(id);
  // DocumentReference.delete
  await cartCollection.delete();
};
