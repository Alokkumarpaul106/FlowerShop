// Function to toggle the navigation menu and search form
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    // Close search form on scroll
    searchForm.classList.remove('active'); 
}

// --- E-commerce/Cart Simulation ---

let cartCount = 0; 
let cartSpan = document.querySelector('#cart-btn span');

// Add to Cart Functionality (Frontend Simulation)
document.querySelectorAll('.btn-add-to-cart').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        cartCount++;
        cartSpan.textContent = `(${cartCount})`;
        
        // Change button text and style temporarily
        this.textContent = 'Added!';
        this.style.backgroundColor = '#4CAF50'; // Green color
        
        // Reset button after a short delay (Optional)
        setTimeout(() => {
            this.textContent = 'Add to Cart';
            this.style.backgroundColor = 'var(--secondary-color)';
        }, 1500);

        // **Backend Integration Point:**
        // Here you would typically send an AJAX request to your backend:
        // const productId = this.getAttribute('data-id');
        // fetch('/api/addToCart', { method: 'POST', body: JSON.stringify({ id: productId, quantity: 1 }) })
        
    });
});

// Cart and User button messages
document.querySelector('#cart-btn').onclick = () => {
    alert(`You have ${cartCount} item(s) in your cart. Proceeding to checkout page...`);
}

document.querySelector('#user-btn').onclick = () => {
    alert('Navigating to Login/Profile page...');
}