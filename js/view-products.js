// ===== PRODUCTS DATA (99 Products with unique images) =====
const allProducts = [
    { id: 1, name: 'Signature Pink Rose Box', price: 32, oldPrice: null, category: 'Luxury Box', image: 'image3/pink_roses.png', badge: 'New', rating: 5 },
    { id: 2, name: 'Elegant White Lilies', price: 19.50, oldPrice: 22, category: 'Bouquet', image: 'image3/white_lilies.png', badge: null, rating: 4 },
    { id: 3, name: 'Phalaenopsis Orchid', price: 24, oldPrice: 28, category: 'Indoor Plants', image: 'image3/purple_orchid.png', badge: '-15%', rating: 5 },
    { id: 4, name: 'Luxury Red Rose Bouquet', price: 45, oldPrice: null, category: 'Premium Roses', image: 'image3/red_roses.png', badge: 'Bestseller', rating: 5 },
    { id: 5, name: 'Rainbow Tulip Bouquet', price: 28, oldPrice: null, category: 'Spring', image: 'image3/colorful_tulips.png', badge: null, rating: 4 },
    { id: 6, name: 'Blush Pink Delight', price: 35, oldPrice: null, category: 'Mixed', image: 'image3/pink_roses.png', badge: 'New', rating: 5 },
    { id: 7, name: 'Sunny Sunflower Bunch', price: 22, oldPrice: 28, category: 'Cheerful', image: 'image3/sunflowers.png', badge: '-20%', rating: 5 },
    { id: 8, name: 'Premium Flower Gift Box', price: 89, oldPrice: null, category: 'Gift Set', image: 'image1/premium.jpg', badge: 'Bestseller', rating: 5 },
    { id: 9, name: 'Passionate Red Roses', price: 42, oldPrice: null, category: 'Romantic', image: 'image3/red_roses.png', badge: null, rating: 4 },
    { id: 10, name: 'Soft Pastel Dreams', price: 38, oldPrice: null, category: 'Pastel', image: 'image1/soft.jpg', badge: 'New', rating: 4 },
    { id: 11, name: 'Midnight Black Roses', price: 55, oldPrice: null, category: 'Exotic', image: 'image1/black.jpg', badge: null, rating: 5 },
    { id: 12, name: 'Love & Joy Gift Bundle', price: 65, oldPrice: 72, category: 'Gift Pack', image: 'image2/pack.jpg', badge: '-10%', rating: 5 },
    { id: 13, name: 'Garden Fresh Mix', price: 29, oldPrice: null, category: 'Mixed', image: 'image1/gate.jpg', badge: null, rating: 4 },
    { id: 14, name: 'Royal Purple Orchids', price: 48, oldPrice: null, category: 'Exotic', image: 'image3/purple_orchid.png', badge: 'New', rating: 5 },
    { id: 15, name: 'White Wedding Elegance', price: 75, oldPrice: null, category: 'Wedding', image: 'image3/white_lilies.png', badge: 'Premium', rating: 5 },
    { id: 16, name: 'Spring Tulip Garden', price: 33, oldPrice: 38, category: 'Spring', image: 'image3/colorful_tulips.png', badge: '-13%', rating: 4 },
    { id: 17, name: 'Rose Gold Collection', price: 58, oldPrice: null, category: 'Luxury Box', image: 'image3/pink_roses.png', badge: null, rating: 5 },
    { id: 18, name: 'Tropical Paradise', price: 44, oldPrice: null, category: 'Exotic', image: 'image3/sunflowers.png', badge: 'New', rating: 4 },
    { id: 19, name: 'Classic Rose Dozen', price: 36, oldPrice: null, category: 'Romantic', image: 'image3/red_roses.png', badge: 'Bestseller', rating: 5 },
    { id: 20, name: 'Lavender Dreams', price: 31, oldPrice: null, category: 'Pastel', image: 'image3/purple_orchid.png', badge: null, rating: 4 },
    { id: 21, name: 'Golden Sunset Bouquet', price: 41, oldPrice: 48, category: 'Mixed', image: 'image3/sunflowers.png', badge: '-15%', rating: 5 },
    { id: 22, name: 'Peony Paradise', price: 52, oldPrice: null, category: 'Premium', image: 'image3/pink_roses.png', badge: null, rating: 5 },
    { id: 23, name: 'Cherry Blossom Magic', price: 39, oldPrice: null, category: 'Spring', image: 'image3/pink_roses.png', badge: 'New', rating: 4 },
    { id: 24, name: 'Emerald Garden', price: 27, oldPrice: null, category: 'Indoor Plants', image: 'image1/gate.jpg', badge: null, rating: 4 },
    { id: 25, name: 'Valentine Special', price: 49, oldPrice: null, category: 'Romantic', image: 'image3/red_roses.png', badge: 'Bestseller', rating: 5 },
    { id: 26, name: 'Birthday Celebration', price: 34, oldPrice: null, category: 'Celebration', image: 'image2/party.jpg', badge: 'Popular', rating: 5 },
    { id: 27, name: 'Anniversary Roses', price: 62, oldPrice: null, category: 'Premium', image: 'image3/red_roses.png', badge: null, rating: 5 },
    { id: 28, name: 'Daisy Delight', price: 23, oldPrice: 28, category: 'Simple', image: 'image3/white_lilies.png', badge: '-18%', rating: 4 },
    { id: 29, name: 'Exotic Orchid Mix', price: 56, oldPrice: null, category: 'Exotic', image: 'image3/purple_orchid.png', badge: 'New', rating: 5 },
    { id: 30, name: 'Summer Vibes', price: 31, oldPrice: null, category: 'Seasonal', image: 'image3/sunflowers.png', badge: null, rating: 4 },
    { id: 31, name: 'Romantic Getaway', price: 47, oldPrice: null, category: 'Romantic', image: 'image3/pink_roses.png', badge: null, rating: 5 },
    { id: 32, name: 'Luxury Gift Hamper', price: 95, oldPrice: 110, category: 'Gift Set', image: 'image1/premium.jpg', badge: '-14%', rating: 5 },
    { id: 33, name: 'Fresh Morning Dew', price: 26, oldPrice: null, category: 'Fresh', image: 'image3/white_lilies.png', badge: null, rating: 4 },
    { id: 34, name: 'Ruby Red Collection', price: 43, oldPrice: null, category: 'Premium', image: 'image3/red_roses.png', badge: 'New', rating: 5 },
    { id: 35, name: 'Mothers Day Special', price: 38, oldPrice: null, category: 'Special', image: 'image3/pink_roses.png', badge: 'Bestseller', rating: 5 },
    { id: 36, name: 'Enchanted Garden', price: 51, oldPrice: null, category: 'Mixed', image: 'image1/gate.jpg', badge: null, rating: 4 },
    { id: 37, name: 'Tulip Festival', price: 29, oldPrice: 34, category: 'Spring', image: 'image3/colorful_tulips.png', badge: '-15%', rating: 4 },
    { id: 38, name: 'Blossoming Beauty', price: 44, oldPrice: null, category: 'Premium', image: 'image3/pink_roses.png', badge: null, rating: 5 },
    { id: 39, name: 'Starlight Roses', price: 67, oldPrice: null, category: 'Luxury Box', image: 'image3/red_roses.png', badge: 'Premium', rating: 5 },
    { id: 40, name: 'Peaceful Lily', price: 25, oldPrice: null, category: 'Simple', image: 'image3/white_lilies.png', badge: null, rating: 4 },
    { id: 41, name: 'Sunflower Symphony', price: 28, oldPrice: null, category: 'Cheerful', image: 'image3/sunflowers.png', badge: 'New', rating: 4 },
    { id: 42, name: 'Royal Wedding', price: 120, oldPrice: null, category: 'Wedding', image: 'image3/white_lilies.png', badge: 'Luxury', rating: 5 },
    { id: 43, name: 'Autumn Harvest', price: 36, oldPrice: 42, category: 'Seasonal', image: 'image3/sunflowers.png', badge: '-14%', rating: 4 },
    { id: 44, name: 'Pink Passion', price: 41, oldPrice: null, category: 'Romantic', image: 'image3/pink_roses.png', badge: null, rating: 5 },
    { id: 45, name: 'Midnight Mystery', price: 59, oldPrice: null, category: 'Exotic', image: 'image1/black.jpg', badge: 'New', rating: 5 },
    { id: 46, name: 'Sweet Memories', price: 33, oldPrice: null, category: 'Mixed', image: 'image1/soft.jpg', badge: null, rating: 4 },
    { id: 47, name: 'Celebration Burst', price: 37, oldPrice: null, category: 'Celebration', image: 'image2/party.jpg', badge: 'Popular', rating: 5 },
    { id: 48, name: 'Classic Elegance', price: 48, oldPrice: null, category: 'Premium', image: 'image3/red_roses.png', badge: null, rating: 5 },
    { id: 49, name: 'Spring Bloom', price: 30, oldPrice: 35, category: 'Spring', image: 'image3/colorful_tulips.png', badge: '-14%', rating: 4 },
    { id: 50, name: 'Garden Party', price: 39, oldPrice: null, category: 'Mixed', image: 'image1/gate.jpg', badge: null, rating: 4 },
    { id: 51, name: 'Love Forever', price: 55, oldPrice: null, category: 'Romantic', image: 'image3/red_roses.png', badge: 'Bestseller', rating: 5 },
    { id: 52, name: 'Pure White Grace', price: 32, oldPrice: null, category: 'Simple', image: 'image3/white_lilies.png', badge: null, rating: 4 },
    { id: 53, name: 'Tropical Sunset', price: 46, oldPrice: 54, category: 'Exotic', image: 'image3/sunflowers.png', badge: '-15%', rating: 5 },
    { id: 54, name: 'Orchid Excellence', price: 68, oldPrice: null, category: 'Premium', image: 'image3/purple_orchid.png', badge: 'New', rating: 5 },
    { id: 55, name: 'Joy Bouquet', price: 27, oldPrice: null, category: 'Cheerful', image: 'image3/sunflowers.png', badge: null, rating: 4 },
    { id: 56, name: 'Premium Rose Set', price: 78, oldPrice: null, category: 'Gift Set', image: 'image3/red_roses.png', badge: 'Luxury', rating: 5 },
    { id: 57, name: 'Dreamy Pastels', price: 35, oldPrice: null, category: 'Pastel', image: 'image3/pink_roses.png', badge: null, rating: 4 },
    { id: 58, name: 'Bold & Beautiful', price: 42, oldPrice: null, category: 'Mixed', image: 'image2/pack.jpg', badge: null, rating: 5 },
    { id: 59, name: 'Fairy Tale Romance', price: 64, oldPrice: null, category: 'Wedding', image: 'image3/white_lilies.png', badge: 'New', rating: 5 },
    { id: 60, name: 'Simply Red', price: 38, oldPrice: 44, category: 'Romantic', image: 'image3/red_roses.png', badge: '-14%', rating: 5 },
    { id: 61, name: 'Greenhouse Special', price: 29, oldPrice: null, category: 'Indoor Plants', image: 'image3/purple_orchid.png', badge: null, rating: 4 },
    { id: 62, name: 'Vintage Charm', price: 47, oldPrice: null, category: 'Premium', image: 'image3/pink_roses.png', badge: null, rating: 5 },
    { id: 63, name: 'Happy Birthday', price: 36, oldPrice: null, category: 'Celebration', image: 'image2/party.jpg', badge: 'Popular', rating: 5 },
    { id: 64, name: 'Serenity Now', price: 31, oldPrice: null, category: 'Pastel', image: 'image3/white_lilies.png', badge: null, rating: 4 },
    { id: 65, name: 'Exotic Breeze', price: 53, oldPrice: null, category: 'Exotic', image: 'image3/purple_orchid.png', badge: 'New', rating: 5 },
    { id: 66, name: 'Sunshine Express', price: 24, oldPrice: 29, category: 'Cheerful', image: 'image3/sunflowers.png', badge: '-17%', rating: 4 },
    { id: 67, name: 'Romantic Evening', price: 49, oldPrice: null, category: 'Romantic', image: 'image3/red_roses.png', badge: null, rating: 5 },
    { id: 68, name: 'Grand Celebration', price: 85, oldPrice: null, category: 'Gift Set', image: 'image1/premium.jpg', badge: 'Bestseller', rating: 5 },
    { id: 69, name: 'Fresh Start', price: 26, oldPrice: null, category: 'Simple', image: 'image3/white_lilies.png', badge: null, rating: 4 },
    { id: 70, name: 'Crimson Love', price: 44, oldPrice: null, category: 'Premium', image: 'image3/red_roses.png', badge: null, rating: 5 },
    { id: 71, name: 'Spring Meadow', price: 33, oldPrice: 38, category: 'Spring', image: 'image3/colorful_tulips.png', badge: '-13%', rating: 4 },
    { id: 72, name: 'Heavenly White', price: 39, oldPrice: null, category: 'Wedding', image: 'image3/white_lilies.png', badge: null, rating: 5 },
    { id: 73, name: 'Party Time', price: 35, oldPrice: null, category: 'Celebration', image: 'image2/party.jpg', badge: 'New', rating: 5 },
    { id: 74, name: 'Secret Garden', price: 48, oldPrice: null, category: 'Mixed', image: 'image1/gate.jpg', badge: null, rating: 4 },
    { id: 75, name: 'Rose Perfection', price: 56, oldPrice: null, category: 'Premium', image: 'image3/red_roses.png', badge: 'Bestseller', rating: 5 },
    { id: 76, name: 'Sweet Pink', price: 32, oldPrice: null, category: 'Pastel', image: 'image3/pink_roses.png', badge: null, rating: 4 },
    { id: 77, name: 'Dark Romance', price: 61, oldPrice: null, category: 'Exotic', image: 'image1/black.jpg', badge: 'New', rating: 5 },
    { id: 78, name: 'Sunny Days', price: 25, oldPrice: 30, category: 'Cheerful', image: 'image3/sunflowers.png', badge: '-17%', rating: 4 },
    { id: 79, name: 'Ultimate Gift Box', price: 99, oldPrice: null, category: 'Gift Set', image: 'image2/pack.jpg', badge: 'Luxury', rating: 5 },
    { id: 80, name: 'Delicate Touch', price: 29, oldPrice: null, category: 'Simple', image: 'image1/soft.jpg', badge: null, rating: 4 },
    { id: 81, name: 'Passion Flame', price: 47, oldPrice: null, category: 'Romantic', image: 'image3/red_roses.png', badge: null, rating: 5 },
    { id: 82, name: 'Forever Yours', price: 52, oldPrice: null, category: 'Premium', image: 'image3/pink_roses.png', badge: 'New', rating: 5 },
    { id: 83, name: 'Tulip Dream', price: 31, oldPrice: 36, category: 'Spring', image: 'image3/colorful_tulips.png', badge: '-14%', rating: 4 },
    { id: 84, name: 'Grace & Beauty', price: 43, oldPrice: null, category: 'Mixed', image: 'image3/white_lilies.png', badge: null, rating: 5 },
    { id: 85, name: 'Bridal Bliss', price: 88, oldPrice: null, category: 'Wedding', image: 'image3/white_lilies.png', badge: 'Premium', rating: 5 },
    { id: 86, name: 'Celebration Joy', price: 37, oldPrice: null, category: 'Celebration', image: 'image2/party.jpg', badge: null, rating: 5 },
    { id: 87, name: 'Orchid Magic', price: 58, oldPrice: null, category: 'Exotic', image: 'image3/purple_orchid.png', badge: 'Bestseller', rating: 5 },
    { id: 88, name: 'Rose Garden', price: 41, oldPrice: null, category: 'Premium', image: 'image3/red_roses.png', badge: null, rating: 5 },
    { id: 89, name: 'Soft Whispers', price: 28, oldPrice: null, category: 'Pastel', image: 'image3/pink_roses.png', badge: null, rating: 4 },
    { id: 90, name: 'Heartfelt Love', price: 46, oldPrice: 54, category: 'Romantic', image: 'image3/red_roses.png', badge: '-15%', rating: 5 },
    { id: 91, name: 'Golden Hour', price: 34, oldPrice: null, category: 'Cheerful', image: 'image3/sunflowers.png', badge: 'New', rating: 4 },
    { id: 92, name: 'Luxury Ensemble', price: 105, oldPrice: null, category: 'Gift Set', image: 'image1/premium.jpg', badge: 'Luxury', rating: 5 },
    { id: 93, name: 'Tranquil Garden', price: 33, oldPrice: null, category: 'Indoor Plants', image: 'image3/purple_orchid.png', badge: null, rating: 4 },
    { id: 94, name: 'Red Velvet', price: 49, oldPrice: null, category: 'Premium', image: 'image3/red_roses.png', badge: null, rating: 5 },
    { id: 95, name: 'Spring Festival', price: 36, oldPrice: 42, category: 'Spring', image: 'image3/colorful_tulips.png', badge: '-14%', rating: 4 },
    { id: 96, name: 'Pure Elegance', price: 54, oldPrice: null, category: 'Wedding', image: 'image3/white_lilies.png', badge: 'New', rating: 5 },
    { id: 97, name: 'Joyful Moments', price: 39, oldPrice: null, category: 'Celebration', image: 'image2/party.jpg', badge: 'Popular', rating: 5 },
    { id: 98, name: 'Exotic Paradise', price: 63, oldPrice: null, category: 'Exotic', image: 'image3/purple_orchid.png', badge: null, rating: 5 },
    { id: 99, name: 'Ultimate Rose Collection', price: 79, oldPrice: null, category: 'Luxury Box', image: 'image3/red_roses.png', badge: 'Bestseller', rating: 5 }
];

