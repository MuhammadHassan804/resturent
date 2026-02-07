// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');
const menuNavBtns = document.querySelectorAll('.menu-nav-btn');
const menuCategories = document.querySelectorAll('.menu-category');
const addToCartBtns = document.querySelectorAll('.btn-add');
const addDealBtns = document.querySelectorAll('.btn-add-deal');
const cartItems = document.getElementById('cartItems');
const subtotalEl = document.getElementById('subtotal');
const grandTotalEl = document.getElementById('grandTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const cartCount = document.getElementById('cartCount');
const orderForm = document.getElementById('orderForm');
const floatingCartBtn = document.querySelector('.cart-btn');

// Cart State
let cart = [];
const deliveryCharge = 100;

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Menu Category Switching
menuNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and categories
        menuNavBtns.forEach(b => b.classList.remove('active'));
        menuCategories.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Show corresponding category
        const category = btn.getAttribute('data-category');
        const targetCategory = document.getElementById(`${category}-category`);
        if (targetCategory) {
            targetCategory.classList.add('active');
        }
        
        // Scroll to menu section
        document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    });
});

// Add to Cart Functionality
function addToCart(itemName, price, quantity = 1) {
    const existingItem = cart.find(item => item.name === itemName);
    
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.total = existingItem.price * existingItem.quantity;
    } else {
        cart.push({
            name: itemName,
            price: price,
            quantity: quantity,
            total: price * quantity
        });
    }
    
    updateCartDisplay();
    showNotification(`${itemName} added to cart!`);
}

// Update Cart Display
function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items display
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <p>Add items from our menu</p>
            </div>
        `;
        checkoutBtn.disabled = true;
        subtotalEl.textContent = 'Rs 0';
        grandTotalEl.textContent = 'Rs 100';
        return;
    }
    
    // Calculate subtotal
    let subtotal = 0;
    
    // Add each item to cart display
    cart.forEach((item, index) => {
        subtotal += item.total;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-header">
                <span class="item-name">${item.name}</span>
                <button class="remove-item" data-index="${index}">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="cart-item-details">
                <span>${item.quantity} × Rs ${item.price}</span>
                <span class="item-total">Rs ${item.total}</span>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Calculate totals
    const grandTotal = subtotal + deliveryCharge;
    
    // Update totals display
    subtotalEl.textContent = `Rs ${subtotal}`;
    grandTotalEl.textContent = `Rs ${grandTotal}`;
    
    // Enable checkout button
    checkoutBtn.disabled = false;
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            removeFromCart(index);
        });
    });
}

// Remove from Cart
function removeFromCart(index) {
    const itemName = cart[index].name;
    cart.splice(index, 1);
    updateCartDisplay();
    showNotification(`${itemName} removed from cart`);
}

// Add to Cart Button Event Listeners
addToCartBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const itemName = this.getAttribute('data-item');
        const price = parseInt(this.getAttribute('data-price'));
        addToCart(itemName, price);
    });
});

// Add Deal to Cart
addDealBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const dealName = this.getAttribute('data-deal');
        const price = parseInt(this.getAttribute('data-price'));
        addToCart(dealName, price);
    });
});

// Checkout Button
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    
    // Scroll to order form
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
    
    // Pre-fill order items
    const orderItems = cart.map(item => 
        `${item.quantity} × ${item.name} = Rs ${item.total}`
    ).join('\n');
    
    // Show notification
    showNotification('Scroll down to complete your order!');
});

// Order Form Submission
orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        showNotification('Please add items to your cart first!', 'error');
        return;
    }
    
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const instructions = document.getElementById('instructions').value.trim();
    
    if (!name || !phone || !address) {
        showNotification('Please fill in all required fields!', 'error');
        return;
    }
    
    // Prepare order summary
    const orderSummary = cart.map(item => 
        `${item.quantity} × ${item.name} = Rs ${item.total}`
    ).join('%0A');
    
    const subtotal = cart.reduce((sum, item) => sum + item.total, 0);
    const total = subtotal + deliveryCharge;
    
    // Create WhatsApp message
    const message = `🍕 *New Order from Fast Pizza Cafe & Grill* 🍕%0A%0A` +
                   `📋 *Order Details:*%0A${orderSummary}%0A%0A` +
                   `📦 Subtotal: Rs ${subtotal}%0A` +
                   `🚚 Delivery: Rs ${deliveryCharge}%0A` +
                   `💰 *Total Amount: Rs ${total}*%0A%0A` +
                   `👤 *Customer Information:*%0A` +
                   `Name: ${name}%0A` +
                   `Phone: ${phone}%0A` +
                   `Address: ${address}%0A` +
                   `Instructions: ${instructions || 'None'}%0A%0A` +
                   `📍 *Restaurant Info:*%0A` +
                   `Fast Pizza Cafe & Grill%0A` +
                   `Mehrabpur Rd, Ward No. 3%0A` +
                   `📞 +92 300 1234567`;
    
    // Open WhatsApp
    window.open(`https://wa.me/923001234567?text=${encodeURIComponent(message)}`, '_blank');
    
    // Reset form and cart
    orderForm.reset();
    cart = [];
    updateCartDisplay();
    
    // Show success message
    showNotification('Order submitted successfully! Check WhatsApp for confirmation.', 'success');
});

// Show Notification
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, var(--success), #4CAF50)' : 'linear-gradient(135deg, var(--primary), var(--primary-dark))'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            
            // Calculate scroll position (account for fixed header)
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Update Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Floating Cart Button Click
floatingCartBtn.addEventListener('click', () => {
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
});

// Initialize
updateCartDisplay();

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .menu-item, .deal-card').forEach(el => {
    observer.observe(el);
});