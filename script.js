let cart=[]
let count=document.getElementById("count")

function addToCart(name,price){
  cart.push({name,price})
  count.innerText=cart.length
}

function sendWhatsApp(){
  if(cart.length===0){
    alert("Cart is empty")
    return
  }

  let msg="Hello, I want to order:%0A"
  let total=0

  cart.forEach(i=>{
    msg+=`• ${i.name} - ₹${i.price}%0A`
    total+=i.price
  })

  msg+=`%0ATotal: ₹${total}`
  window.open(`https://wa.me/917549126937?text=${msg}`)
}

/* TAB SWITCH */
document.querySelectorAll(".tab").forEach(tab=>{
  tab.onclick=()=>{
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"))
    document.querySelectorAll(".menu").forEach(m=>m.classList.remove("active"))
    tab.classList.add("active")
    document.getElementById(tab.dataset.tab).classList.add("active")
  }
})
