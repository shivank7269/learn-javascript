const spanClass = document.querySelectorAll(".button")
const body = document.body
spanClass.forEach(button=>{
    button.addEventListener("click",()=>{
        body.style.backgroundColor=button.getAttribute("id")
    })
})

