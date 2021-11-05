let btnPrimary= document.querySelector("#primary");
let btnDanger= document.querySelector("#danger");
let btnSuccess= document.querySelector("#success");
// let x= document.querySelector("#pPara1")

btnPrimary.addEventListener("click",()=>btnPrimary.style.backgroundColor= "#337ab7")
btnDanger.addEventListener("click",()=>btnDanger.style.backgroundColor= "#c9302c")
btnSuccess.addEventListener("click",()=>btnSuccess.style.backgroundColor= "#4cae4c")
function myFunction() {
    var x = document.querySelectorAll("p.example");
    x[0].style.backgroundColor = "red";
  }
  