import firebase from "firebase";
var firebaseConfig = {
  //your firebase config info
  apiKey: "AIzaSyBvg08iF5M22ukGTBsh_JOhucCstS5JzXQ",
  authDomain: "instagramclone-975f9.firebaseapp.com",
  projectId: "instagramclone-975f9",
  storageBucket: "instagramclone-975f9.appspot.com",
  messagingSenderId: "205197972268",
  appId: "1:205197972268:web:12e63f7c82db6580449289",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
