const openMenu = document.querySelector(".open-menu")
const closeMenu = document.querySelector(".close-menu")
const mainMenu = document.querySelector(".navbar-items-container")

openMenu.addEventListener("click",()=>{
    openMenu.style.display = "none"
    closeMenu.style.display = "block"
    mainMenu.style.display = "flex"
    mainMenu.style.top = "73px"
})

closeMenu.addEventListener("click",()=>{
    closeMenu.style.display = "none"
    openMenu.style.display = "block"
    mainMenu.style.top = '-100%';
})
