/**
 * SellerHub Seller Dashboard - Bootstrap Version
 * Main Application JavaScript File
 * 
 * Integrates with ThemeLoader for pluggable theming
 */

// =============================================
// MOCK DATA
// =============================================

const CONFIG = {
  brand: {
    name: "SellerHub",
    tagline: "Grow Your Business with SellerHub",
    logo: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?w=200&h=200&fit=crop"
  },
  currency: "₦"
};

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description: "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
    price: 45000,
    stock: 150,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    status: "active",
    sales: 234
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    description: "Advanced fitness tracking with heart rate monitor and GPS.",
    price: 89000,
    stock: 75,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    status: "active",
    sales: 189
  },
  {
    id: 3,
    name: "Leather Crossbody Bag",
    description: "Handcrafted genuine leather bag perfect for everyday use.",
    price: 35000,
    stock: 45,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop",
    status: "active",
    sales: 156
  },
  {
    id: 4,
    name: "Organic Green Tea Set",
    description: "Premium organic green tea collection with 6 varieties.",
    price: 12500,
    stock: 200,
    category: "Food & Beverages",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
    status: "active",
    sales: 312
  },
  {
    id: 5,
    name: "Minimalist Desk Lamp",
    description: "Modern LED desk lamp with adjustable brightness and color temperature.",
    price: 22000,
    stock: 89,
    category: "Home & Living",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop",
    status: "active",
    sales: 98
  },
  {
    id: 6,
    name: "Cotton T-Shirt Pack",
    description: "Premium cotton t-shirts in 5 different colors.",
    price: 18500,
    stock: 300,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    status: "active",
    sales: 445
  },
  {
    id: 7,
    name: "Portable Power Bank",
    description: "20000mAh power bank with fast charging support.",
    price: 15500,
    stock: 120,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop",
    status: "active",
    sales: 267
  },
  {
    id: 8,
    name: "Yoga Mat Premium",
    description: "Extra thick yoga mat with carrying strap.",
    price: 9500,
    stock: 85,
    category: "Sports & Fitness",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop",
    status: "active",
    sales: 178
  },
  {
    id: 9,
    name: "Ceramic Coffee Mug Set",
    description: "Set of 6 hand-painted ceramic mugs.",
    price: 14000,
    stock: 65,
    category: "Home & Living",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=300&fit=crop",
    status: "active",
    sales: 134
  },
  {
    id: 10,
    name: "Natural Skincare Set",
    description: "Organic skincare routine with cleanser, toner, and moisturizer.",
    price: 28500,
    stock: 95,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
    status: "active",
    sales: 201
  }
];

const MOCK_ORDERS = [
  {
    id: "ORD-2024-0008",
    customer: "Emeka Okafor",
    email: "emeka@email.com",
    items: [{ name: "Wireless Bluetooth Headphones", qty: 1, price: 45000 }],
    total: 29750,
    status: "processing",
    date: "2024-06-17",
    address: "15 Adeniran Ogunsanya, Surulere, Lagos"
  },
  {
    id: "ORD-2024-0007",
    customer: "Amina Yusuf",
    email: "amina@email.com",
    items: [{ name: "Leather Crossbody Bag", qty: 2, price: 70000 }, { name: "Cotton T-Shirt Pack", qty: 1, price: 18500 }],
    total: 380000,
    status: "delivered",
    date: "2024-06-16",
    address: "42 Ahmadu Bello Way, Victoria Island, Lagos"
  },
  {
    id: "ORD-2024-0006",
    customer: "Chidi Nnamdi",
    email: "chidi@email.com",
    items: [{ name: "Smart Watch Pro", qty: 5, price: 445000 }, { name: "Portable Power Bank", qty: 2, price: 31000 }],
    total: 1450000,
    status: "pending",
    date: "2024-06-15",
    address: "8 Hospital Road, GRA, Port Harcourt"
  },
  {
    id: "ORD-2024-0005",
    customer: "Funke Adeyemi",
    email: "funke@email.com",
    items: [{ name: "Organic Green Tea Set", qty: 3, price: 37500 }, { name: "Ceramic Coffee Mug Set", qty: 2, price: 28000 }],
    total: 99250,
    status: "shipped",
    date: "2024-06-14",
    address: "23 Marina Road, Calabar"
  },
  {
    id: "ORD-2024-0004",
    customer: "Ibrahim Musa",
    email: "ibrahim@email.com",
    items: [{ name: "Yoga Mat Premium", qty: 2, price: 19000 }],
    total: 55000,
    status: "cancelled",
    date: "2024-06-11",
    address: "5 Kano Road, Kaduna"
  },
  {
    id: "ORD-2024-0003",
    customer: "Ngozi Eze",
    email: "ngozi@email.com",
    items: [{ name: "Natural Skincare Set", qty: 1, price: 28500 }],
    total: 28500,
    status: "delivered",
    date: "2024-06-10",
    address: "12 Ogui Road, Enugu"
  },
  {
    id: "ORD-2024-0002",
    customer: "Tunde Bakare",
    email: "tunde@email.com",
    items: [{ name: "Minimalist Desk Lamp", qty: 3, price: 66000 }],
    total: 66000,
    status: "delivered",
    date: "2024-06-08",
    address: "78 Allen Avenue, Ikeja, Lagos"
  },
  {
    id: "ORD-2024-0001",
    customer: "Aisha Mohammed",
    email: "aisha@email.com",
    items: [{ name: "Smart Watch Pro", qty: 1, price: 89000 }, { name: "Portable Power Bank", qty: 1, price: 15500 }],
    total: 104500,
    status: "delivered",
    date: "2024-06-05",
    address: "33 Wuse 2, Abuja"
  }
];

