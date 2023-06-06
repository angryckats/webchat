const firebaseConfig = {
      apiKey: "AIzaSyAulkbsuOJs9nw5OpBusRkBXSmKW_OksEc",
      authDomain: "kwitter-a31a6.firebaseapp.com",
      databaseURL: "https://kwitter-a31a6-default-rtdb.firebaseio.com",
      projectId: "kwitter-a31a6",
      storageBucket: "kwitter-a31a6.appspot.com",
      messagingSenderId: "974811022126",
      appId: "1:974811022126:web:58a09e3863e63a26a3f0bf"
    };

    firebase.initializeApp(firebaseConfig)
    room_name=localStorage.getItem("roomname")
    username=localStorage.getItem("user")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;


//Start code

//End code
      } });  }); }
getData();

function move() {
localStorage.removeItem("user")
localStorage.removeItem("roomname")
window.location="index.html"
}

function msggs(){
message=document.getElementById("msg").value
firebase.database().ref(room_name).push({
name:username,message:message, like:0
})
document.getElementById("msg").value=""
}