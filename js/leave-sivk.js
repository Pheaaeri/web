//run script for open form & submit form
// function leavesick() {
//     const scriptURL = 'https://script.google.com/macros/s/AKfycbwm8ypOOoZhwQmaRV8uRjIlxouLQ_HhTzIiu3eLR8hwdBtUrL4HhCzlzXl_4PoUrlyCrw/exec'
//     const form = document.forms['hello-sheet']

//     form.addEventListener('submit', e => {
//         e.preventDefault()
//         fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//             .then(response => alert("บันทึกข้อมูลเรียบร้อยแล้ว.."))
//             .catch(error => console.error('Error!', error.message))
//     })
// }