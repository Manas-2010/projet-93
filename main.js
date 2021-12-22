const firebaseConfig = {
    apiKey: "AIzaSyCiq6_KBM_I6dglRpa_OOGVahd54th0iBc",
    authDomain: "lets-chat-19581.firebaseapp.com",
    databaseURL: "https://lets-chat-19581-default-rtdb.firebaseio.com",
    projectId: "lets-chat-19581",
    storageBucket: "lets-chat-19581.appspot.com",
    messagingSenderId: "164275295070",
    appId: "1:164275295070:web:62899d4eaf91dae3f5b5cf"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function log_in(){
  localStorage.setItem("username", username);
    username = document.getElementById("username").value;
    firebase.database().ref("/").child("username").update({
    username: username
});
}