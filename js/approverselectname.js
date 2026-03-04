
loadDataDirectorJSON();
function loadDataDirectorJSON() {
    var dataJSON = "https://script.google.com/macros/s/AKfycbyeUDT7e_0C4FMvoqtuu41ypXaOqPfoZqDGVyugEniQetUqHmD8hXLPFriLUlSOZt_TsQ/exec";
    // get ค่าจาก url
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", dataJSON, false); // false for synchronous request
    xmlHttp.send(null);
    obj = xmlHttp.responseText;

    // แปลง string เป็น JSON
    objPeople = JSON.parse(xmlHttp.responseText);
    //ชื่อผู้อำนวยการ
    let dnameid = objPeople[0].dname
    //document.getElementById("dname").innerHTML = "ผู้อำนวยการ(ผู้อนุมัติ) : " + dnameid
    //ตำแหน่งผู้อำนวยการ
    let ddeatid = objPeople[0].ddeta
    //document.getElementById("ddeta").innerHTML = ddeatid


    //
    //let uidname = objPeople.find();

    //
    //let dnameid = uidname.dname
    //let uidname1 = document.getElementById("iddname");
    //uidname1.innerHTML = dnameid + " วัน";
    //document.getElementById("lsday1").value = lsday

    //console.log(ddeatid);

    document.addEventListener("DOMContentLoaded", function () {
        // 1. รับค่าชื่อคนที่ปฏิบัติหน้าที่ในวันนี้ (ค่านี้ควรดึงมาจาก Database หรือ Session ของระบบ)
        // สมมติว่าวันนี้ระบบส่งค่ามาว่า "นายปรีชา" เป็นคนรักษาการ
        //var activeApproverName = "นายปรีชา อานันท์รัตนกุล";

        // *หมายเหตุ: ในการใช้งานจริง ค่า activeApproverName ต้องดึงมาจากตัวแปร PHP หรือ Server
        // เช่น: var activeApproverName = "<?php echo $current_acting_director_name; ?>";

        var selectBox = document.getElementById("approverSelect");
        var options = selectBox.options;

        // 2. วนลูปหา Option ที่มีชื่อตรงกับคนปฏิบัติหน้าที่
        for (var i = 0; i < options.length; i++) {
            // เช็คว่าข้อความใน Option มีชื่อคนนั้นอยู่ไหม (ใช้ includes เพื่อกันเรื่องวรรคตอน)
            //ดึงมาจาก Database 
            if (options[i].text.includes(dnameid)) {

                // 3. ย้าย Option นั้นไปเป็นอันดับแรก (index 0)
                var targetOption = options[i];
                selectBox.remove(i); // ลบจากที่เดิม
                selectBox.add(targetOption, selectBox.options[0]); // แทรกไปที่ตำแหน่งแรก

                // 4. สั่งให้เลือกชื่อนี้เป็นค่าเริ่มต้น (Selected)
                selectBox.selectedIndex = 0;
                break; // เจอแล้วจบการทำงาน
            }
        }
    });
}
