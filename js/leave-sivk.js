//run script for open form & submit form

//Function ส่งข้อมูล
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

//เมื่อกดส่งข้อมูล ->
//ฟอร์มยันยันข้อมูล
function chaaa() {
    ///run Function ส่งข้อมูล
    leavesick();

    //ข้าพเจ้า
    let na0 = localStorage.getItem("username")
    document.getElementById("rown0").value = na0

    //เขียนวันที่
    let na1 = document.getElementById("ran1").value
    document.getElementById("rown1").value = na1

    //ประเภทการลา
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

    //เนื่องจาก
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