const modalOpen = document.querySelector(".modal-demo-btn")
const modalClose = document.querySelector(".modal-close")
const modalContainer = document.querySelector(".modal-display-container")

modalOpen.addEventListener("click",()=>{
    modalContainer.classList.remove("displayNone");
})
modalClose.addEventListener("click",()=>{
    modalContainer.classList.add("displayNone");
})

window.addEventListener("click", event => {
    if (event.target === modalContainer) {
        modalContainer.classList.add("displayNone");
    } 
});