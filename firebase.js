// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAifqLk7YzCScLcjFQbn_meWcGTEbHgy-c",
  authDomain: "aplicativolista-6acb5.firebaseapp.com",
  projectId: "aplicativolista-6acb5",
  storageBucket: "aplicativolista-6acb5.appspot.com",
  messagingSenderId: "196662335075",
  appId: "1:196662335075:web:f61cc54f67fd7159034a56",
  measurementId: "G-9ZXLGRD4M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;