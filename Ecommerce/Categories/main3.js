let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    navbar.classList.remove('active');
    shoppingCart.classList.toggle('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    shoppingCart.classList.remove('active');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})