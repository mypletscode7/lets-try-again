/* ==========================================
   ANDY'S BAR V3 JAVASCRIPT
   PREMIUM INTERACTIONS
========================================== */



/* ==========================================
   PAGE LOADING ANIMATION
========================================== */


window.addEventListener(
"load",
()=>{

document.body.classList.add(
"loaded"
);

});








/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */


const revealElements =
document.querySelectorAll(
".reveal, section, .menu-card, .offer-card, .why-card"
);



const revealObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"active"
);


}


});


},
{

threshold:.15

});



revealElements.forEach(
(element)=>{

element.classList.add(
"reveal"
);


revealObserver.observe(
element
);


});










/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */


const navbar =
document.querySelector(
".navbar"
);



window.addEventListener(
"scroll",
()=>{


if(!navbar)
return;



if(window.scrollY>50){


navbar.style.top="10px";

navbar.style.boxShadow=
"0 20px 50px rgba(0,0,0,.15)";


}

else{


navbar.style.top="20px";

navbar.style.boxShadow=
"0 10px 40px rgba(0,0,0,.08)";


}



});











/* ==========================================
   HERO PARALLAX
========================================== */


const hero =
document.querySelector(
".hero"
);



window.addEventListener(
"scroll",
()=>{


if(hero){


let offset =
window.scrollY * .25;


hero.style.backgroundPosition =
`center ${offset}px`;


}



});










/* ==========================================
   MOUSE GOLD GLOW EFFECT
========================================== */


const glow =
document.createElement(
"div"
);



glow.className=
"mouse-glow";


document.body.appendChild(
glow
);



glow.style.position="fixed";

glow.style.width="250px";

glow.style.height="250px";

glow.style.borderRadius="50%";

glow.style.background=
"rgba(212,160,23,.18)";

glow.style.filter=
"blur(80px)";

glow.style.pointerEvents="none";

glow.style.zIndex="-1";




document.addEventListener(
"mousemove",
(e)=>{


glow.style.left =
e.clientX-125+"px";


glow.style.top =
e.clientY-125+"px";



});










/* ==========================================
   COUNTER ANIMATION
========================================== */



const counters =
document.querySelectorAll(
".stat-number"
);



counters.forEach(
counter=>{


counter.innerText="0";



const updateCounter=()=>{


const target =
Number(
counter.dataset.target
);



const current =
Number(
counter.innerText
);



const increment =
target/100;



if(current < target){


counter.innerText =
Math.ceil(
current + increment
);



setTimeout(
updateCounter,
25
);


}

else{


counter.innerText =
target;


}



};



const counterObserver =
new IntersectionObserver(
(entries)=>{


if(entries[0].isIntersecting){


updateCounter();


counterObserver.disconnect();


}


});


counterObserver.observe(
counter
);


});









/* ==========================================
   MENU FILTER SYSTEM
========================================== */



const filterButtons =
document.querySelectorAll(
"[data-category]"
);



const menuItems =
document.querySelectorAll(
".menu-item"
);



filterButtons.forEach(
button=>{


button.addEventListener(
"click",
()=>{


let category =
button.dataset.category;



menuItems.forEach(
item=>{


if(
category==="all" ||
item.dataset.category===category
){


item.style.display="block";


setTimeout(()=>{

item.style.opacity="1";

item.style.transform=
"translateY(0)";


},50);


}


else{


item.style.opacity="0";

item.style.transform=
"translateY(30px)";


setTimeout(()=>{


item.style.display="none";


},300);


}



});



});


});










/* ==========================================
   CART DRAWER
========================================== */



const cartButton =
document.querySelector(
".cart-button"
);



const cartDrawer =
document.querySelector(
".cart-drawer"
);



if(cartButton && cartDrawer){


cartButton.addEventListener(
"click",
()=>{


cartDrawer.classList.toggle(
"open"
);


});


}









/* ==========================================
   PAGE TRANSITIONS
========================================== */



const links =
document.querySelectorAll(
"a"
);



links.forEach(
link=>{


if(
link.hostname ===
window.location.hostname
){


link.addEventListener(
"click",
(e)=>{


const url =
link.href;



if(
url.includes("#")
)
return;



e.preventDefault();



document.body.style.opacity="0";



setTimeout(
()=>{

window.location.href=url;


},
400
);



});


}


});










/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */


const buttons =
document.querySelectorAll(
"button, .primary-btn"
);



buttons.forEach(
button=>{


button.addEventListener(
"click",
function(e){


let ripple =
document.createElement(
"span"
);


ripple.className=
"ripple";



this.appendChild(
ripple
);



setTimeout(
()=>{

ripple.remove();

},
600
);



});


});










/* ==========================================
   MOBILE MENU
========================================== */


const menuToggle =
document.querySelector(
".menu-toggle"
);


const mobileNav =
document.querySelector(
".mobile-nav"
);



if(menuToggle){


menuToggle.onclick=()=>{


mobileNav.classList.toggle(
"active"
);


};


}










/* ==========================================
   SMOOTH BUTTON SCROLL
========================================== */


document.querySelectorAll(
"button[data-scroll]"
)
.forEach(
button=>{


button.onclick=()=>{


document.querySelector(
button.dataset.scroll
)
.scrollIntoView(
{
behavior:"smooth"
}
);


};


});
