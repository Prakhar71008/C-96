var firebaseConfig = {
    apiKey: "AIzaSyAqmSKAWnsQyUhYEuafaRbuCdA36R3qg1g",
    authDomain: "kwitter-c6dbd.firebaseapp.com",
    databaseURL: "https://kwitter-c6dbd-default-rtdb.firebaseio.com",
    projectId: "kwitter-c6dbd",
    storageBucket: "kwitter-c6dbd.appspot.com",
    messagingSenderId: "83662404758",
    appId: "1:83662404758:web:7d7c89a74fdea32cd9d6b7"
  };
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    }
    );
    document.getElementById("msg").value="";
}