//load leave-sacation Day
loaddatalsday();
function loaddatalsday() {
	var dataJSON = "https://script.google.com/macros/s/AKfycbzhWPrzA19ABCqFRCF8o-K87xCbamWjxaf6nfA5wFd_BtM7ajSg2MWjmxDtMCR8AxA/exec";
	// get ค่าจาก url
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", dataJSON, false); // false for synchronous request
	xmlHttp.send(null);
	obj = xmlHttp.responseText;

	// แปลง string เป็น JSON
	objPeople = JSON.parse(xmlHttp.responseText);
}



apilsday();
function apilsday() {
    let ulname = localStorage.getItem("username")
    let uid = objPeople.find((value)=>{return(value.username == ulname)});
    //flat ดึงข้อมูลทั้งหมด

    //ดึงข้อมูลส่วนบุคคล value.username = usernamelogin
    //uid = Jsondata

    let lsday = uid.lsday
    //document.getElementById("lsday1").value = lsday

    let used = uid.used
    //document.getElementById("lsday2").value = used

    let lssum = lsday - used
   // document.getElementById("lsday3").value = lssum


    let lsdays1 = document.getElementById("lsdays1");
    lsdays1.innerHTML = lsday + " วัน";

    let lsdays2 = document.getElementById("lsdays2");
    lsdays2.innerHTML = used + " วัน";

    let lsdays3 = document.getElementById("lsdays3");
    lsdays3.innerHTML = lssum + " วัน";

    //console.log(lssum);

}