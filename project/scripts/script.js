let cart = [];

// Función para añadir producto al carrito
function addToCart(productName, price) {
  cart.push({ productName, price });
  updateCart();
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Actualizar visualización del carrito
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('total');
  let total = 0;
  cartItems.innerHTML = '';
  
  // Mostrar cada producto en el carrito
  cart.forEach((item, index) => {
    cartItems.innerHTML += `<p>${item.productName}: $${item.price}</p>`;
    total += item.price;
  });

  totalDisplay.textContent = total.toFixed(2);
}

// Vaciar el carrito
function clearCart() {
  cart = [];
  localStorage.removeItem('cart');
  updateCart();
}

// Cargar el carrito desde el almacenamiento local
function loadCart() {
  const storedCart = JSON.parse(localStorage.getItem('cart'));
  if (storedCart) {
    cart = storedCart;
    updateCart();
  }
}

// Proceder al checkout

function proceedToCheckout() {
  if (cart.length === 0) {
    alert('Your cart is empty! Add items to proceed.');
  } else {
    localStorage.setItem('cart', JSON.stringify(cart)); // Guarda el carrito en el almacenamiento local
    window.location.href = 'checkout.html'; // Redirige a la página de pago
  }
}


// Enviar formulario de contacto
function submitForm(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  document.getElementById('user-name').textContent = name; // Mostrar nombre del usuario en el mensaje de confirmación
  
  const confirmation = document.getElementById('confirmation');
  confirmation.classList.remove('hidden');
  setTimeout(() => {
    confirmation.classList.add('hidden');
  }, 5000);
}

// Cargar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', loadCart);

// Footer dinámico para año y fecha de última modificación
const yearElement = document.getElementById('currentyear');
yearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;



//Añadir JavaScript en checkout.html para mostrar los productos y total
function loadCheckoutItems() {
  const checkoutItems = document.getElementById('checkout-items');
  const checkoutTotal = document.getElementById('checkout-total');
  const storedCart = JSON.parse(localStorage.getItem('cart'));
  let total = 0;

  if (storedCart) {
    storedCart.forEach((item) => {
      checkoutItems.innerHTML += `<p>${item.productName}: $${item.price}</p>`;
      total += item.price;
    });
    checkoutTotal.textContent = total.toFixed(2);
  }
}

// Llama a esta función solo en checkout.html
if (window.location.pathname.includes('checkout.html')) {
  loadCheckoutItems();
}


///
document.getElementById("payment-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto
  // Validación y procesamiento del formulario
  window.location.href = "thank-you.html"; // Redirige a la página de agradecimiento
});

function goToHomePage() {
  window.location.href = "index.html"; // Redirige a la página principal
}