// ===== PAGINATION SETTINGS =====
const PRODUCTS_PER_PAGE = 12;
let currentPage = 1;
let filteredProducts = [...allProducts];

// ===== CART =====
let cart = JSON.parse(localStorage.getItem('floriaCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('floriaWishlist')) || [];

// ===== TOAST NOTIFICATION =====
function showToast(message) {
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ===== UPDATE CART COUNT =====
function updateCartCount() {
    document.querySelectorAll('#cart-btn span').forEach(span => {
        span.textContent = `(${cart.length})`;
    });
}

// ===== RENDER PRODUCT CARD =====
function createProductCard(product) {
    const stars = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
    const badgeClass = product.badge?.includes('%') ? 'discount' :
        product.badge === 'Bestseller' ? 'bestseller' :
            product.badge === 'Luxury' || product.badge === 'Premium' ? 'premium' : '';

    return `
        <div class="product-card" data-id="${product.id}" data-price="${product.price}">
            ${product.badge ? `<div class="badge ${badgeClass}">${product.badge}</div>` : ''}
            <div class="image-box">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="overlay-icons">
                    <a href="#" class="fas fa-eye quick-view-btn"></a>
                    <a href="#" class="fas fa-heart wishlist-btn"></a>
                </div>
            </div>
            <div class="content">
                <span class="category-tag">${product.category}</span>
                <h3>${product.name}</h3>
                <div class="price">$${product.price.toFixed(2)} ${product.oldPrice ? `<span>$${product.oldPrice.toFixed(2)}</span>` : ''}</div>
                <div class="stars">${stars}</div>
                <button class="btn btn-add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
            </div>
        </div>
    `;
}

// ===== RENDER PRODUCTS =====
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
    const pageProducts = filteredProducts.slice(start, end);

    grid.innerHTML = pageProducts.map(createProductCard).join('');

    // Update count
    document.getElementById('productsCount').innerHTML =
        `Showing <strong>${start + 1}-${Math.min(end, filteredProducts.length)}</strong> of <strong>${filteredProducts.length}</strong> products`;

    // Attach event listeners
    attachProductEvents();
    renderPagination();
}

// ===== RENDER PAGINATION =====
function renderPagination() {
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    const pagination = document.getElementById('pagination');

    let html = '';

    // Previous button
    html += `<button class="page-btn ${currentPage === 1 ? 'disabled' : ''}" data-page="prev" ${currentPage === 1 ? 'disabled' : ''}>
        <i class="fas fa-chevron-left"></i>
    </button>`;

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            html += `<span class="page-dots">...</span>`;
        }
    }

    // Next button
    html += `<button class="page-btn ${currentPage === totalPages ? 'disabled' : ''}" data-page="next" ${currentPage === totalPages ? 'disabled' : ''}>
        <i class="fas fa-chevron-right"></i>
    </button>`;

    pagination.innerHTML = html;

    // Page click events
    pagination.querySelectorAll('.page-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            if (this.disabled) return;
            const page = this.dataset.page;
            if (page === 'prev') currentPage--;
            else if (page === 'next') currentPage++;
            else currentPage = parseInt(page);

            renderProducts();
            window.scrollTo({ top: 300, behavior: 'smooth' });
        });
    });
}

