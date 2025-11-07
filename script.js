const password = document.querySelector("#password")
const confirm = document.querySelector("#confirm")
const submit = document.querySelector("#create")
const form = document.querySelector("#form")
const feedback = document.querySelector("#submission-feedback")

const requiredInputs = document.querySelectorAll(".required")

// listening to user input 
requiredInputs.forEach(requiredInput => {
        requiredInput.addEventListener("blur", () => {
            if (!requiredInput.checkValidity()) {
                requiredInput.classList.add("error")
            }
            else {
                requiredInput.classList.remove("error")
            }
        })
    } )


submit.addEventListener("click", event => {
    event.preventDefault()
    feedback.textContent = ""
    // passwords don't match, no submission
    if (!checkPassword()) {
        feedback.textContent = "Invalid fields"
        return
    }
    // required inputs are not valid
    else if (!inputsValid()) {
        feedback.textContent = "Invalid fields"
        return 
    }
    // all are ok
    else {
        feedback.textContent = "Thank you for your submission"
    }

})

const checkPassword = () => {
    if (password.value!=confirm.value) {
        feedback.textContent = "Passwords do not match. "
        password.classList.add("error")
        confirm.classList.add("error")
        return false
    }
    password.classList.remove("error")
    confirm.classList.remove("error")
    return true
    
    
}

// returns True if all user input is valid
const inputsValid = () => {
    for (const input of requiredInputs) {
        if (!input.checkValidity()) {
            input.classList.add("error")
            return false
        }
    }
    return true
}

const root = document.documentElement
const moon = document.querySelector(".theme-toggle")

moon.addEventListener("click", () => {
    root.classList.toggle("dark")
})

