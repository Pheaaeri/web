//Function ส่งข้อมูล
offsite();
function offsite() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxr7UbnDqa9_T0LwEw2b0LXmcdp0tVY9fGrRhTlEgdESIANw915VxOCIiuGiOER2Lef/exec'
    const form = document.forms['formoffsite'] //formoffsite คือ FormName

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
    setTimeout(function () {
        swal({
            title: "บันทึกข้อมูลเรียบร้อย",
            //text: "คำเนินการต่อ",
            type: "success",
        }, function () {
            window.location = "home.html"
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