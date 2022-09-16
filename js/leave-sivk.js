//run script for open form & submit form
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