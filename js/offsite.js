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
//Link = https://script.google.com/macros/s/AKfycbz7HpK-qhVxBABCyTa4jAzxTKd0gu-WJZaTBhJWUTo_jQ_X-59N3ntr0yhGrNsJ-STJ/exec
//loaddatalsday();
function loaddatalsday() {
    var dataJSON = "*** Link ***";
    // get ค่าจาก url
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", dataJSON, false); // false for synchronous request
    xmlHttp.send(null);
    obj = xmlHttp.responseText;

    // แปลง string เป็น JSON
    objPeople = JSON.parse(xmlHttp.responseText);
}

//Function รับข้อมูล-ข้อมูลประวัติวันลาพักผ่อน
//apilsday();
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
offsite();
function offsite() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxr7UbnDqa9_T0LwEw2b0LXmcdp0tVY9fGrRhTlEgdESIANw915VxOCIiuGiOER2Lef/exec'
    const form = document.forms['formoffsite'] //formoffsite คือ FormName

    form.addEventListener('submit', e => {
        e.preventDefault()


        Loading() //หน้ากำลังบันทึกมูล
        
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })

            //สำเร็จ
            .then(response => JSalert())

            //ไม่สำเร็จ
            .catch(error => console.error('Error!', error.message))
    })
};

//ระบบแสดงข้อความเมื่อบัทึกข้อมูลเสร็จแล้ว
function JSalert() {
    setTimeout(function () {
        swal({
            title: "บันทึกข้อมูลเรียบร้อย",
            text: "ระบบจะกลับสู่หน้าหลักอัตโนมัติ",
            showConfirmButton: false, //ปิดการแสดงปุ่มคอนเฟิร์ม ถ้าแก้เป็น true จะแสดงปุ่ม ok ให้คลิกเหมือนเดิม          
            type: "success",
            timer: 5000, //ระยะเวลา redirect 5000 = 5 วิ เพิ่มลดได้
        }, function () {
            window.location = "home.html" //หรือหน้า PDF
        })
    });
};

//ระบบกันโง่กดบันทึกข้อมูลหลายครั้ง
function Loading() {
    setTimeout(function () {
        swal({
            title: "ระบบกำลังบันทึกข้อมูล",
            text: "กรุณารอสักครู่...อาจใช้เวลาประมาณ 10 วินาที",
            showConfirmButton: false //ปิดการแสดงปุ่มคอนเฟิร์ม ถ้าแก้เป็น true จะแสดงปุ่ม ok ให้คลิกเหมือนเดิม
            //type: "success",
        })
    });
};

//เมื่อกดส่งข้อมูล ->
//ฟอร์มยันยันข้อมูล
function checkformpopup() {
    //ใส่ clss reree



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

    //หัวหน้างาน
    let na6 = document.getElementById("ran6").value
    document.getElementById("rown6").value = na6

    //ผู้อนุมัติ
    let na7 = document.getElementById("ran7").value
    document.getElementById("rown7").value = na7

    //ผู้อนุมัติ
    let na8 = document.getElementById("ran8").value
    document.getElementById("rown8").value = na8

    //onclick="getInfo()"
    //console.log(ra);
};