//เช็ด Login 
checkLogin();
function checkLogin() {
    var username = localStorage.getItem("username")
    if (!username) {
        window.location = "login.html"
    }
    else {
        //document.getElementById("name").innerHTML = username
        document.getElementById("userlogin").value = username
    }
}

//Function รับข้อมูล
//loaddatalsday();
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

//apilsday();
//Function รับข้อมูล-ข้อมูลประวัติวันลาพักผ่อน
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
function leavesacation() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxyHFNBNJxI3SQSTzSdm80nQJyzuFF7ARXCJ89y2cRUg6mvGP3ZoFbOTdIBqTqnBMeY/exec'
    const form = document.forms['formsacation'] //formsacation คือ FormName

    form.addEventListener('submit', e => {
        e.preventDefault()

        Loading() //หน้ากำลังบันทึกมูล

        //ส่งข้อมูล
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
            text: "กรุณารอสักครู่...อาจใช้เวลาประมาณ 10 วินาที",
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
