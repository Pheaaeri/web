//เช็ด Login 
checkLogin();
function checkLogin() {
    var username = localStorage.getItem("username")
    if (!username) {
        window.location = "login.html"
    }
    else {
        //document.getElementById("name").innerHTML = username
        document.getElementById("log2").value = username
    }
}

//Function รับข้อมูล
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

//Function รับข้อมูล-ข้อมูลประวัติวันลาพักผ่อน
apilsday();
function apilsday() {
    let ulname = localStorage.getItem("username")
    let uid = objPeople.find((value) => { return (value.username == ulname) });
    //flat ดึงข้อมูลทั้งหมด

    //ดึงข้อมูลส่วนบุคคล value.username = usernamelogin
    //uid = Jsondata

    //มีวันพักผ่อนประจำปีนี้
    let lsday = uid.lsday
    let lsdays1 = document.getElementById("lsdays1");
    lsdays1.innerHTML = lsday + " วัน";
    //document.getElementById("lsday1").value = lsday

    //ลาพักผ่อนไปแล้ว
    let used = uid.used
    let lsdays2 = document.getElementById("lsdays2");
    lsdays2.innerHTML = used + " วัน";
    //document.getElementById("lsday2").value = used

    //เหลือวันพักผ่อน
    let lssum = lsday - used
    let lsdays3 = document.getElementById("lsdays3");
    lsdays3.innerHTML = lssum + " วัน";
    // document.getElementById("lsday3").value = lssum
    //console.log(lssum);
}

//Function ส่งข้อมูล
leavesacation();
function leavesacation() {
    const scriptURL = '*** URL ***'
    const form = document.forms['formsacation'] //formsacation คือ FormName

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })

            //สำเร็จ
            .then(response => JSalert())

            //ไม่สำเร็จ
            .catch(error => console.error('Error!', error.message))
    })
};

//Function ตอบกลับ-ส่งข้อมูล
function JSalert() {
    swal("บันทึกข้อมูลเรียบร้อย", "Your account is created!", "success");
}

//เมื่อกดส่งข้อมูล ->
//ฟอร์มยันยันข้อมูล
function chaaa() {

    //ข้าพเจ้า
    let na0 = localStorage.getItem("username")
    document.getElementById("rown0").value = na0

    //เขียนวันที่
    let na1 = document.getElementById("ran1").value
    document.getElementById("rown1").value = na1

    //***ประเภทการลา
    let na2 = document.getElementById("ran2").value
    document.getElementById("rown2").value = na2

    //ลาวันที่
    let na3 = document.getElementById("ran3").value
    document.getElementById("rown3").value = na3

    //ถึงวันที่
    let na4 = document.getElementById("ran4").value
    document.getElementById("rown4").value = na4

    //มีกำหนด
    let na5 = document.getElementById("ran5").value
    document.getElementById("rown5").value = na5

    //***เนื่องจาก
    let na6 = document.getElementById("ran6").value
    document.getElementById("rown6").value = na6

    //ผู้ตรวจสอบ
    let na7 = document.getElementById("ran7").value
    document.getElementById("rown7").value = na7

    //ผู้อนุมัติ
    let na8 = document.getElementById("ran8").value
    document.getElementById("rown8").value = na8

    //onclick="getInfo()"
    //console.log(ra);
}