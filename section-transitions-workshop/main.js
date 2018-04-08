

window.addEventListener('scroll', (event) => {
    if(scrollY > 600){
        let div2 = document.getElementById("section2")
        div2.style.animation = "show 0.6s forwards"
    }
    
    if(scrollY>1400){
        let div3 = document.getElementById("section3")
        div3.style.animation = "show 0.6s forwards"
    }

    if(scrollY>2200){
        let div4 = document.getElementById("section4")
        div4.style.animation = "show 0.6s forwards"
    }
});