// ===== ATTACH PRODUCT EVENTS =====
function attachProductEvents() {
    // Add to cart
    document.querySelectorAll('.btn-add-to-cart').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const id = this.dataset.id;
            const name = this.dataset.name;
            const price = parseFloat(this.dataset.price);

            if (!cart.find(item => item.id === id)) {
                cart.push({ id, name, price, quantity: 1 });
                localStorage.setItem('floriaCart', JSON.stringify(cart));
                showToast(`${name} added to cart!`);
                updateCartCount();
            } else {
                showToast('Already in cart!');
            }

            this.textContent = '✓ Added!';
            this.style.background = '#4CAF50';
            setTimeout(() => {
                this.textContent = 'Add to Cart';
                this.style.background = '';
            }, 1500);
        });
    });

    // Wishlist
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const name = this.closest('.product-card').querySelector('h3').textContent;

            if (wishlist.includes(name)) {
                wishlist = wishlist.filter(item => item !== name);
                this.style.color = '';
                showToast('Removed from wishlist');
            } else {
                wishlist.push(name);
                this.style.color = '#e84393';
                showToast('Added to wishlist ❤️');
            }
            localStorage.setItem('floriaWishlist', JSON.stringify(wishlist));
        });
    });

    // Quick view
    document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const card = this.closest('.product-card');
            const img = card.querySelector('img').src;
            const name = card.querySelector('h3').textContent;
            const price = card.querySelector('.price').textContent;
            const category = card.querySelector('.category-tag').textContent;

            showQuickViewModal(img, name, price, category);
        });
    });
}

