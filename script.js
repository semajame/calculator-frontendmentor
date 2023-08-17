
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const body = document.querySelector(".body");


    button1.addEventListener("click", ()=>{
        button1.style.opacity = "1";
        button2.style.opacity = "0";
        button3.style.opacity = "0";
        body.classList.remove("theme2");
        body.classList.remove("theme3");
    })

    button2.addEventListener("click", ()=>{
        button1.style.opacity = "0";
        button2.style.opacity = "1";
        button3.style.opacity = "0";
        body.classList.add("theme2");
        body.classList.remove("theme3");
    })

    button3.addEventListener("click", ()=>{
        button1.style.opacity = "0";
        button2.style.opacity = "0";
        button3.style.opacity = "1";
        body.classList.add("theme3");
        body.classList.remove("theme2");
    })