import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore';
import { doc, getDoc, setDoc } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyD8HxjqW-Vgy-gI41r9n60amB9Pe26PtCc",
    authDomain: "crown-clothing-7a339.firebaseapp.com",
    projectId: "crown-clothing-7a339",
    storageBucket: "crown-clothing-7a339.appspot.com",
    messagingSenderId: "493239371808",
    appId: "1:493239371808:web:0ff925cc55a22257979445",
    measurementId: "G-LW2K8M4QNV"
  }; 
  
  
  const app = firebase.initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = doc(db, `users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef);
  
    if (!snapShot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userRef, {
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (err) {
        console.log('error creating user', err.message);
      }
    }
  
    return userRef;
  };
  
  export default firebase;