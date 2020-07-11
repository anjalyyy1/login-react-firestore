import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAGg4DvLTH4Uc-JqOB14V1wrTk2C3CsKs",
  authDomain: "login-react-firestore.firebaseapp.com",
  databaseURL: "https://login-react-firestore.firebaseio.com",
  projectId: "login-react-firestore",
  storageBucket: "login-react-firestore.appspot.com",
  messagingSenderId: "1014081323833",
  appId: "1:1014081323833:web:ef2351b60c939da390dee8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
  timestampsInSnapshots: true
});

const storage = firebase.storage();

export { storage };
export default firebase;
