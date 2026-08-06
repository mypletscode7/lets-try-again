/* =================================
   ANDY'S RESTAURANT JAVASCRIPT
================================= */



// ================================
// SCROLL PROGRESS BAR
// ================================


window.addEventListener("scroll", function(){


let scrollTop = document.documentElement.scrollTop;


let height = document.documentElement.scrollHeight -
document.documentElement.clientHeight;


let progress = (scrollTop / height) * 100;



let bar = document.querySelector(".scroll-progress");


if(bar){

bar.style.width = progress + "%";

}


});









// ================================
// NAVBAR SCROLL EFFECT
// ================================


window.addEventListener("scroll",()=>{


const navbar=document.querySelector(".navbar");


if(navbar){


if(window.scrollY > 80){


navbar.style.background="#080808";


}


else{


navbar.style.background="transparent";


}


}


});









// ================================
// IMAGE LIGHTBOX
// ================================


const galleryImages=document.querySelectorAll(
".premium-gallery img, .gallery-grid img"
);



const lightbox=document.querySelector(".lightbox");


const lightboxImage=document.querySelector(
".lightbox img"
);



const closeLightbox=document.querySelector(
".close-lightbox"
);



galleryImages.forEach(image=>{


image.addEventListener("click",()=>{


if(lightbox){


lightbox.classList.add("active");


lightboxImage.src=image.src;


}


});


});





if(closeLightbox){


closeLightbox.addEventListener("click",()=>{


lightbox.classList.remove("active");


});


}






if(lightbox){


lightbox.addEventListener("click",(e)=>{


if(e.target===lightbox){


lightbox.classList.remove("active");


}


});


}









// ================================
// COUNTER ANIMATION
// ================================


const counters=document.querySelectorAll(
".counter"
);



counters.forEach(counter=>{


let target=Number(counter.dataset.target);



let count=0;



let speed=target/100;



let update=()=>{


count+=speed;



if(count < target){


counter.innerText=Math.floor(count);



requestAnimationFrame(update);



}

else{


counter.innerText=target.toLocaleString();


}



};



update();



});









// ================================
// ORDER CART
// ================================


let cart=[];




function addToCart(item){


cart.push(item);



updateCart();



alert(
item + " added to your order!"
);



}







function updateCart(){


let list=document.getElementById(
"cart-items"
);



let count=document.getElementById(
"cart-count"
);



if(list){


list.innerHTML="";



cart.forEach(product=>{


let li=document.createElement("li");


li.innerHTML=product;


list.appendChild(li);



});


}




if(count){


count.innerHTML=cart.length;


}



}









// ================================
// RESERVATION BUTTON
// ================================


const reserveButtons=document.querySelectorAll(
".reserve-btn"
);



reserveButtons.forEach(button=>{


button.addEventListener(
"click",
()=>{


window.location.href="reservations.html";


});


});









// ================================
// FORM SUBMISSION
// ================================


const bookingForm=document.querySelector(
".booking-form"
);



if(bookingForm){


bookingForm.addEventListener(
"submit",
(e)=>{


e.preventDefault();



alert(
"Thank you! Your reservation request has been received."
);



bookingForm.reset();



});


}









// ================================
// SMOOTH PAGE LOAD
// ================================


window.addEventListener(
"load",
()=>{


document.body.style.opacity="1";


});
