var uapi = [
    {
        "id": "นายอนุชิต ฉ่ำสิงห์",
        "username": "นายอนุชิต ฉ่ำสิงห์",
        "password": "123456"
    },
    {
        "id": "นายปรีชา อานันท์รัตนกุล",
        "username": "นายปรีชา อานันท์รัตนกุล",
        "password": "123456"
    },
    {
        "id": "นายจิรวัสส์ เจียตระกูล",
        "username": "นายจิรวัสส์ เจียตระกูล",
        "password": "123456"
    },
    {
        "id": "3",
        "username": "นายปริญญวัฒน์ อยู่ทองอินทร์",
        "วันลาพักผ่อน": "10",
        "วันลาป่วย": "10",
        "lname" : "ปอ"
    }
];

loaddataJSON();

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

api();

function api() {
    let ulname = "นายปริญญวัฒน์ อยู่ทองอินทร์"
    let uid = uapi.find((value)=>{return(value.username == ulname)});
    //flat ดึงข้อมูลทั้งหมด

    //ดึงข้อมูลส่วนบุคคล value.username = usernamelogin
    //uid = Jsondata

    
    

    console.log(uid);

}