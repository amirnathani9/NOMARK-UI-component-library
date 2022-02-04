const iconOpen = document.querySelector(".icon-open");
const iconClose = document.querySelector(".icon-close");
const sidebarRemove = document.querySelector(".sidebarRemove");
const sidebar = document.querySelector(".sidebar")
const displayNone = document.querySelector(".displayNone")
const clickRemove = document.querySelector(".click-remove")

iconOpen.addEventListener("click",()=>{
    sidebar.classList.remove("sidebarRemove");
    iconOpen.classList.add("displayNone")
    iconClose.classList.remove("displayNone")
})

iconClose.addEventListener("click",()=>{
    sidebar.classList.add("sidebarRemove");
    iconOpen.classList.remove("displayNone")
    iconClose.classList.add("displayNone")
})

clickRemove.addEventListener("click",()=>{
    sidebar.classList.add("sidebarRemove");
    iconOpen.classList.remove("displayNone")
    iconClose.classList.add("displayNone")
})
