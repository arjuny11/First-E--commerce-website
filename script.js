// --- DATA ---
const categories = [
    { id: 'action-figures', label: 'Action Figures' },
    { id: 'dolls', label: 'Dolls & Accessories' },
    { id: 'building', label: 'Building Sets' },
    { id: 'educational', label: 'Educational & STEM' },
    { id: 'outdoor', label: 'Outdoor Play' },
    { id: 'stuffed-animals', label: 'Stuffed Animals' },
    { id: 'vehicles', label: 'Vehicles & RC' },
    { id: 'arts-crafts', label: 'Arts & Crafts' }
];

const ages = [
    { id: '0-2', label: '0-2 Years' },
    { id: '3-5', label: '3-5 Years' },
    { id: '6-8', label: '6-8 Years' },
    { id: '9-12', label: '9-12 Years' },
    { id: '13+', label: '13+ Years' }
];

const products = [
    { id: 1, name: 'Galactic Ranger Action Figure', category: 'action-figures', age: '6-8', price: 1499, rating: 4.8, img: 'https://images.unsplash.com/photo-1596461404969-9ce20c714f62?w=500&auto=format&fit=crop&q=60', badge: 'hot' },
    { id: 2, name: 'Princess Castle Playset', category: 'dolls', age: '3-5', price: 3499, rating: 4.5, img: 'https://images.unsplash.com/photo-1558066164-16a8afaf82bd?w=500&auto=format&fit=crop&q=60', badge: '' },
    { id: 3, name: 'Mega Brick Creator set', category: 'building', age: '6-8', price: 2999, rating: 4.9, img: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=500&auto=format&fit=crop&q=60', badge: 'new' },
    { id: 4, name: 'Telescope Explorer Kit', category: 'educational', age: '9-12', price: 1999, rating: 4.2, img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&auto=format&fit=crop&q=60', badge: '' },
    { id: 5, name: 'Super Soaker Water Blaster', category: 'outdoor', age: '6-8', price: 999, rating: 4.6, img: 'https://images.unsplash.com/photo-1620331006093-6c8a00ddf8dc?w=500&auto=format&fit=crop&q=60', badge: 'sale', oldPrice: 1499 },
    { id: 6, name: 'Giant Plush Teddy Bear', category: 'stuffed-animals', age: '0-2', price: 2499, rating: 5.0, img: 'https://images.unsplash.com/photo-1534165561334-0818276f7c70?w=500&auto=format&fit=crop&q=60', badge: '' },
    { id: 7, name: 'RC Racing Car Pro', category: 'vehicles', age: '9-12', price: 3999, rating: 4.7, img: 'https://images.unsplash.com/photo-1594787317208-e8cb5219ddef?w=500&auto=format&fit=crop&q=60', badge: 'hot' },
    { id: 8, name: 'Ultimate Slime Kit', category: 'arts-crafts', age: '6-8', price: 799, rating: 4.3, img: 'https://images.unsplash.com/photo-1610486660634-192aa7f4f6b2?w=500&auto=format&fit=crop&q=60', badge: '' },
    { id: 9, name: 'Super Hero Action Figure', category: 'action-figures', age: '3-5', price: 899, rating: 4.4, img: 'https://images.unsplash.com/photo-1597818987453-6efdc5db91ee?w=500&auto=format&fit=crop&q=60', badge: '' },
    { id: 10, name: 'Fashion Doll Collection', category: 'dolls', age: '6-8', price: 1799, rating: 4.6, img: 'https://plus.unsplash.com/premium_photo-1678229875475-7b64510b6413?w=500&auto=format&fit=crop&q=60', badge: 'new' },
    { id: 11, name: 'Creative Blocks XXL', category: 'building', age: '0-2', price: 1599, rating: 4.8, img: 'https://images.unsplash.com/photo-1594236968032-4876b328a1ea?w=500&auto=format&fit=crop&q=60', badge: '' },
    { id: 12, name: 'Robot Chemistry Lab', category: 'educational', age: '13+', price: 4499, rating: 4.9, img: 'https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?w=500&auto=format&fit=crop&q=60', badge: 'sale', oldPrice: 5999 },
    { id: 13, name: 'Foldable Kick Scooter', category: 'outdoor', age: '6-8', price: 2999, rating: 4.7, img: 'https://plus.unsplash.com/premium_photo-1661628178652-52ce6d428135?w=500&auto=format&fit=crop&q=60', badge: '' },
    { id: 14, name: 'Fluffy Bunny Stuffed Toy', category: 'stuffed-animals', age: '0-2', price: 599, rating: 4.5, img: 'https://images.unsplash.com/photo-1559419134-8c430e461a1b?w=500&auto=format&fit=crop&q=60', badge: '' },
    { id: 15, name: 'Die-Cast Police Cruiser', category: 'vehicles', age: '3-5', price: 699, rating: 4.6, img: 'https://images.unsplash.com/photo-1621255855217-1fce774221d6?w=500&auto=format&fit=crop&q=60', badge: '' },
    { id: 16, name: 'Watercolor Paint Set', category: 'arts-crafts', age: '13+', price: 499, rating: 4.1, img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&auto=format&fit=crop&q=60', badge: '' },
    { id: 17, name: 'Dragon Knight Miniature', category: 'action-figures', age: '9-12', price: 899, rating: 4.7, img: 'https://images.unsplash.com/photo-1591585093751-2292f3af5e6b?w=500&auto=format&fit=crop&q=60', badge: 'hot' },
    { id: 18, name: 'Dream Dollhouse', category: 'dolls', age: '6-8', price: 6999, rating: 4.9, img: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=500&auto=format&fit=crop&q=60', badge: 'sale', oldPrice: 8999 },
    { id: 19, name: 'Motorized Train Set', category: 'building', age: '9-12', price: 4999, rating: 4.8, img: 'https://images.unsplash.com/photo-1563200782-fa5fed1765c9?w=500&auto=format&fit=crop&q=60', badge: 'new' },
    { id: 20, name: 'Dinosaur Fossil Dig Kit', category: 'educational', age: '6-8', price: 1199, rating: 4.4, img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=500&auto=format&fit=crop&q=60', badge: '' },
    { id: 21, name: 'Junior Basketball Hoop', category: 'outdoor', age: '3-5', price: 2199, rating: 4.5, img: 'https://images.unsplash.com/photo-1629255267440-62aa539423c5?w=500&auto=format&fit=crop&q=60', badge: '' },
    { id: 22, name: 'Talking Parrot Plush', category: 'stuffed-animals', age: '3-5', price: 1299, rating: 4.2, img: 'https://images.unsplash.com/photo-1606121408801-b7692fcab9ea?w=500&auto=format&fit=crop&q=60', badge: '' },
    { id: 23, name: 'Fire Engine Truck', category: 'vehicles', age: '3-5', price: 1499, rating: 4.6, img: 'https://images.unsplash.com/photo-1614013442385-e105e46dd240?w=500&auto=format&fit=crop&q=60', badge: '' },
    { id: 24, name: 'Bead Jewelry Maker', category: 'arts-crafts', age: '9-12', price: 799, rating: 4.3, img: 'https://images.unsplash.com/photo-1550985955-f2dcb6bebbef?w=500&auto=format&fit=crop&q=60', badge: '' }
];

// --- STATE ---
let cart = [];
let currentCategory = 'all';
let currentAge = 'all';
let searchQuery = '';
let currentSort = 'featured';

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    renderFilters();
    renderProducts();
    setupEventListeners();
});

// --- RENDER FUNCTIONS ---
function renderFilters() {
    const categoryContainer = document.getElementById('categoryFilters');
    categories.forEach(cat => {
        const div = document.createElement('div');
        div.innerHTML = `<label><input type="radio" name="category" value="${cat.id}"> ${cat.label}</label>`;
        categoryContainer.appendChild(div);
    });

    const ageContainer = document.getElementById('ageFilters');
    ages.forEach(age => {
        const div = document.createElement('div');
        div.innerHTML = `<label><input type="radio" name="age" value="${age.id}"> ${age.label}</label>`;
        ageContainer.appendChild(div);
    });
}

function getCategoryLabel(id) {
    const cat = categories.find(c => c.id === id);
    return cat ? cat.label : id;
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    let filtered = products.filter(p => {
        const matchCategory = currentCategory === 'all' || p.category === currentCategory;
        const matchAge = currentAge === 'all' || p.age === currentAge;
        const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchAge && matchSearch;
    });

    // Sorting
    if (currentSort === 'priceLow') filtered.sort((a, b) => a.price - b.price);
    else if (currentSort === 'priceHigh') filtered.sort((a, b) => b.price - a.price);
    else if (currentSort === 'rating') filtered.sort((a, b) => b.rating - a.rating);

    if (filtered.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #868e96; font-size: 1.2rem;">No toys match your filters. Try adjusting them!</div>';
        return;
    }

    filtered.forEach(p => {
        const badgeHTML = p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge.toUpperCase()}</span>` : '';
        const oldPriceHTML = p.oldPrice ? `<span class="product-original-price">₹${p.oldPrice.toLocaleString('en-IN')}</span>` : '';
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            ${badgeHTML}
            <button class="product-wishlist" onclick="toggleWishlist(this)"><i class="fa-solid fa-heart"></i></button>
            <div class="product-img-wrapper">
                <img src="${p.img}" alt="${p.name}" class="product-img">
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryLabel(p.category)}</span>
                <h3 class="product-title">${p.name}</h3>
                <div class="product-rating">
                    <i class="fa-solid fa-star"></i> ${p.rating} <span>(${Math.floor(Math.random() * 200 + 10)} reviews)</span>
                </div>
                <div class="product-bottom">
                    <div>
                        <span class="product-price">₹${p.price.toLocaleString('en-IN')}</span>
                        ${oldPriceHTML}
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${p.id})"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- CART LOGIC ---
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    showToast(`${product.name} added to cart!`);
}

function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    
    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }
    updateCartUI();
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    updateCartUI();
    showToast('Item removed from cart');
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cartItems');
    const badge = document.getElementById('cartBadge');
    const totalValue = document.getElementById('cartTotalValue');
    
    let totalCount = 0;
    let totalPrice = 0;
    
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your cart is empty.</div>';
    } else {
        cart.forEach(item => {
            totalCount += item.quantity;
            totalPrice += item.price * item.quantity;
            
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <img src="${item.img}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
                    <div class="quantity-control">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="item-remove" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-trash-can"></i></button>
            `;
            cartItemsContainer.appendChild(div);
        });
    }
    
    badge.innerText = totalCount;
    totalValue.innerText = `₹${totalPrice.toLocaleString('en-IN')}`;
}

function toggleCart() {
    document.getElementById('cartPanel').classList.toggle('active');
    document.getElementById('cartOverlay').classList.toggle('active');
}

function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    showToast('Proceeding to secure checkout...');
    // Real app: wire up checkout process here
}

