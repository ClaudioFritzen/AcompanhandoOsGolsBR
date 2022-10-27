  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA4PbqzEm1eyuTB_yi_FogqvvnaSsUMZTE",
    authDomain: "realtimegolsdobr.firebaseapp.com",
    projectId: "realtimegolsdobr",
    storageBucket: "realtimegolsdobr.appspot.com",
    messagingSenderId: "274428719690",
    appId: "1:274428719690:web:0a1959363dd4666d662cb3",
    measurementId: "G-4STDTNFFTX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


export default app