const MOCK_NOTIFICATIONS = [
  { id: 1, type: "order", title: "New Order Received", message: "Order #ORD-2024-0008 has been placed by Emeka Okafor", time: "5 minutes ago", read: false },
  { id: 2, type: "payment", title: "Payment Confirmed", message: "Payment of ₦380,000 for order #ORD-2024-0007 has been confirmed", time: "1 hour ago", read: false },
  { id: 3, type: "product", title: "Low Stock Alert", message: "Leather Crossbody Bag is running low on stock (45 units remaining)", time: "3 hours ago", read: false },
  { id: 4, type: "order", title: "Order Delivered", message: "Order #ORD-2024-0003 has been successfully delivered", time: "5 hours ago", read: true },
  { id: 5, type: "system", title: "Profile Updated", message: "Your store profile has been successfully updated", time: "1 day ago", read: true },
  { id: 6, type: "payment", title: "Payout Processed", message: "Your weekly payout of ₦520,000 has been processed", time: "2 days ago", read: true },
  { id: 7, type: "product", title: "Product Approved", message: "Your product 'Natural Skincare Set' has been approved for sale", time: "3 days ago", read: true },
  { id: 8, type: "order", title: "Order Cancelled", message: "Order #ORD-2024-0004 has been cancelled by customer", time: "4 days ago", read: true }
];

const MOCK_STATS = {
  totalRevenue: 2450000,
  totalOrders: 156,
  totalProducts: 48,
  totalCustomers: 892,
  pendingOrders: 12,
  revenueGrowth: 23.5,
  ordersGrowth: 18.2,
  productsGrowth: 8.5,
  customersGrowth: 15.8
};

const CATEGORIES = [
  "Electronics",
  "Fashion",
  "Home & Living",
  "Food & Beverages",
  "Beauty",
  "Sports & Fitness"
];

// =============================================
// UTILITY FUNCTIONS
// =============================================

function formatCurrency(amount) {
  return CONFIG.currency + amount.toLocaleString();
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-NG', { year: 'numeric', month: 'short', day: 'numeric' });
}

function getStatusBadgeClass(status) {
  const classes = {
    pending: 'badge-pending',
    processing: 'badge-processing',
    shipped: 'badge-shipped',
    delivered: 'badge-delivered',
    cancelled: 'badge-cancelled',
    active: 'bg-success',
    inactive: 'bg-secondary'
  };
  return classes[status] || 'bg-secondary';
}

function getNotificationIcon(type) {
  const icons = {
    order: '📦',
    payment: '💳',
    product: '🏷️',
    system: '⚙️'
  };
  return icons[type] || '📢';
}

// =============================================
// NAVIGATION & ROUTING
// =============================================

function navigateTo(page) {
  window.location.href = page;
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('show');
  }
}

function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.sidebar .nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// =============================================
// AUTHENTICATION (Mock)
// =============================================

function login(email, password) {
  console.log('[Auth] Logging in:', email);

  // Show loading state on submit button
  const submitBtn = document.querySelector('#loginForm button[type="submit"]');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Signing in...';
  }

  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userName', 'Demo Seller');

  // Small delay so user sees the loading state
  setTimeout(() => {
    console.log('[Auth] Redirecting to dashboard');
    window.location.href = 'dashboard.html';
  }, 500);
}

