'use-strict';
const menuBtn = document.getElementById("menu");
const ulLinks = document.querySelector(".mobile-link");
const showMenu = document.querySelector(".mobile-link");

const img = ["./assets/menu.png","./assets/cross.png"];

let showCross = true;

menuBtn.addEventListener("click",()=>{

    showMenu.classList.toggle("hide");
    
    if(showCross){
        menuBtn.setAttribute("src",img[1]);
        console.log(menuBtn);
        showCross = false;

    }
    else{
        menuBtn.setAttribute("src",img[0]);
        console.log(menuBtn);
        showCross = true;
    }

})