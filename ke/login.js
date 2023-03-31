  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";
  import { initializeDatabase } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js";;



  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration


  const firebaseConfig = {
      apiKey: "AIzaSyC97t7eaaCixk_kajtt_UNtoHXbT8pBocI",
      authDomain: "netflix-clone-d3272.firebaseapp.com",
      projectId: "netflix-clone-d3272",
      storageBucket: "netflix-clone-d3272.appspot.com",
      messagingSenderId: "43292747543",
      appId: "1:43292747543:web:d611ffac64ae0548c5b952"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

  signup.addEventListener('click', (e) => {
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;

              alert("User Created!");
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;

              alert(errorMessage);
              // ..
          });
  })