function logout() {
  console.log('[Auth] Logging out');
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userName');
  window.location.href = 'login.html';
}

function checkAuth() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const currentPage = window.location.pathname.split('/').pop();

  console.log('[Auth] Checking auth - page:', currentPage, 'loggedIn:', !!isLoggedIn);

  const publicPages = ['index.html', 'login.html', 'register.html', 'forgot-password.html', ''];
  const isPublicPage = publicPages.includes(currentPage);

  if (!isLoggedIn && !isPublicPage) {
    console.log('[Auth] Not logged in, redirecting to login');
    window.location.href = 'login.html';
    return false;
  }

  if (isLoggedIn && currentPage === 'login.html') {
    console.log('[Auth] Already logged in, redirecting to dashboard');
    window.location.href = 'dashboard.html';
    return false;
  }

  return true;
}

function getUser() {
  return {
    email: localStorage.getItem('userEmail') || 'seller@sellerhub.com',
    name: localStorage.getItem('userName') || 'Demo Seller',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  };
}

// =============================================
// THEME MANAGEMENT (Using ThemeLoader)
// =============================================

// Theme color previews for each theme
const THEME_PREVIEW_COLORS = {
  default: '#16a34a',
  dark: '#22c55e',
  ocean: '#0ea5e9',
  purple: '#8b5cf6',
  sunset: '#f97316'
};

async function initThemeSwitcher() {
  // Wait for theme loader to be ready
  if (typeof themeLoader === 'undefined') {
    console.warn('[App] ThemeLoader not available');
    return;
  }

  // Wait for theme loader initialization
  await themeLoader.init();

  // Create the floating theme switcher
  createThemeSwitcher();

  // Listen for theme changes
  window.addEventListener('themechange', () => {
    populateThemeOptions();
  });
}

function createThemeSwitcher() {
  // Remove any existing theme switcher
  const existing = document.querySelector('.theme-switcher-container');
  if (existing) existing.remove();

  // Create container
  const container = document.createElement('div');
  container.className = 'theme-switcher-container';

  // Create popout menu
  const popout = document.createElement('div');
  popout.className = 'theme-popout';
  popout.id = 'themePopout';

  const header = document.createElement('div');
  header.className = 'theme-popout-header';
  header.textContent = 'Choose Theme';
  popout.appendChild(header);

  const optionsContainer = document.createElement('div');
  optionsContainer.id = 'themeOptionsContainer';
  popout.appendChild(optionsContainer);

  // Create FAB button
  const btn = document.createElement('button');
  btn.className = 'theme-switcher-btn';
  btn.id = 'themeSwitcherFab';
  btn.setAttribute('aria-label', 'Toggle theme switcher');
  btn.innerHTML = '<i class="bi bi-palette"></i>';
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleThemePopout();
  });

  container.appendChild(popout);
  container.appendChild(btn);
  document.body.appendChild(container);

  // Populate theme options
  populateThemeOptions();

  // Close on outside click
  document.addEventListener('click', closeThemePopout);
}

function populateThemeOptions() {
  if (typeof themeLoader === 'undefined') return;

  const container = document.getElementById('themeOptionsContainer');
  if (!container) return;

  const themes = themeLoader.getThemes();
  const currentThemeId = themeLoader.getThemeId();

  container.innerHTML = themes.map(theme => {
    const isActive = theme.id === currentThemeId;
    const previewColor = THEME_PREVIEW_COLORS[theme.id] || '#888';
    return `
      <div class="theme-option${isActive ? ' active' : ''}" data-theme="${theme.id}">
        <span class="theme-color-preview" style="background-color: ${previewColor};"></span>
        <span>${theme.name}</span>
        ${isActive ? '<span class="theme-check">&#10003;</span>' : ''}
      </div>
    `;
  }).join('');

  // Attach click handlers
  container.querySelectorAll('.theme-option').forEach(option => {
    option.addEventListener('click', () => {
      const themeId = option.dataset.theme;
      if (themeId) {
        themeLoader.setTheme(themeId);
        populateThemeOptions();
        closeThemePopout();
        showToast(`Theme changed to ${themeLoader.getTheme()?.name}`, 'success');
      }
    });
  });
}

function toggleThemePopout() {
  const popout = document.getElementById('themePopout');
  if (popout) {
    popout.classList.toggle('show');
  }
}