// ===== QUICK VIEW MODAL =====
function showQuickViewModal(img, name, price, category) {
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-body">
                <img src="${img}" alt="${name}">
                <div class="modal-info">
                    <span class="category-tag">${category}</span>
                    <h2>${name}</h2>
                    <div class="price">${price}</div>
                    <p>A beautiful arrangement crafted with love. Perfect for any special occasion.</p>
                    <div class="quantity-box">
                        <button class="qty-btn" onclick="this.nextElementSibling.stepDown()">-</button>
                        <input type="number" value="1" min="1" max="10">
                        <button class="qty-btn" onclick="this.previousElementSibling.stepUp()">+</button>
                    </div>
                    <button class="btn-add-modal">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    modal.querySelector('.modal-close').onclick = () => closeModal(modal);
    modal.querySelector('.modal-overlay').onclick = () => closeModal(modal);
    modal.querySelector('.btn-add-modal').onclick = () => {
        showToast(`${name} added to cart!`);
        closeModal(modal);
    };
}

function closeModal(modal) {
    modal.remove();
    document.body.style.overflow = '';
}

// ===== CATEGORY MAPPING =====
// Maps filter checkbox labels to the actual categories in the products data
const categoryMappings = {
    'All Products': null, // Special case - shows all
    'Bouquets': ['Bouquet', 'Mixed', 'Romantic', 'Spring', 'Cheerful', 'Pastel', 'Simple', 'Fresh', 'Seasonal', 'Celebration', 'Special'],
    'Luxury Boxes': ['Luxury Box', 'Gift Set', 'Gift Pack', 'Premium'],
    'Indoor Plants': ['Indoor Plants', 'Exotic'],
    'Wedding': ['Wedding']
};

