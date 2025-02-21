//run script for open form & submit form
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

    //run Functio รับข้อมูล-ข้อมูลประวัติวันลาพักผ่อน
    //apilsday();
}

apilsday();
//Function รับข้อมูล-ข้อมูลประวัติวันลาพักผ่อน
function apilsday() {
    let ulname = localStorage.getItem("username")
    let uid = objPeople.find((value) => { return (value.username == ulname) });
    //flat ดึงข้อมูลทั้งหมด

    //ดึงข้อมูลส่วนบุคคล value.username = usernamelogin
    //uid = Jsondata

    //มีวันพักผ่อนประจำปีนี้
    let lsday = uid.swuserday
    let swuserday = document.getElementById("swuserday");
    swuserday.innerHTML = lsday + " วัน";
    //document.getElementById("lsday1").value = lsday

    //ลาป่วยไปแล้ว
    let used = uid.swuser1
    let swuser1 = document.getElementById("swuser1");
    swuser1.innerHTML = used + " วัน";
    //document.getElementById("lsday2").value = used

    //ลากิจไปแล้ว
    let lssum = uid.swuser2
    let swuser2 = document.getElementById("swuser2");
    swuser2.innerHTML = lssum + " วัน";
    // document.getElementById("lsday3").value = lssum

    //รวมวัน
    var sumlsday = uid.swuser1 * 1 + uid.swuser2 * 1
    let swuser3 = document.getElementById("swuser3");
    swuser3.innerHTML = sumlsday + " วัน";
    // document.getElementById("lsday3").value = lssum
    //console.log(lssum);
}

//Function ส่งข้อมูล
leavesick();
function leavesick() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyq31gYJPqvDXgGECjPCN-R4Qu_AL4ZawpG_9hYjjz6Q_kP-WfZlKtSPg2LbJ2ObNIJFw/exec'
    const form = document.forms['formleavesick'] //formleavesick คือ FormName

    form.addEventListener('submit', e => {
        e.preventDefault()

        //หน้ากำลังบันทึกมูล
        Loading();

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })

            //สำเร็จ
            .then(response => JSalert())

            //ไม่สำเร็จ
            .catch(error => console.error('Error!', error.message))
    })
};

//ระบบกันโง่กดบันทึกข้อมูลหลายครั้ง
function Loading() {
    setTimeout(function () {
        swal({
            title: "ระบบกำลังบันทึกข้อมูล",
            text: "กรุณารอสักครู่...อาจใช้เวลาประมาณ 5-10 วินาที",
            showConfirmButton: false //ปิดการแสดงปุ่มคอนเฟิร์ม ถ้าแก้เป็น true จะแสดงปุ่ม ok ให้คลิกเหมือนเดิม
            //type: "success",
        })
    });
};

//ระบบแสดงข้อความเมื่อทึกข้อมูลเสร็จแล้ว
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