function closeThemePopout(e) {
  const popout = document.getElementById('themePopout');
  const fab = document.getElementById('themeSwitcherFab');
  if (popout && e && !popout.contains(e.target) && fab && !fab.contains(e.target)) {
    popout.classList.remove('show');
  }
}

// =============================================
// RENDER FUNCTIONS
// =============================================

function renderDashboardStats() {
  const statsContainer = document.getElementById('dashboardStats');
  if (!statsContainer) return;

  statsContainer.innerHTML = `
    <div class="col-md-3 mb-4">
      <div class="stat-card">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <div class="stat-value">${formatCurrency(MOCK_STATS.totalRevenue)}</div>
            <div class="stat-label">Total Revenue</div>
          </div>
          <div class="stat-icon">💰</div>
        </div>
        <div class="mt-2">
          <small>+${MOCK_STATS.revenueGrowth}% from last month</small>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-4">
      <div class="stat-card" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8);">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <div class="stat-value">${MOCK_STATS.totalOrders}</div>
            <div class="stat-label">Total Orders</div>
          </div>
          <div class="stat-icon">📦</div>
        </div>
        <div class="mt-2">
          <small>+${MOCK_STATS.ordersGrowth}% from last month</small>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-4">
      <div class="stat-card" style="background: linear-gradient(135deg, #8b5cf6, #6d28d9);">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <div class="stat-value">${MOCK_STATS.totalProducts}</div>
            <div class="stat-label">Products</div>
          </div>
          <div class="stat-icon">🏷️</div>
        </div>
        <div class="mt-2">
          <small>+${MOCK_STATS.productsGrowth}% from last month</small>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-4">
      <div class="stat-card" style="background: linear-gradient(135deg, #f59e0b, #d97706);">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <div class="stat-value">${MOCK_STATS.totalCustomers}</div>
            <div class="stat-label">Customers</div>
          </div>
          <div class="stat-icon">👥</div>
        </div>
        <div class="mt-2">
          <small>+${MOCK_STATS.customersGrowth}% from last month</small>
        </div>
      </div>
    </div>
  `;
}

function renderRecentOrders() {
  const tableBody = document.getElementById('recentOrdersTable');
  if (!tableBody) return;

  const recentOrders = MOCK_ORDERS.slice(0, 5);
  
  tableBody.innerHTML = recentOrders.map(order => `
    <tr>
      <td><strong>${order.id}</strong></td>
      <td>${formatCurrency(order.total)}</td>
      <td><span class="badge ${getStatusBadgeClass(order.status)}">${order.status}</span></td>
      <td>${formatDate(order.date)}</td>
      <td>
        <button class="btn btn-sm btn-outline-primary" onclick="viewOrder('${order.id}')">View</button>
      </td>
    </tr>
  `).join('');
}