// ===== PRICE RANGE MAPPING =====
const priceRanges = {
    'Under $30': { min: 0, max: 29.99 },
    '$30 - $50': { min: 30, max: 50 },
    '$50 - $100': { min: 50.01, max: 100 },
    'Over $100': { min: 100.01, max: Infinity }
};

// ===== FILTERING =====
function initFilters() {
    const filterSidebar = document.querySelector('.filter-sidebar');
    if (!filterSidebar) return;

    const categoryCheckboxes = filterSidebar.querySelectorAll('.filter-group:first-of-type input[type="checkbox"]');
    const priceCheckboxes = filterSidebar.querySelectorAll('.filter-group:last-of-type input[type="checkbox"]');

    // Apply filters when any checkbox changes
    filterSidebar.addEventListener('change', function (e) {
        if (e.target.type === 'checkbox') {
            applyFilters();
        }
    });

    // Handle "All Products" checkbox special behavior
    const allProductsCheckbox = categoryCheckboxes[0];
    allProductsCheckbox.addEventListener('change', function () {
        if (this.checked) {
            // Uncheck all other category checkboxes
            categoryCheckboxes.forEach((cb, index) => {
                if (index !== 0) cb.checked = false;
            });
        }
    });

    // Uncheck "All Products" when any other category is checked
    categoryCheckboxes.forEach((cb, index) => {
        if (index !== 0) {
            cb.addEventListener('change', function () {
                if (this.checked) {
                    allProductsCheckbox.checked = false;
                }
                // If no category is selected, recheck "All Products"
                const anyChecked = Array.from(categoryCheckboxes).slice(1).some(box => box.checked);
                if (!anyChecked) {
                    allProductsCheckbox.checked = true;
                }
            });
        }
    });
}

