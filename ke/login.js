  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import {
      getAuth,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";


  const firebaseConfig = {
      apiKey: "AIzaSyCTc7BHlneKZTVMrmuPHH_edA0ecQGkRG8",
      authDomain: "netflix-clone-9dae2.firebaseapp.com",
      projectId: "netflix-clone-9dae2",
      storageBucket: "netflix-clone-9dae2.appspot.com",
      messagingSenderId: "145216908862",
      appId: "1:145216908862:web:d5584719779fe63dd8ab6f"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();