document.addEventListener("DOMContentLoaded", (event) =>
{
    let  t = document.getElementById("nycda-title");
    t.innerText = "Welcome to NYCDA";
    
    let  helpMessage = document.getElementById("nycda-help-message");
    helpMessage.innerText = "Ask people in NYCDA for help if you're struggling";

    let classes = document.getElementsByClassName("nycda-class");
    let lastClass = document.getElementsByClassName("nycda-class")[3];
    console.log(lastClass)

    let paragraphs = document.getElementsByTagName("p")
    console.log(paragraphs[1]);

    let inputs = document.querySelector("input");
    inputs.style.borderColor = "red";

    let button = document.getElementById("submit-button")
    button.addEventListener("click", (event) => {
    
    let textField = document.getElementById("input-important")
    console.log(textField.value)
    
    })

})