function applyFilters() {
    const filterSidebar = document.querySelector('.filter-sidebar');
    const categoryCheckboxes = filterSidebar.querySelectorAll('.filter-group:first-of-type input[type="checkbox"]');
    const priceCheckboxes = filterSidebar.querySelectorAll('.filter-group:last-of-type input[type="checkbox"]');

    // Get selected categories
    const selectedCategories = [];
    categoryCheckboxes.forEach(cb => {
        if (cb.checked) {
            const label = cb.parentElement.textContent.trim();
            selectedCategories.push(label);
        }
    });

    // Get selected price ranges
    const selectedPriceRanges = [];
    priceCheckboxes.forEach(cb => {
        if (cb.checked) {
            const label = cb.parentElement.textContent.trim();
            selectedPriceRanges.push(label);
        }
    });

    // Start with all products
    filteredProducts = [...allProducts];

    // Apply category filter (if not "All Products")
    if (!selectedCategories.includes('All Products') && selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            return selectedCategories.some(cat => {
                const mappedCategories = categoryMappings[cat];
                if (mappedCategories) {
                    return mappedCategories.includes(product.category);
                }
                return false;
            });
        });
    }

    // Apply price filter
    if (selectedPriceRanges.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            return selectedPriceRanges.some(range => {
                const priceRange = priceRanges[range];
                if (priceRange) {
                    return product.price >= priceRange.min && product.price <= priceRange.max;
                }
                return false;
            });
        });
    }

    // Re-apply current sort
    const sortValue = document.getElementById('sortSelect').value;
    if (sortValue === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'name') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Reset to first page and render
    currentPage = 1;
    renderProducts();

    // Show filter feedback
    const categoryCount = selectedCategories.filter(c => c !== 'All Products').length;
    const priceCount = selectedPriceRanges.length;
    if (categoryCount > 0 || priceCount > 0) {
        showToast(`Filtered: ${filteredProducts.length} products found`);
    }
}

