/* =========================================
   ANDY'S BAR JAVASCRIPT
========================================= */



/* =========================================
   MENU DATABASE
========================================= */


const menuData = [


{
name:"Cheesy Smash Burger",
category:"Burgers",
price:65,
image:"assets/images/burger.jpg",
description:"Juicy beef patty with cheese, lettuce, tomato and chips."
},


{
name:"Juicy Lucy Burger",
category:"Burgers",
price:155,
image:"assets/images/burger.jpg",
description:"Cheese-filled beef burger served with crispy chips."
},


{
name:"Namib Pizza",
category:"Pizza",
price:190,
image:"assets/images/pizza.jpg",
description:"Mozzarella, ham, salami and bacon."
},


{
name:"Margherita Pizza",
category:"Pizza",
price:150,
image:"assets/images/pizza.jpg",
description:"Classic tomato sauce, mozzarella and oregano."
},


{
name:"500g Rump Steak",
category:"Steaks",
price:245,
image:"assets/images/steak.jpg",
description:"Free-range Namibian rump steak grilled perfectly."
},


{
name:"Currywurst & Chips",
category:"German",
price:165,
image:"assets/images/currywurst.jpg",
description:"Traditional German sausage with curry sauce."
},


{
name:"Castle Lite 500ml",
category:"Drinks",
price:25,
image:"assets/images/beer.jpg",
description:"Cold refreshing Castle Lite."
}


];









/* =========================================
   CREATE MENU CARDS
========================================= */


const menuContainer =
document.getElementById("menuContainer");



function displayMenu(items){


if(!menuContainer) return;



menuContainer.innerHTML="";



items.forEach(item=>{


const card=document.createElement("div");


card.className="menu-card";



card.innerHTML=`

<img src="${item.image}" 
style="width:100%;height:200px;object-fit:cover;border-radius:15px;">


<h3>${item.name}</h3>


<p>${item.description}</p>


<h4>N$${item.price}</h4>



<button 
class="primary-btn add-cart"
data-name="${item.name}"
data-price="${item.price}">

Add Order

</button>


`;



menuContainer.appendChild(card);



});



}





displayMenu(menuData);









/* =========================================
   SEARCH
========================================= */


const search =
document.getElementById("menuSearch");



if(search){


search.addEventListener(
"input",
()=>{


const value=
search.value.toLowerCase();



const filtered=
menuData.filter(item=>

item.name.toLowerCase()
.includes(value)

);



displayMenu(filtered);



});


}









/* =========================================
   CATEGORY FILTERS
========================================= */


const filterButtons =
document.querySelectorAll(
".filter-buttons button"
);



filterButtons.forEach(button=>{


button.addEventListener(
"click",
()=>{


const category =
button.dataset.category;



if(category==="All"){

displayMenu(menuData);

}

else{


displayMenu(
menuData.filter(item=>
item.category===category
)

);


}



});


});









/* =========================================
   SHOPPING CART
========================================= */


let cart=[];



document.addEventListener(
"click",
function(e){



if(
e.target.classList.contains(
"add-cart"
)

){



const item={

name:e.target.dataset.name,

price:Number(
e.target.dataset.price
)

};



cart.push(item);



updateCart();



}



});







function updateCart(){


const count=
document.getElementById(
"cart-count"
);


const list=
document.getElementById(
"cart-items"
);



if(!count || !list)
return;



count.innerHTML=
cart.length;



list.innerHTML="";



cart.forEach(item=>{


const li=document.createElement("li");


li.innerHTML=

`${item.name}
- N$${item.price}`;



list.appendChild(li);



});



}









/* =========================================
   RESERVATION MESSAGE
========================================= */


const reservationForm=
document.getElementById(
"reservationForm"
);



if(reservationForm){



reservationForm.addEventListener(
"submit",
function(e){


e.preventDefault();



document.getElementById(
"reservationMessage"
).innerHTML=


`

<div class="offer-card">

<h3>
Reservation Received!
</h3>

<p>
Thank you for choosing Andy's Bar.
We will contact you shortly.
</p>

</div>

`;


reservationForm.reset();


});


}









/* =========================================
   ORDER BUTTON
========================================= */


const checkout=
document.getElementById(
"checkoutButton"
);



if(checkout){


checkout.addEventListener(
"click",
()=>{


document.getElementById(
"orderMessage"
).innerHTML=


`

<div class="offer-card">

<h3>
Order Submitted!
</h3>

<p>
Your pickup order has been received.
We will prepare it shortly.
</p>


</div>

`;


});


}









/* =========================================
   GALLERY LIGHTBOX
========================================= */


const galleryImages =
document.querySelectorAll(
".gallery-item img"
);



const lightbox =
document.querySelector(
".lightbox"
);



if(lightbox){



const lightboxImage =
lightbox.querySelector(
"img"
);



galleryImages.forEach(image=>{


image.addEventListener(
"click",
()=>{


lightbox.style.display="flex";

lightboxImage.src=
image.src;



});


});



lightbox.addEventListener(
"click",
()=>{


lightbox.style.display="none";


});



}









/* =========================================
   SCROLL ANIMATION
========================================= */


const sections =
document.querySelectorAll(
"section"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity=1;

entry.target.style.transform=
"translateY(0)";


}


});


},
{

threshold:.15

}

);




sections.forEach(section=>{


section.style.opacity=0;

section.style.transform=
"translateY(40px)";

section.style.transition=
"0.8s ease";


observer.observe(section);


});







/* =========================================
   SCROLL PROGRESS
========================================= */


window.addEventListener(
"scroll",
()=>{


const height=
document.documentElement
.scrollHeight -
document.documentElement.clientHeight;



const progress=
(window.scrollY / height)*100;



const bar =
document.querySelector(
".scroll-progress"
);



if(bar){

bar.style.width=
progress+"%";


}



});

