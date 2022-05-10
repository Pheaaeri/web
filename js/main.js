clearlogin();
loaddataJSON();

function clearlogin() {
	localStorage.clear()
}


function loaddataJSON() {
	var dataJSON = "https://script.google.com/macros/s/AKfycbxAPXPaw2Qmc-ywIq77mLymacUczvZjWv53h4tNkQhwMfAjiTUtS3FO3O_5g-sxPGCN/exec";
	// get ค่าจาก url
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", dataJSON, false); // false for synchronous request
	xmlHttp.send(null);
	obj = xmlHttp.responseText;

	// แปลง string เป็น JSON
	objPeople = JSON.parse(xmlHttp.responseText);
}

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for (var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if (username == objPeople[i].username && password == objPeople[i].password) {
			localStorage.setItem("username", username) //ส่งค่า Username
			window.location.href = './home.html'
			return
		}
	}
	console.log("Erron")
}
