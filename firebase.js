
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyD4UUUB6SEqn4YEdMVvJpsR_NyVID3PgLs",
    authDomain: "fir-c0b49.firebaseapp.com",
    projectId: "fir-c0b49",
    storageBucket: "fir-c0b49.firebasestorage.app",
    messagingSenderId: "188576969837",
    appId: "1:188576969837:web:6fa7e5ae045b2242b7fb64",
    measurementId: "G-P106DQ4QSQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth= getAuth(app);


  export{
    auth,signInWithEmailAndPassword,createUserWithEmailAndPassword
  }
