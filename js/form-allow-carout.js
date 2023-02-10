//เช็ด Login 
// checkLogin();
// function checkLogin() {
//     var username = localStorage.getItem("username")
//     if (!username) {
//         window.location = "login.html"
//     }
//     else {
//         //document.getElementById("name").innerHTML = username
//         document.getElementById("log2").value = username
//     }
// }

//Function ส่งข้อมูล
offsite();
function offsite() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwQ8K-tGlajQRwEgyqhku3HIwniH_bprHLJ2QsBWO5QvJOqBGFR-JhbaGXhwgpVGb8r2Q/exec'
    const form = document.forms['formcarout'] //formoffsite คือ FormName

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
