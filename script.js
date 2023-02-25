const submitEl = document.getElementById("submit")
const bodyEL = document.querySelector("main")
const buttonEl = document.querySelectorAll("#button")
const thanksEl = document.querySelector(".thank-you")
const rating =document.getElementById("rating")

submitEl.addEventListener("click", () => {
    thanksEl.classList.remove("hidden")
    bodyEL.style.display ="none"
})

buttonEl.forEach((button) => {
    button.addEventListener("click", () =>{
        rating.innerHTML = button.innerHTML
    })
})

   