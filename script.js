const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}



////////////////////////////////////////
//let cartIcon = document.getElementById('#cart-icon')
//let cart = document.getElementsByClassName('.cart1')
//let closeCart = document.getElementById('#close-cart')

// //cartIcon.addEventListener('click', () => {
//   cart.classList.add('active');
// });

// closeCart.addEventListener('click', () => {
//   cart.classList.remove('active');
// });

function openCart() {
    document.getElementById("cart-icon").style.right = 0
  }
  function closeCart() {
    document.getElementById("cart-remove").style.right = "-300%"
  }