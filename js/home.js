
var userlog = localStorage.getItem("username");
document.getElementById("logout").onclick = function(){
    localStorage.clear()
    window.location = "login.html"

}
loadDataDirectorJSON();
function loadDataDirectorJSON() {
	var dataJSON = "https://script.google.com/macros/s/AKfycbyeUDT7e_0C4FMvoqtuu41ypXaOqPfoZqDGVyugEniQetUqHmD8hXLPFriLUlSOZt_TsQ/exec";
	// get ค่าจาก url
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", dataJSON, false); // false for synchronous request
	xmlHttp.send(null);
	obj = xmlHttp.responseText;

	// แปลง string เป็น JSON
	objPeople = JSON.parse(xmlHttp.responseText);
    //
    let dnameid = objPeople[0].dname
    document.getElementById("dname").innerHTML = "ผู้อำนวยการ(ผู้อนุมัติ) : " + dnameid
    //
    let ddeatid = objPeople[0].ddeta
    document.getElementById("ddeta").innerHTML = ddeatid
    
    //
    //let uidname = objPeople.find();

    //
    //let dnameid = uidname.dname
    //let uidname1 = document.getElementById("iddname");
    //uidname1.innerHTML = dnameid + " วัน";
    //document.getElementById("lsday1").value = lsday
    
    console.log(ddeatid);
}