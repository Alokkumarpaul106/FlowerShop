// ===== FLORIA PAGES JAVASCRIPT =====
// Shared functionality for About & Contact pages

// Cart & Wishlist Data
let cart = JSON.parse(localStorage.getItem('floriaCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('floriaWishlist')) || [];

// ===== CART FUNCTIONS =====
function updateCartCount() {
    document.querySelectorAll('.cart .count, #cart-btn span').forEach(span => {
        span.textContent = `(${cart.length})`;
    });
}

function addToCart(id, name, price) {
    if (!cart.find(item => item.id === id)) {
        cart.push({ id, name, price: parseFloat(price), quantity: 1 });
        localStorage.setItem('floriaCart', JSON.stringify(cart));
        showToast(`${name} added to cart!`);
    } else {
        showToast('Already in cart!');
    }
    updateCartCount();
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// ===== TOAST NOTIFICATION =====
function showToast(message, type = 'default') {
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification show';

    // Set background color based on type
    let bgColor = 'linear-gradient(45deg, #333, #555)';
    if (type === 'success') bgColor = 'linear-gradient(45deg, #00b894, #55efc4)';
    if (type === 'error') bgColor = 'linear-gradient(45deg, #d63031, #ff7675)';

    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: ${bgColor};
        color: white;
        padding: 1rem 2rem;
        border-radius: 30px;
        font-weight: 500;
        z-index: 99999;
        font-family: 'Poppins', sans-serif;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        animation: slideUp 0.3s ease forwards;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideDown 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ===== HEADER FUNCTIONS =====
function initHeader() {
    const menu = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.navbar');
    const searchForm = document.querySelector('.search-form');
    const searchBtn = document.querySelector('#search-btn');

    if (menu) {
        menu.onclick = () => {
            menu.classList.toggle('fa-times');
            navbar?.classList.toggle('active');
            searchForm?.classList.remove('active');
        };
    }

    if (searchBtn) {
        searchBtn.onclick = () => {
            searchForm?.classList.toggle('active');
            menu?.classList.remove('fa-times');
            navbar?.classList.remove('active');
        };
    }

    // Close on scroll
    window.addEventListener('scroll', () => {
        menu?.classList.remove('fa-times');
        navbar?.classList.remove('active');
        searchForm?.classList.remove('active');
    });
}

// ===== CART BUTTON =====
function initCartButton() {
    const cartBtn = document.querySelector('#cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (cart.length === 0) {
                showToast('Your cart is empty');
            } else {
                showToast(`Cart: ${cart.length} item(s) - $${getCartTotal().toFixed(2)}`);
            }
        });
    }
}

// ===== NEWSLETTER =====
function initNewsletter() {
    document.querySelectorAll('.newsletter form').forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const input = this.querySelector('input[type="email"], .email-input');
            if (input?.value) {
                showToast('Thank you for subscribing! 🌸', 'success');
                input.value = '';
            }
        });
    });
}

// ===== CONTACT FORM =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Validate required fields
            const firstName = document.getElementById('firstName')?.value;
            const lastName = document.getElementById('lastName')?.value;
            const email = document.getElementById('email')?.value;
            const subject = document.getElementById('subject')?.value;
            const message = document.getElementById('message')?.value;

            if (!firstName || !lastName || !email || !subject || !message) {
                showToast('Please fill in all required fields', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showToast('Please enter a valid email address', 'error');
                return;
            }

            // Show success message
            showToast('✓ Message sent successfully! We\'ll get back to you soon.', 'success');

            // Reset form
            contactForm.reset();
        });
    }
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.value-card, .team-card, .info-card, .faq-item, .stat-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Add animate-in class styles
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        @keyframes slideUp {
            from { transform: translateX(-50%) translateY(100px); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        @keyframes slideDown {
            from { transform: translateX(-50%) translateY(0); opacity: 1; }
            to { transform: translateX(-50%) translateY(100px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ===== COUNTER ANIMATION =====
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''));
        const suffix = counter.textContent.replace(/[0-9]/g, '');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let current = 0;
                    const increment = target / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            counter.textContent = target + suffix;
                            clearInterval(timer);
                        } else {
                            counter.textContent = Math.floor(current) + suffix;
                        }
                    }, 30);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(counter);
    });
}

// ===== INITIALIZE ALL =====
document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();
    initHeader();
    initCartButton();
    initNewsletter();
    initContactForm();
    initSmoothScroll();
    addAnimationStyles();
    initScrollAnimations();
    initCounterAnimation();
});

// Export for global access
window.FloriaPages = {
    cart,
    addToCart,
    getCartTotal,
    showToast,
    updateCartCount
};