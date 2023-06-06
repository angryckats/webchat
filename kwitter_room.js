
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
username=localStorage.getItem("user") 
document.getElementById("color_white").innerHTML="welcome "+ username

function teleport(){
roomname=document.getElementById("room").value
localStorage.setItem("roomname",roomname) 
firebase.database().ref("/").child(roomname).set({
purpose:"adding roomname"
})
window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       row="<div class='room_name' id="+ Room_names +" onclick='redirect_to_roomname(this.id)'>#"+ Room_names + "</div>" +"<hr>"
       document.getElementById("output").innerHTML+= row


      //End code
      });});}
getData();

function redirect_to_roomname(name){
localStorage.setItem("roomname",name)
window.location="kwitter_page.html"
}

function leave(){
localStorage.removeItem("user")
localStorage.removeItem("roomname")
window.location="index.html"
}