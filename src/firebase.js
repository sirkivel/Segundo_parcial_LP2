import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsU-alO7BIPgOaZv3FglCQYwTP5FYHQXg",
  authDomain: "nexfli.firebaseapp.com",
  projectId: "nexfli",
  storageBucket: "nexfli.appspot.com",
  messagingSenderId: "441261105981",
  appId: "1:441261105981:web:608c264f7e95aaf341db54",
  measurementId: "G-3W54EF431V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
