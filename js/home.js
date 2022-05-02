document.getElementById("logout").onclick = function(){
    localStorage.clear()
    window.location = "login.html"

}

var userlog = localStorage.getItem("username");