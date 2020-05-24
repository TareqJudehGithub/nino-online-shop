//firebase imports setup:
import firebase from "firebase/app";

import "firebase/firestore"; //db
import "firebase/auth";      //authentication


const config = {
     apiKey: "AIzaSyBDN3ElWrVSETlOFx25-dA45H2AN7RJRvY",
     authDomain: "ninoz-shopdb.firebaseapp.com",
     databaseURL: "https://ninoz-shopdb.firebaseio.com",
     projectId: "ninoz-shopdb",
     storageBucket: "ninoz-shopdb.appspot.com",
     messagingSenderId: "55213092449",
     appId: "1:55213092449:web:1dee39b1c66c8ff655c420",
     measurementId: "G-T0VGTWQVQM"
   };

   firebase.initializeApp(config);

//authentication import: (we import this whenever we needed authentication)
export const auth = firebase.auth();  
//database import: (we import this whenever we needed the use of database)
export const firestore = firebase.firestore();

//Google authentication utility:

   //A. determines which auth to access (in our case access to google authentication) 
   //from the auth library: 
const provider = new firebase.auth.GoogleAuthProvider();
   //B. trigger the google popup menu, whenever we use googleAuthProvier();
provider.setCustomParameters({ prompt: "select_account"})
   //C. func that determines which popup we are calling:  (google or email/password)
export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase;  //in case we needed the whole library
