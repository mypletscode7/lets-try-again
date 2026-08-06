/* =====================================
   ANDY'S BAR MAIN JAVASCRIPT
===================================== */


document.addEventListener("DOMContentLoaded", () => {




/* =====================================
   REMOVE LOADER
===================================== */


setTimeout(() => {

    const loader = document.querySelector(".loader");

    if(loader){

        loader.style.display="none";

    }


},2500);









/* =====================================
   NAVBAR SCROLL EFFECT
===================================== */


const navbar = document.querySelector(".navbar");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){

        navbar.style.background =
        "rgba(0,0,0,0.9)";


        navbar.style.top="10px";


    }


    else{


        navbar.style.background =
        "rgba(0,0,0,.55)";


        navbar.style.top="20px";


    }



});









/* =====================================
   SCROLL REVEAL ANIMATION
===================================== */


const revealElements = document.querySelectorAll(

"section, .offer-card, .food-card, .gallery-grid div"

);



const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},


{

threshold:0.15

}


);




revealElements.forEach(el=>{


el.classList.add("hidden");


observer.observe(el);


});









/* =====================================
   BUTTON RIPPLE EFFECT
===================================== */


const buttons =
document.querySelectorAll("button,.primary-btn,.secondary-btn");



buttons.forEach(button=>{


button.addEventListener("click",(e)=>{


let ripple =
document.createElement("span");


ripple.className="ripple";


button.appendChild(ripple);



setTimeout(()=>{


ripple.remove();


},600);



});


});









/* =====================================
   ORDER BUTTONS
===================================== */


const orderButtons =
document.querySelectorAll(".order-btn");



orderButtons.forEach(btn=>{


btn.addEventListener("click",()=>{


window.location.href="menu.html";


});


});









/* =====================================
   RESERVATION BUTTON
===================================== */


const reservationButtons =
document.querySelectorAll(
".reservation button"
);



reservationButtons.forEach(btn=>{


btn.addEventListener("click",()=>{


window.location.href="#contact";


});


});









/* =====================================
   SMOOTH ANCHOR SCROLL
===================================== */


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


anchor.addEventListener("click",function(e){


e.preventDefault();



document.querySelector(
this.getAttribute("href")
)
.scrollIntoView({

behavior:"smooth"

});



});


});









/* =====================================
   FOOD CARD FLOAT EFFECT
===================================== */


const cards =
document.querySelectorAll(".food-card");



cards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


let rect =
card.getBoundingClientRect();



let x =
e.clientX - rect.left;


let y =
e.clientY - rect.top;



let rotateX =
(y - rect.height/2)/20;


let rotateY =
(rect.width/2 - x)/20;



card.style.transform =

`
perspective(700px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)
`;



});




card.addEventListener("mouseleave",()=>{


card.style.transform="";


});



});









/* =====================================
   GOLD CURSOR GLOW
===================================== */


const glow =
document.createElement("div");


glow.className="cursor-glow";


document.body.appendChild(glow);




document.addEventListener("mousemove",(e)=>{


glow.style.left =
e.clientX+"px";


glow.style.top =
e.clientY+"px";



});









});
