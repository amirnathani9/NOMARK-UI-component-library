const toastDemoBtn = document.querySelector(".toast-demo-btn")
const toastClose = document.querySelector(".toast-close-demo")
const toast = document.querySelector(".toast-demo")

toastDemoBtn.addEventListener("click",()=>{
    toast.classList.remove("displayNone");
})

toastClose.addEventListener("click",()=>{
    toast.classList.add("displayNone")
})