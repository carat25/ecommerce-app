import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARlxSWyPRAf0-7MPJ23kbmr4FJP2znNSo",
  authDomain: "react-persistence-683ac.firebaseapp.com",
  projectId: "react-persistence-683ac",
  storageBucket: "react-persistence-683ac.appspot.com",
  messagingSenderId: "231865853380",
  appId: "1:231865853380:web:c078f9d92ced4b82523091"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore(); //return all firestore objects