// ===== SORTING =====
function initSort() {
    document.getElementById('sortSelect').addEventListener('change', function () {
        const value = this.value;

        if (value === 'price-asc') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (value === 'price-desc') {
            filteredProducts.sort((a, b) => b.price - a.price);
        } else if (value === 'name') {
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else {
            // Re-apply filters when returning to "Featured"
            applyFilters();
            return;
        }

        currentPage = 1;
        renderProducts();
        showToast('Products sorted!');
    });
}

// ===== HEADER FUNCTIONALITY =====
function initHeader() {
    const menu = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.navbar');
    const searchForm = document.querySelector('.search-form');

    if (menu) {
        menu.onclick = () => {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
            searchForm?.classList.remove('active');
        };
    }

    document.querySelector('#search-btn')?.addEventListener('click', () => {
        searchForm?.classList.toggle('active');
        menu?.classList.remove('fa-times');
        navbar?.classList.remove('active');
    });

    document.querySelector('#cart-btn')?.addEventListener('click', function () {
        if (cart.length === 0) {
            showToast('Your cart is empty');
        } else {
            const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            showToast(`Cart: ${cart.length} item(s) - $${total.toFixed(2)}`);
        }
    });
}

// ===== NEWSLETTER =====
function initNewsletter() {
    document.querySelector('.newsletter form')?.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        if (email) {
            showToast('Thank you for subscribing! 🌸');
            this.querySelector('input').value = '';
        }
    });
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function () {
    renderProducts();
    initFilters();
    initUserButton();
    initCartButton();
    initSort();
    initHeader();
    initNewsletter();
    updateCartCount();
});

