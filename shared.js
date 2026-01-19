// ===== FLORIA SHARED JAVASCRIPT =====
// Production-ready shared functionality for all pages

// Cart Management
let cart = JSON.parse(localStorage.getItem('floriaCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('floriaWishlist')) || [];

function updateCartCount() {
    const cartSpans = document.querySelectorAll('.cart .count, #cart-btn span');
    cartSpans.forEach(span => {
        span.textContent = cart.length;
    });
}

function addToCart(id, name, price, quantity = 1) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ id, name, price: parseFloat(price), quantity });
    }
    localStorage.setItem('floriaCart', JSON.stringify(cart));
    updateCartCount();
    showToast(`${name} added to cart!`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('floriaCart', JSON.stringify(cart));
    updateCartCount();
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function clearCart() {
    cart = [];
    localStorage.setItem('floriaCart', JSON.stringify(cart));
    updateCartCount();
}

// Wishlist Management
function toggleWishlist(name) {
    const index = wishlist.indexOf(name);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Removed from wishlist');
        return false;
    } else {
        wishlist.push(name);
        showToast('Added to wishlist ❤️');
        return true;
    }
    localStorage.setItem('floriaWishlist', JSON.stringify(wishlist));
}

function isInWishlist(name) {
    return wishlist.includes(name);
}

// Toast Notifications
function showToast(message, duration = 2500) {
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: linear-gradient(45deg, #333, #555);
        color: white;
        padding: 1rem 2rem;
        border-radius: 30px;
        font-weight: 500;
        z-index: 99999;
        opacity: 0;
        transition: all 0.3s ease;
        font-size: 14px;
        font-family: 'Poppins', sans-serif;
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(0)';
        toast.style.opacity = '1';
    }, 10);

    setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(100px)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// Page Loader
function hidePageLoader() {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        setTimeout(() => loader.classList.add('hidden'), 300);
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();

    // Newsletter forms
    document.querySelectorAll('.newsletter form, #newsletter-form').forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                showToast('Thank you for subscribing! 🌸');
                this.querySelector('input[type="email"]').value = '';
            }
        });
    });

    // Add to cart buttons
    document.querySelectorAll('.btn-add-to-cart, .add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const id = this.dataset.id || 'prod-' + Date.now();
            const name = this.dataset.name || this.closest('.card, .product-card')?.querySelector('h3, h4')?.textContent || 'Product';
            const priceText = this.dataset.price || this.closest('.card, .product-card')?.querySelector('.price')?.textContent || '0';
            const price = parseFloat(priceText.replace(/[^0-9.]/g, ''));

            addToCart(id, name, price);

            const originalText = this.textContent;
            this.textContent = '✓ Added!';
            this.style.backgroundColor = '#4CAF50';

            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
            }, 1500);
        });
    });
});

// Window load event
window.addEventListener('load', hidePageLoader);

// Export for use in other scripts
window.FloriaShop = {
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    getCartTotal,
    clearCart,
    toggleWishlist,
    isInWishlist,
    showToast,
    updateCartCount
};
