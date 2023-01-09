import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBvn76-Ks7Bfm87yuGQJ835IX8DAXjwrho",
    authDomain: "cookingsite-686c7.firebaseapp.com",
    projectId: "cookingsite-686c7",
    storageBucket: "cookingsite-686c7.appspot.com",
    messagingSenderId: "12345949499",
    appId: "1:12345949499:web:ac00a09bdd1349d3ef4b1e"
  };

//   init
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()


export { projectFirestore }