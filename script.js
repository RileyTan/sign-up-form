const password = document.querySelector("#password")
const confirm = document.querySelector("#confirm")
const submit = document.querySelector("button")
const invalid = document.querySelector("#invalid")

submit.addEventListener("click", event => {
    event.preventDefault()
    if (password!=confirm) {
        
    }
})

const root = document.documentElement
const moon = document.querySelector(".theme-toggle")

moon.addEventListener("click", () => {
    root.classList.toggle("dark")
})