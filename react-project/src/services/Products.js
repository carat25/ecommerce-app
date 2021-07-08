import firestore from "../firestore.js";



const products = [
  {
    imageURL: "https://cdn.luxe.digital/media/2020/08/14122944/best-women-gym-bag-value-boost-luxe-digital%402x.jpg",
    name: "Boost Sports Bag",
    price: "30",
    description: "Sports Gym Bag with Wet Pocket & Shoes Compartment for Women & Men",
    variants: [ "purple", "blue", "pink", "grey" ]
  },
  {
    imageURL: "https://images.asics.com/is/image/asics/1012A882_709_SR_RT_GLB?$zoom$",
    name: "Womens running shoes",
    price: "270",
    description: "The GEL-NIMBUS™ Lite 2 running shoe continues to build on our GEL-NIMBUS™ heritage by providing neutral runners with a lighter design and excellent cushioning. While the first iteration focused on combining a soft and lightweight design, this version builds on that same mindset but creates an even smoother cushioning experience. Part of our brand's sustainability initiative, this style also features a series of recycled materials while using fewer resources for a more eco-friendly design approach.",
    variants: [ "coral/white", "black/grape" ]
  },
  {
    imageURL: "https://gaiam.innovations.com.au/images/product/square/large/27-70152.jpg",
    name: "Essential Yoga Mat",
    price: "40",
    description: "Gaiam’s Essential Supprt yoga mat is ideal for those new to yoga and performs best in restorative to slower paced practises. The 4.5mm thickness provides a little extra cushioning combined with a ridged, light-tac surface giving the safety you need to enhance and maintain proper alignment. The midnight Mandala design is sure to delight. The Essential Support mat is also latex free and free of six harmful phthalates making it a better mat for both you and the planet"
  },
  {
    imageURL: "https://www.lornajane.com.au/dw/image/v2/BDXV_PRD/on/demandware.static/-/Sites-lornajane-master/default/dwaf6f7b65/images/052157/wrap-around-rib-ankle-biter-leggings-blue_052157-wamidi_2.jpg?sw=308&sh=433",
    name:"Ankle Leggings",
    price:"85",
    description: "Wrap Around Rib Ankle Biter Leggings",
    variants: ["XS", "S", "M", "L", "XL"]
  },
  {
    imageURL: "https://www.lornajane.com.au/dw/image/v2/BDXV_PRD/on/demandware.static/-/Sites-lornajane-master/default/dw53cc82de/images/062136/willpower-sports-bra-red_062136-mark_2.jpg?sw=308&sh=433",
    name: "Women's Sports Bra",
    price: "80",
    description:"Willpower Sports Bra",
    variants: ["XS", "S", "M", "L", "XL"]
  },
  {
    imageURL: "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/422807/item/goods_65_422807.jpg?width=1600&impolicy=quality_75",
    name: "Womens Full zip Hoodie",
    price: "30",
    description: "AIRism mesh makes it lightweight so you can throw it on with ease. Perfect for protecting you from getting sunburned while outside.UPF50",
    variants: ["XS", "S", "M", "L", "XL"]

  }

];


//C in CRUD
//add all the items above to the firestore collection
const seedProducts = async () => {
  const productCollection = firestore.collection("products"); //this is setting the collection

  //query snapshot
  const items = await productCollection.get(); //getting data from the collection
  if (items.size > 0) {
    return;
  }
  //returns an array of promises
  //asynchronous functions always return array of promises
  //if there is nothing in the collection, then I'm going to await all those promises
  const promises = products.map(async (product) => {
    return await productCollection.add(product);
  });
  const resolvedReferences = await Promise.all(promises);
};

//R in CRUD
//get all the items in the firestore collection
export const getProducts = async () => {
  //method that will return collection reference
  await seedProducts();

  const productCollection = firestore.collection("products");
  const queryItems = await productCollection.get();

  const documents = queryItems.docs;

  return documents.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (productId) => {
  const products = await getProducts();
  return products.find(product => product.id ===productId)
  
};

// D in CRUD
export const deleteProduct = async (id) => {
    // DocumentReference
    const productCollection = firestore.collection("products").doc(id);
    // DocumentReference.delete
    await productCollection.delete();
};

// U in CRUD
export const updateProducts = async (id, record) => {
    const productCollection = firestore.collection("products").doc(id);
    await productCollection.update(record);
};

export const addProduct = async (record) => {
    const productCollection = firestore.collection("products");
    await productCollection.add(record);
};