function toggleWishlist(btn) {
    btn.classList.toggle('active');
    if (btn.classList.contains('active')) {
        showToast('Added to wishlist!');
    } else {
        showToast('Removed from wishlist');
    }
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
    // Filters (attached to document/delegated because elements are dynamically added, or query all since they are added synchronously)
    document.querySelectorAll('input[name="category"]').forEach(r => {
        r.addEventListener('change', (e) => {
            currentCategory = e.target.value;
            renderProducts();
        });
    });

    document.querySelectorAll('input[name="age"]').forEach(r => {
        r.addEventListener('change', (e) => {
            currentAge = e.target.value;
            renderProducts();
        });
    });

    // Sort
    const sortSelect = document.getElementById('sortSelect');
    if(sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderProducts();
        });
    }

    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderProducts();
        });
    }
}

// --- AUTH MODAL ---
function openAuthModal() {
    document.getElementById('authModalOverlay').classList.add('active');
}

function closeAuthModal(e) {
    if (e && e.target !== e.currentTarget) return; // Only close if clicking overlay or close btn
    document.getElementById('authModalOverlay').classList.remove('active');
}

function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form-container').forEach(f => f.classList.add('hidden'));
    
    if (tab === 'login') {
        document.querySelector('.auth-tab:nth-child(1)').classList.add('active');
        document.getElementById('loginForm').classList.remove('hidden');
    } else {
        document.querySelector('.auth-tab:nth-child(2)').classList.add('active');
        document.getElementById('signupForm').classList.remove('hidden');
    }
}

// Backend Integration Points
function handleEmailAuth(e, type) {
    e.preventDefault();
    if(type === 'login') {
        const btn = document.querySelector('.js-login-btn');
        const origText = btn.innerText;
        btn.innerText = 'Verifying...';
        setTimeout(() => {
            showToast('Logged in successfully!');
            closeAuthModal();
            btn.innerText = origText;
            e.target.reset();
        }, 1000);
    } else {
        const btn = document.querySelector('.js-signup-btn');
        const origText = btn.innerText;
        btn.innerText = 'Creating account...';
        setTimeout(() => {
            showToast('Account created successfully!');
            closeAuthModal();
            btn.innerText = origText;
            e.target.reset();
        }, 1000);
    }
}

function handleGoogleAuth() {
    showToast('Connecting to Google...');
    // Real implementation: trigger Google OAuth popup
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    const color = type === 'success' ? 'var(--primary)' : 'var(--text-main)';
    
    toast.style.borderLeftColor = color;
    toast.innerHTML = `<i class="fa-solid ${icon}" style="color:${color}"></i> <span>${message}</span>`;
    
    container.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Remove after 3s
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