function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;

  productsGrid.innerHTML = MOCK_PRODUCTS.map(product => `
    <div class="col-md-4 col-lg-3 mb-4">
      <div class="card product-card h-100">
        <img src="${product.image}" alt="${product.name}" class="card-img-top">
        <div class="card-body product-info">
          <h6 class="card-title">${product.name}</h6>
          <p class="text-muted small mb-2">${product.category}</p>
          <div class="d-flex justify-content-between align-items-center">
            <span class="product-price">${formatCurrency(product.price)}</span>
            <span class="badge ${product.stock > 50 ? 'bg-success' : 'bg-warning'}">${product.stock} in stock</span>
          </div>
          <div class="mt-2">
            <small class="text-muted">${product.sales} sold</small>
          </div>
        </div>
        <div class="card-footer bg-transparent border-0">
          <div class="d-grid gap-2">
            <button class="btn btn-outline-primary btn-sm" onclick="editProduct(${product.id})">Edit</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderOrders() {
  const tableBody = document.getElementById('ordersTable');
  if (!tableBody) return;

  tableBody.innerHTML = MOCK_ORDERS.map(order => `
    <tr>
      <td><strong>${order.id}</strong></td>
      <td>
        <div>${order.customer}</div>
        <small class="text-muted">${order.email}</small>
      </td>
      <td>${order.items.length} item(s)</td>
      <td><strong>${formatCurrency(order.total)}</strong></td>
      <td><span class="badge ${getStatusBadgeClass(order.status)}">${order.status}</span></td>
      <td>${formatDate(order.date)}</td>
      <td>
        <button class="btn btn-sm btn-outline-primary me-1" onclick="viewOrder('${order.id}')">
          <i class="bi bi-eye"></i>
        </button>
        <button class="btn btn-sm btn-outline-secondary" onclick="printOrder('${order.id}')">
          <i class="bi bi-printer"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

function renderNotifications(filter = 'all') {
  const notificationsList = document.getElementById('notificationsList');
  if (!notificationsList) return;

  let filtered = MOCK_NOTIFICATIONS;
  if (filter === 'unread') {
    filtered = filtered.filter(n => !n.read);
  } else if (filter === 'orders') {
    filtered = filtered.filter(n => n.type === 'order');
  } else if (filter === 'payments') {
    filtered = filtered.filter(n => n.type === 'payment');
  }

  if (filtered.length === 0) {
    notificationsList.innerHTML = `
      <div class="text-center py-5 text-muted">
        <i class="bi bi-bell-slash fs-1 d-block mb-3"></i>
        <p>No notifications found.</p>
      </div>
    `;
    return;
  }

  notificationsList.innerHTML = filtered.map(notification => `
    <div class="card mb-3 ${notification.read ? 'opacity-75' : ''}" onclick="markNotificationRead(${notification.id})">
      <div class="card-body d-flex align-items-start">
        <div class="me-3 fs-4">${getNotificationIcon(notification.type)}</div>
        <div class="flex-grow-1">
          <div class="d-flex justify-content-between">
            <h6 class="mb-1">${notification.title}</h6>
            <small class="text-muted">${notification.time}</small>
          </div>
          <p class="mb-0 text-muted small">${notification.message}</p>
        </div>
        ${!notification.read ? '<span class="badge bg-primary">New</span>' : ''}
      </div>
    </div>
  `).join('');
}

function renderTopProducts() {
  const container = document.getElementById('topProducts');
  if (!container) return;

  const topProducts = [...MOCK_PRODUCTS]
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 5);

  container.innerHTML = topProducts.map((product, index) => `
    <div class="d-flex align-items-center mb-3 p-2 rounded" style="background-color: var(--surface-color);">
      <div class="me-3 text-muted">#${index + 1}</div>
      <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px;" class="me-3">
      <div class="flex-grow-1">
        <div class="fw-semibold">${product.name}</div>
        <small class="text-muted">${product.sales} sales</small>
      </div>
      <div class="text-end">
        <div class="fw-bold" style="color: var(--primary-color);">${formatCurrency(product.price)}</div>
      </div>
    </div>
  `).join('');
}

function updateNotificationBadge() {
  const badge = document.getElementById('notificationBadge');
  if (badge) {
    const unreadCount = MOCK_NOTIFICATIONS.filter(n => !n.read).length;
    badge.textContent = unreadCount;
    badge.style.display = unreadCount > 0 ? 'flex' : 'none';
  }
}

function updateUserAvatar() {
  const user = getUser();
  const avatarElements = document.querySelectorAll('.user-avatar');
  avatarElements.forEach(el => {
    el.src = user.avatar;
    el.alt = user.name;
  });
  
  const userNameElements = document.querySelectorAll('.user-name');
  userNameElements.forEach(el => {
    el.textContent = user.name;
  });
}

// =============================================
// EVENT HANDLERS
// =============================================

function viewOrder(orderId) {
  const order = MOCK_ORDERS.find(o => o.id === orderId);
  if (!order) return;

  const modalBody = document.getElementById('orderModalBody');
  if (modalBody) {
    modalBody.innerHTML = `
      <div class="mb-3">
        <strong>Order ID:</strong> ${order.id}
      </div>
      <div class="mb-3">
        <strong>Customer:</strong> ${order.customer}
      </div>
      <div class="mb-3">
        <strong>Email:</strong> ${order.email}
      </div>
      <div class="mb-3">
        <strong>Shipping Address:</strong> ${order.address}
      </div>
      <div class="mb-3">
        <strong>Status:</strong> <span class="badge ${getStatusBadgeClass(order.status)}">${order.status}</span>
      </div>
      <hr>
      <h6>Items</h6>
      <ul class="list-group mb-3">
        ${order.items.map(item => `
          <li class="list-group-item d-flex justify-content-between">
            <span>${item.name} x ${item.qty}</span>
            <strong>${formatCurrency(item.price * item.qty)}</strong>
          </li>
        `).join('')}
      </ul>
      <div class="d-flex justify-content-between">
        <strong>Total:</strong>
        <strong class="text-primary">${formatCurrency(order.total)}</strong>
      </div>
    `;
    
    const modal = new bootstrap.Modal(document.getElementById('orderModal'));
    modal.show();
  }
}

function editProduct(productId) {
  window.location.href = `edit-product.html?id=${productId}`;
}

