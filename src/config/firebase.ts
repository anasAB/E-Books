 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";

 import { getDatabase } from "firebase/database";
 import firebase from 'firebase/app';
 import 'firebase/database';


// TODO replace it with var from env
const firebaseConfig = {
  databaseURL: "https://ebooks-7541b-default-rtdb.firebaseio.com/",
  apiKey: "AIzaSyDa4IblD5DQJlrCio1Ln0pxumfhZy1RxLs",
  authDomain: "ebooks-7541b.firebaseapp.com",
  projectId: "ebooks-7541b",
  storageBucket: "ebooks-7541b.appspot.com",
  messagingSenderId: "540068557430",
  appId: "1:540068557430:web:5f45bb890646530183a557",
  measurementId: "G-8J1N1CQK7R"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

// firebase.initializeApp(firebaseConfig);



// Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);

// export const db = getDatabase(app); // RealTime DataBase

