const count = document.getElementById("count");
const minusbtn = document.getElementById("minusbtn");
const plusbtn = document.getElementById("plusbtn");
 
minusbtn.addEventListener('click', () =>{
    const countValue = parseFloat(count.innerText);
    count.innerText = parseFloat(count.innerText) - 1;
})
plusbtn.addEventListener('click', () =>{
    const countValue = parseFloat(count.innerText);
    count.innerText = parseFloat(count.innerText) + 1;
})