//firebase imports setup:
import firebase from "firebase/app";
import "firebase/firestore"; //db
import "firebase/auth";      //authentication


const config = {
   apiKey: "AIzaSyCIRAxQQkja29M1hni-z3FH-Vgac_GRQng",
    authDomain: "nino-s-shop.firebaseapp.com",
    databaseURL: "https://nino-s-shop.firebaseio.com",
    projectId: "nino-s-shop",
    storageBucket: "nino-s-shop.appspot.com",
    messagingSenderId: "1009451037034",
    appId: "1:1009451037034:web:16bd857f7e57e2796b7513",
    measurementId: "G-G8B6X5F982"
   };
   firebase.initializeApp(config);

//Storing user Data in Firebase:
 
 export const createUserProfileDocument = async (userAuth, additionalData) => {

   if (!userAuth) return;  
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get(); 

      if(!snapShot.exists) {
         //create the db using userRef
         const { displayName, email } = userAuth;
         const createdAt = new Date();  
         try {
            await userRef.set({ 
               displayName,
               email,
               createdAt,
               ...additionalData
            })
         } catch (error) {
            console.log("error creating user", error.message);
         }
      }
      return userRef;
   };

   // storing shop items in firestore db:
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
   const collectionRef = firestore.collection(collectionKey);

   const batch = firestore.batch();
   objectsToAdd.forEach(obj => {
      // give a new document reference in this collection, and randomly generate a new ID:
      const newDocRef = collectionRef.doc(); 
      // batcj all together:
      batch.set(newDocRef, obj);
   });

   return await batch.commit();
};

export const auth = firebase.auth();  
export const firestore = firebase.firestore();

//Google authentication utility:

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
