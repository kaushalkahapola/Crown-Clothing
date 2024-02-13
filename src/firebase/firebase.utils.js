import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD8HxjqW-Vgy-gI41r9n60amB9Pe26PtCc",
    authDomain: "crown-clothing-7a339.firebaseapp.com",
    projectId: "crown-clothing-7a339",
    storageBucket: "crown-clothing-7a339.appspot.com",
    messagingSenderId: "493239371808",
    appId: "1:493239371808:web:0ff925cc55a22257979445",
    measurementId: "G-LW2K8M4QNV"
  };  

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const filestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;