function printOrder(orderId) {
  showToast('Printing order ' + orderId + '...', 'info');
}

function markNotificationRead(notificationId) {
  const notification = MOCK_NOTIFICATIONS.find(n => n.id === notificationId);
  if (notification) {
    notification.read = true;
    // Re-render with current active filter
    const activeTab = document.querySelector('[data-filter].active');
    const currentFilter = activeTab ? activeTab.dataset.filter : 'all';
    renderNotifications(currentFilter);
    updateNotificationBadge();
  }
}

function showToast(message, type = 'success') {
  const toastContainer = document.getElementById('toastContainer') || createToastContainer();
  
  const bgClass = {
    success: 'bg-success',
    error: 'bg-danger',
    warning: 'bg-warning',
    info: 'bg-info'
  }[type] || 'bg-success';

  const toast = document.createElement('div');
  toast.className = `toast show ${bgClass} text-white`;
  toast.innerHTML = `
    <div class="toast-body d-flex justify-content-between align-items-center">
      ${message}
      <button type="button" class="btn-close btn-close-white" onclick="this.parentElement.parentElement.remove()"></button>
    </div>
  `;
  
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function createToastContainer() {
  const container = document.createElement('div');
  container.id = 'toastContainer';
  container.className = 'toast-container position-fixed top-0 end-0 p-3';
  document.body.appendChild(container);
  return container;
}

function filterProducts(category) {
  const cards = document.querySelectorAll('#productsGrid > div');
  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
    } else {
      const productCategory = card.querySelector('.text-muted').textContent;
      card.style.display = productCategory === category ? 'block' : 'none';
    }
  });
}

function searchProducts(query) {
  const cards = document.querySelectorAll('#productsGrid > div');
  cards.forEach(card => {
    const name = card.querySelector('.card-title').textContent.toLowerCase();
    card.style.display = name.includes(query.toLowerCase()) ? 'block' : 'none';
  });
}

function filterOrders(status) {
  const rows = document.querySelectorAll('#ordersTable tr');
  rows.forEach(row => {
    if (status === 'all') {
      row.style.display = '';
    } else {
      const badge = row.querySelector('.badge');
      if (badge) {
        row.style.display = badge.textContent === status ? '' : 'none';
      }
    }
  });
}

// =============================================
// FORM HANDLERS
// =============================================

function handleLoginForm(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email) {
    showToast('Please enter your email address', 'warning');
    return;
  }

  console.log('[Auth] Login form submitted for:', email);
  login(email, password);
}

function handleProductForm(event) {
  event.preventDefault();
  showToast('Product saved successfully!', 'success');
  setTimeout(() => {
    window.location.href = 'products.html';
  }, 1000);
}

function handleSettingsForm(event) {
  event.preventDefault();
  showToast('Settings saved successfully!', 'success');
}

// =============================================
// INITIALIZATION
// =============================================

document.addEventListener('DOMContentLoaded', async function() {
  // Check authentication — stop if redirecting
  if (!checkAuth()) return;

  // Register form handlers FIRST (synchronous, must not be blocked by async theme init)
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLoginForm);
    console.log('[App] Login form handler registered');
  }

  const productForm = document.getElementById('productForm');
  if (productForm) {
    productForm.addEventListener('submit', handleProductForm);
  }

  const settingsForm = document.getElementById('settingsForm');
  if (settingsForm) {
    settingsForm.addEventListener('submit', handleSettingsForm);
  }

  // Setup sidebar toggle for mobile
  const sidebarToggle = document.getElementById('sidebarToggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', toggleSidebar);
  }

  // Update UI elements
  setActiveNav();
  updateNotificationBadge();
  updateUserAvatar();

  // Render dashboard components
  renderDashboardStats();
  renderRecentOrders();
  renderProducts();
  renderOrders();
  renderNotifications();
  renderTopProducts();

  // Setup notification tab filtering
  const notificationTabs = document.querySelectorAll('[data-filter]');
  if (notificationTabs.length > 0) {
    notificationTabs.forEach(tab => {
      tab.addEventListener('click', function(e) {
        e.preventDefault();
        // Update active tab
        notificationTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        // Re-render with filter
        renderNotifications(this.dataset.filter);
      });
    });
  }

  // Initialize Bootstrap tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));

  // Initialize theme switcher LAST (async — must never block the above)
  try {
    await initThemeSwitcher();
  } catch (err) {
    console.warn('[App] Theme switcher init failed:', err);
  }
});
