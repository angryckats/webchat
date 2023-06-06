function adduser(){
window.location="kwitter_room.html"
username=document.getElementById("user").value 
localStorage.setItem("user", username)
}