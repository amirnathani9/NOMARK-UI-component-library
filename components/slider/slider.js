const slider =document.querySelector(".slider-range")
const sliderValue = document.querySelector(".slider-value")

sliderValue.innerText = slider.value

slider.addEventListener("input",()=>{
    sliderValue.innerText = slider.value
})
