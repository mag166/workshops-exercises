let section1 = document.getElementById("section1")
let section2 = document.getElementById("section2")
let section3 = document.getElementById("section3")

window.addEventListener("scroll", (event) => {

if(window.scrollY > 0){
    section1.classList.add("show")
}
if(window.scrollY > 700){
    section2.classList.add("show")
}

})

