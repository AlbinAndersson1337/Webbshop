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
// let cartIcon = document.getElementById('#cart-icon')
// let cart = document.getElementsByClassName('.cart1')
// let closeCart = document.getElementById('#close-cart')

// cartIcon.onclick = () => {
//     cart.classList.add("active");
// };
// closeCart.onclick = () => {
//     cart.classList.remove("active");
// };

// function openCart() {
//     document.getElementById("cart-icon").style.right = 0
//   }
//   function closeCart() {
//     document.getElementById("cart-remove").style.right = "-300%"
//   }


function addToCart(productId) {
    // Retrieve the product element
    const productEl = document.getElementById(productId);
  
    // Retrieve the product details (name, price, image)
    const productName = productEl.querySelector('.description h5').textContent;
    const productPrice = productEl.querySelector('.description h4').textContent.slice(1);
    const productImage = productEl.querySelector('img').src;
  
    // Create a new cart item object
    const cartItem = {
      id: productId,
      name: productName,
      price: parseFloat(productPrice),
      image: productImage,
      quantity: 1,
    };
  
    // Check if there is an existing cart in local storage
    let cart = localStorage.getItem('cart');
    if (cart) {
      cart = JSON.parse(cart);
    } else {
      cart = [];
    }
  
    // Check if the product already exists in the cart
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity++;
    } else {
      cart.push(cartItem);
    }
  
    // Update local storage with the new cart contents
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function renderCart() {
    // Retrieve the cart from local storage
    let cart = localStorage.getItem('cart');
    if (!cart) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }
  
    // Retrieve the cart container element
    const cartContainer = document.getElementById('cart-container');
  
    // Generate HTML for each cart item
    let cartHTML = '';
    cart.forEach(item => {
      const subtotal = item.price * item.quantity;
      cartHTML += `
        <div class="cart-item">
          <button class="remove-item" onclick="removeFromCart('${item.id}')">X</button>
          <img src="${item.image}" alt="${item.name}">
          <div class="cart-item-details">
            <h5>${item.name}</h5>
            <p>Price: $${item.price.toFixed(2)}</p>
            <p>Quantity: ${item.quantity}</p>