//run script for open form & submit form

//Function ส่งข้อมูล
leavesick();
function leavesick() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyq31gYJPqvDXgGECjPCN-R4Qu_AL4ZawpG_9hYjjz6Q_kP-WfZlKtSPg2LbJ2ObNIJFw/exec'
    const form = document.forms['formleavesick'] //formleavesick คือ FormName

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })

            //สำเร็จ
            //.then(response => alert("บันทึกข้อมูลเรียบร้อยแล้ว..."))
            .then(response => JSalert())

            //ไม่สำเร็จ
            .catch(error => console.error('Error!', error.message))
    })
};

// function formResetdata() {
//     document.getElementById("formleavesick").reset();
//     setTimeout(5000);
//     Reform();
// };

// สำเร็จ 
// .then(response => alert("บันทึกข้อมูลเรียบร้อยแล้ว..."),
// setTimeout(() => {
//     Reform()
// }, 3000))

function JSalert() {
    swal("บันทึกข้อมูลเรียบร้อย", ", Your account is created!", "success");
}

// function Reform() {
//     window.location = './home.html' //=> เมื่อ ResetForm เสร็จแล้ว โหลดหน้า leave-sick.html *หน้าฟอร์มลาป่วยลากิจ*
// };

//เมื่อกดส่งข้อมูล ->
//ฟอร์มยันยันข้อมูล
function chaaa() {

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