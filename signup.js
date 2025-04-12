// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnbjSOaMPeevxUwa6d171UAB2WllnPuR0",
  authDomain: "hakathon-cfc74.firebaseapp.com",
  projectId: "hakathon-cfc74",
  storageBucket: "hakathon-cfc74.firebasestorage.app",
  messagingSenderId: "654511831530",
  appId: "1:654511831530:web:f2e1a4ea4eec80d1c85a93",
  measurementId: "G-7B76E8FDPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const btn = document.getElementById("signup");
btn.addEventListener("click", function(event){
    event.preventDefault()

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("You Are Sign Up!");
    window.location.href = "login.html";

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error..");
    // ..
  });
})



