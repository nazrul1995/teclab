// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUe88tCTLZTXlKyRdaKYw8ES_C5Li3AHo",
  authDomain: "bdstartechbynazrul.firebaseapp.com",
  projectId: "bdstartechbynazrul",
  storageBucket: "bdstartechbynazrul.firebasestorage.app",
  messagingSenderId: "441235654651",
  appId: "1:441235654651:web:f3106ce51dd8b8be8c2d5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);