// ===== HEADER & AUTH FUNCTIONS =====
function initUserButton() {
    const userBtn = document.querySelector('#user-btn');
    if (userBtn) {
        userBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const user = JSON.parse(localStorage.getItem('floriaUser')) || JSON.parse(sessionStorage.getItem('floriaUser'));

            if (user && user.loggedIn) {
                if (confirm(`Signed in as ${user.name}.\nEmail: ${user.email}\n\nSign out?`)) {
                    localStorage.removeItem('floriaUser');
                    sessionStorage.removeItem('floriaUser');
                    showToast('Signed out successfully');
                    updateUserIcon();
                }
            } else {
                window.location.href = 'signin.html';
            }
        });
        updateUserIcon();
    }
}

function updateUserIcon() {
    const userBtn = document.querySelector('#user-btn');
    if (userBtn) {
        const user = JSON.parse(localStorage.getItem('floriaUser')) || JSON.parse(sessionStorage.getItem('floriaUser'));
        if (user && user.loggedIn) {
            userBtn.style.color = '#e84393';
            userBtn.title = `Signed in as ${user.name}`;
        } else {
            userBtn.style.color = '';
            userBtn.title = 'Sign In';
        }
    }
}

function initCartButton() {
    const cartBtn = document.querySelector('#cart-btn, #cartBtn, .cart');
    if (cartBtn) {
        // Remove old listeners by cloning (optional but safe)
        const newBtn = cartBtn.cloneNode(true);
        cartBtn.parentNode.replaceChild(newBtn, cartBtn);

        newBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = 'cart.html';
        });
    }
}
