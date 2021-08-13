var firebaseConfig = {
    apiKey: "AIzaSyAWd0knrQ9wvgNIrNMiP1MEuoReFJLmpq4",
    authDomain: "kwitter-7ac57.firebaseapp.com",
    databaseURL: "https://kwitter-7ac57-default-rtdb.firebaseio.com",
    projectId: "kwitter-7ac57",
    storageBucket: "kwitter-7ac57.appspot.com",
    messagingSenderId: "730551301040",
    appId: "1:730551301040:web:bbc68cf08f2d14f4609c75",
    measurementId: "G-3YGMLXTSRX"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



  function Adduser(){
      user_name = document.getElementById("input").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }
