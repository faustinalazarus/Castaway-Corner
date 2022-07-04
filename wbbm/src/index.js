// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_M4MDFAEwo7GjUwi5XXyWR5Md1KClgPQ",
  authDomain: "castaway-corner.firebaseapp.com",
  projectId: "castaway-corner",
  storageBucket: "castaway-corner.appspot.com",
  messagingSenderId: "505251965914",
  appId: "1:505251965914:web:b196fd4e42abfae36a2ee3",
  measurementId: "G-S659TPPTXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


document.getElementById("signup").addEventListener('click', function(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log("created")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode + errorMessage);
    });

})
