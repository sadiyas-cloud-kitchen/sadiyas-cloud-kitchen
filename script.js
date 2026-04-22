let cart = [];
let count = 0;

/* HERO SLIDER */
const heroImages = [
"assets/hero-biryani.png",
"assets/chicken-kabab.png",
"assets/nonveg-meal.png"
];

let i = 0;
setInterval(()=>{
i=(i+1)%heroImages.length;
document.getElementById("heroImg").src=heroImages[i];
},3000);

/* ADD CART */
function addToCart(name, price){
cart.push({name,price});
count++;
document.getElementById("cart").innerText=count;

/* animation */
let c=document.querySelector(".cart");
c.style.transform="scale(1.2)";
setTimeout(()=>c.style.transform="scale(1)",200);
}

/* FILTER */
function filterMenu(type){
document.querySelectorAll(".item").forEach(el=>{
el.style.display=(type==="all"||el.classList.contains(type))?"block":"none";
});
}

/* SEND */
function sendCart(){
if(cart.length==0){alert("Cart empty");return;}

let total=0;
let msg="Order:\n\n";

cart.forEach(i=>{
msg+=i.name+" ₹"+i.price+"\n";
total+=i.price;
});

msg+="\nTotal ₹"+total;

window.open("https://wa.me/917549126937?text="+encodeURIComponent(msg));
}

/* SCROLL ANIMATION */
const obs=new IntersectionObserver(e=>{
e.forEach(x=>{
if(x.isIntersecting)x.target.classList.add("show");
});
});

document.querySelectorAll(".item,.review-card,.content,.contact")
.forEach(el=>obs.observe(el));
