'use-strict';
const menuBtn = document.getElementById("menu");
const ulLinks = document.querySelector(".mobile-link");
const showMenu = document.querySelector(".mobile-link");
const hero = document.querySelector(".hero-container");
const mode = document.querySelector(".mode-image");
let lightMode = true;

const heading = document.getElementById("header-heading");




const img = ["./assets/menu.png","./assets/cross.png","./assets/sun.png","./assets/moon.png"];

let showCross = true;

menuBtn.addEventListener("click",()=>{

    showMenu.classList.toggle("hide");
    
    if(showCross){
        menuBtn.setAttribute("src",img[1]);
        // console.log(menuBtn);
      
        showCross = false;

    }
    else{
        menuBtn.setAttribute("src",img[0]);
        // console.log(menuBtn);
        
        showCross = true;
    }

})

// const name = document.getElementById("username");
// const email = document.getElementById("useremail").value;

// function sendEmail(){
//     Email.send({
//         secureToke:"6a9e30be-594e-40cb-a9cd-347d7163dd4d",
//         Host : "smtp.elasticemail.com",
//         Username : "raikiran925@gmail.com",
//         Password : "57CAE5FB58C89B0158FA08C09C672327C713",
//         To : 'raikiran925@gmail.com',
//         From : document.getElementById("useremail").value,
//         Subject : document.getElementById("username").value,
//         Body : document.getElementById("usermessage").value  + email
//     }).then(
//       message => alert(message)
//     );
// }


mode.addEventListener("click",()=>{
    if(lightMode){
        mode.setAttribute("src",img[3]);
        hero.classList.toggle("dark-mode");
        heading.style.color="#fff";
        lightMode = false;
    }
    else{
        mode.setAttribute("src",img[2]);
        hero.classList.toggle("dark-mode");
        heading.style.color="#000";
        lightMode = true;
    }
    
    
})