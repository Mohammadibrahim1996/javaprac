document.querySelector("#grandparent")
.addEventListener("click",(e)=>{console.log("GrandParent click")
e.stopPropagation});
document.querySelector("#parent")
.addEventListener("click",(e)=>{console.log("Parent click!")
e.stopPropagation()});
document.querySelector("#child")
.addEventListener("click",(e)=>{console.log("child Click!")
e.stopPropagation()});