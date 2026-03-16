// ===== ADMIN CONFIG =====
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

// ===== FAKE ORDERS DATA =====
const FAKE_ORDERS = [
  {
    id: "SL-A1B2C3",
    customer: "ANT fall",
    email: "marie@example.com",
    date: "2024-03-12",
    total: 3500,
    status: "delivered",
    items: 3,
  },
  {
    id: "SL-D4E5F6",
    customer: "Pierre Martin",
    email: "pierre@example.com",
    date: "2024-03-12",
    total: 1490,
    status: "shipped",
    items: 1,
  },
  {
    id: "SL-G7H8I9",
    customer: "Sophie Leclerc",
    email: "sophie@example.com",
    date: "2024-03-11",
    total: 8900,
    status: "pending",
    items: 2,
  },
  {
    id: "SL-J1K2L3",
    customer: "Lucas Bernard",
    email: "lucas@example.com",
    date: "2024-03-11",
    total: 1990,
    status: "delivered",
    items: 1,
  },
  {
    id: "SL-M4N5O6",
    customer: "Emma Thomas",
    email: "emma@example.com",
    date: "2024-03-10",
    total: 13498,
    status: "shipped",
    items: 4,
  },
  {
    id: "SL-P7Q8R9",
    customer: "Antoine Petit",
    email: "antoine@example.com",
    date: "2024-03-10",
    total: 7900,
    status: "delivered",
    items: 1,
  },
  {
    id: "SL-S1T2U3",
    customer: "Camille Robert",
    email: "camille@example.com",
    date: "2024-03-09",
    total: 2490,
    status: "cancelled",
    items: 2,
  },
  {
    id: "SL-V4W5X6",
    customer: "Hugo Simon",
    email: "hugo@example.com",
    date: "2024-03-09",
    total: 4999,
    status: "pending",
    items: 1,
  },
  {
    id: "SL-Y7Z8A9",
    customer: "Léa Garcia",
    email: "lea@example.com",
    date: "2024-03-08",
    total: 18899,
    status: "delivered",
    items: 3,
  },
  {
    id: "SL-B2C3D4",
    customer: "Nathan Roux",
    email: "nathan@example.com",
    date: "2024-03-08",
    total: 6500,
    status: "delivered",
    items: 1,
  },
];

const FAKE_CUSTOMERS = [
  {
    name: "Marie Dupont",
    email: "marie@example.com",
    orders: 8,
    total: 12400,
    joined: "2023-01-15",
    status: "VIP",
  },
  {
    name: "Pierre Martin",
    email: "pierre@example.com",
    orders: 3,
    total: 4200,
    joined: "2023-04-22",
    status: "Actif",
  },
  {
    name: "Sophie Leclerc",
    email: "sophie@example.com",
    orders: 5,
    total: 6800,
    joined: "2023-02-08",
    status: "Actif",
  },
  {
    name: "Lucas Bernard",
    email: "lucas@example.com",
    orders: 12,
    total: 21000,
    joined: "2022-11-01",
    status: "VIP",
  },
  {
    name: "Emma Thomas",
    email: "emma@example.com",
    orders: 2,
    total: 2150,
    joined: "2024-01-10",
    status: "Nouveau",
  },
  {
    name: "Antoine Petit",
    email: "antoine@example.com",
    orders: 6,
    total: 7600,
    joined: "2023-07-18",
    status: "Actif",
  },
  {
    name: "Camille Robert",
    email: "camille@example.com",
    orders: 1,
    total: 3500,
    joined: "2024-03-01",
    status: "Nouveau",
  },
  {
    name: "Hugo Simon",
    email: "hugo@example.com",
    orders: 4,
    total: 5400,
    joined: "2023-09-12",
    status: "Actif",
  },
];

let adminOrderFilter = "all";
let adminProductSearch = "";

// ===== OPEN / CLOSE ADMIN =====
window.openAdmin = function () {
  document.getElementById("admin-overlay").style.display = "flex";
  document.body.style.overflow = "hidden";
  const isLoggedIn = sessionStorage.getItem("admin_logged_in") === "true";
  document.getElementById("admin-login").style.display = isLoggedIn
    ? "none"
    : "flex";
  document.getElementById("admin-dashboard").style.display = isLoggedIn
    ? "flex"
    : "none";
  if (isLoggedIn) refreshDashboard();
};

window.closeAdmin = function () {
  document.getElementById("admin-overlay").style.display = "none";
  document.body.style.overflow = "";
};

// ===== LOGIN =====
window.adminLogin = function (e) {
  e.preventDefault();
  const user = document.getElementById("admin-user-input").value.trim();
  const pass = document.getElementById("admin-pass-input").value.trim();
  const err = document.getElementById("admin-login-error");

  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    err.style.display = "none";
    sessionStorage.setItem("admin_logged_in", "true");
    document.getElementById("admin-login").style.display = "none";
    document.getElementById("admin-dashboard").style.display = "flex";
    refreshDashboard();
  } else {
    err.style.display = "block";
    document.getElementById("admin-pass-input").focus();
  }
};

window.adminLogout = function () {
  sessionStorage.removeItem("admin_logged_in");
  document.getElementById("admin-dashboard").style.display = "none";
  document.getElementById("admin-login").style.display = "flex";
  document.getElementById("admin-pass-input").value = "";
};

window.togglePassword = function () {
  const input = document.getElementById("admin-pass-input");
  input.type = input.type === "password" ? "text" : "password";
};

// ===== SIDEBAR =====
window.toggleAdminSidebar = function () {
  document.getElementById("admin-sidebar").classList.toggle("collapsed");
};

// ===== TABS =====
window.switchAdminTab = function (tab, linkEl) {
  document
    .querySelectorAll(".admin-tab")
    .forEach((t) => t.classList.remove("active"));
  document.getElementById("admin-tab-" + tab).classList.add("active");

  document
    .querySelectorAll(".admin-nav-item")
    .forEach((l) => l.classList.remove("active"));
  if (linkEl) {
    linkEl.classList.add("active");
  } else {
    document.querySelector(`[onclick*="'${tab}'"]`)?.classList.add("active");
  }

  const titles = {
    dashboard: "Tableau de bord",
    products: "Produits",
    orders: "Commandes",
    customers: "Clients",
    settings: "Paramètres",
  };
  document.getElementById("admin-topbar-title").textContent =
    titles[tab] || tab;

  if (tab === "products") renderAdminProducts();
  if (tab === "orders") renderAdminOrders();
  if (tab === "customers") renderAdminCustomers();
};

// ===== DASHBOARD =====
function refreshDashboard() {
  const revenue = FAKE_ORDERS.filter((o) => o.status !== "cancelled").reduce(
    (s, o) => s + o.total,
    0,
  );
  document.getElementById("stat-revenue").textContent = new Intl.NumberFormat(
    "fr-FR",
    { style: "currency", currency: "XOF" },
  ).format(revenue);
  document.getElementById("stat-orders").textContent = FAKE_ORDERS.length;
  document.getElementById("stat-products").textContent = window.PRODUCTS
    ? window.PRODUCTS.length
    : 12;

  renderRecentOrders();
  renderTopProducts();
}

function renderRecentOrders() {
  const table = document.getElementById("recent-orders-table");
  if (!table) return;
  const recent = FAKE_ORDERS.slice(0, 5);
  table.innerHTML = `
    <thead><tr><th>N° Commande</th><th>Client</th><th>Total</th><th>Statut</th></tr></thead>
    <tbody>
      ${recent
        .map(
          (o) => `
        <tr>
          <td><code>${o.id}</code></td>
          <td>${o.customer}</td>
          <td><strong>${fmtPrice(o.total)}</strong></td>
          <td>${statusBadge(o.status)}</td>
        </tr>
      `,
        )
        .join("")}
    </tbody>
  `;
}

function renderTopProducts() {
  const list = document.getElementById("top-products-list");
  if (!list) return;
  const products = window.PRODUCTS
    ? window.PRODUCTS.slice()
        .sort((a, b) => b.reviews - a.reviews)
        .slice(0, 5)
    : [];
  list.innerHTML = products
    .map(
      (p, i) => `
    <div class="top-product-row">
      <span class="top-product-rank">${i + 1}</span>
      <span class="top-product-emoji">${p.emoji}</span>
      <div class="top-product-info">
        <span class="top-product-name">${p.name}</span>
        <span class="top-product-cat">${p.category}</span>
      </div>
      <div class="top-product-meta">
        <span class="top-product-price">${fmtPrice(p.price)}</span>
        <span class="top-product-reviews">★ ${p.reviews} avis</span>
      </div>
    </div>
  `,
    )
    .join("");
}

// ===== PRODUCTS =====
let _productImageData = null;

window.handleProductImage = function (input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    _productImageData = e.target.result;
    const preview = document.getElementById("fp-image-preview");
    const placeholder = document.getElementById("photo-placeholder");
    preview.src = _productImageData;
    preview.style.display = "block";
    placeholder.style.display = "none";
  };
  reader.readAsDataURL(file);
};

function resetPhotoField() {
  _productImageData = null;
  const preview = document.getElementById("fp-image-preview");
  const placeholder = document.getElementById("photo-placeholder");
  if (preview) {
    preview.src = "";
    preview.style.display = "none";
  }
  if (placeholder) placeholder.style.display = "flex";
  const fileInput = document.getElementById("fp-image");
  if (fileInput) fileInput.value = "";
}

window.openAddProduct = function () {
  document.getElementById("product-form-card").style.display = "block";
  document.getElementById("product-form-title").textContent = "Nouveau produit";
  document.getElementById("edit-product-id").value = "";
  document.getElementById("fp-name").value = "";
  document.getElementById("fp-category").value = "";
  document.getElementById("fp-price").value = "";
  document.getElementById("fp-old-price").value = "";
  document.getElementById("fp-stock").value = "";
  document.getElementById("fp-emoji").value = "🥖";
  document.getElementById("fp-badge").value = "";
  document.getElementById("fp-desc").value = "";
  resetPhotoField();
  document.getElementById("fp-name").focus();
  document
    .getElementById("product-form-card")
    .scrollIntoView({ behavior: "smooth" });
};

window.closeProductForm = function () {
  document.getElementById("product-form-card").style.display = "none";
};

window.editProduct = function (id) {
  const product = window.PRODUCTS.find((p) => p.id === id);
  if (!product) return;
  document.getElementById("product-form-card").style.display = "block";
  document.getElementById("product-form-title").textContent =
    "Modifier le produit";
  document.getElementById("edit-product-id").value = id;
  document.getElementById("fp-name").value = product.name;
  document.getElementById("fp-category").value = product.category;
  document.getElementById("fp-price").value = product.price;
  document.getElementById("fp-old-price").value = product.oldPrice || "";
  document.getElementById("fp-stock").value = product.stock;
  document.getElementById("fp-emoji").value = product.emoji;
  document.getElementById("fp-badge").value = product.badge || "";
  document.getElementById("fp-desc").value = product.description || "";
  resetPhotoField();
  if (product.image) {
    _productImageData = product.image;
    const preview = document.getElementById("fp-image-preview");
    const placeholder = document.getElementById("photo-placeholder");
    preview.src = product.image;
    preview.style.display = "block";
    placeholder.style.display = "none";
  }
  document
    .getElementById("product-form-card")
    .scrollIntoView({ behavior: "smooth" });
};

window.deleteProduct = function (id) {
  if (!confirm("Supprimer ce produit ?")) return;
  const idx = window.PRODUCTS.findIndex((p) => p.id === id);
  if (idx > -1) {
    window.PRODUCTS.splice(idx, 1);
    showToastAdmin("🗑️ Produit supprimé");
    renderAdminProducts();
    document.getElementById("stat-products").textContent =
      window.PRODUCTS.length;
  }
};

window.saveProduct = function (e) {
  e.preventDefault();
  const editId = document.getElementById("edit-product-id").value;
  const badgeVal = document.getElementById("fp-badge").value;
  const badgeTextMap = {
    new: "Nouveau",
    sale: "Promo",
    bestseller: "Best-seller",
  };
  const editingProduct = editId
    ? window.PRODUCTS.find((p) => p.id == editId)
    : null;

  const data = {
    name: document.getElementById("fp-name").value.trim(),
    category: document.getElementById("fp-category").value,
    price: parseFloat(document.getElementById("fp-price").value),
    oldPrice: parseFloat(document.getElementById("fp-old-price").value) || null,
    stock: parseInt(document.getElementById("fp-stock").value),
    emoji: document.getElementById("fp-emoji").value.trim() || "🥖",
    image:
      _productImageData !== null
        ? _productImageData
        : editingProduct
          ? editingProduct.image || null
          : null,
    badge: badgeVal || null,
    badgeText: badgeVal ? badgeTextMap[badgeVal] : null,
    description: document.getElementById("fp-desc").value.trim(),
    rating: editingProduct ? editingProduct.rating : 4.5,
    reviews: editingProduct ? editingProduct.reviews : 0,
    featured: editingProduct ? editingProduct.featured : false,
    sizes: editingProduct ? editingProduct.sizes : null,
    colors: null,
  };

  if (editId) {
    const idx = window.PRODUCTS.findIndex((p) => p.id == editId);
    if (idx > -1) {
      window.PRODUCTS[idx] = { ...window.PRODUCTS[idx], ...data };
      showToastAdmin("✅ Produit mis à jour !", "success");
    }
  } else {
    const newId = Math.max(...window.PRODUCTS.map((p) => p.id)) + 1;
    window.PRODUCTS.push({ id: newId, ...data });
    showToastAdmin("✅ Produit ajouté !", "success");
  }

  closeProductForm();
  renderAdminProducts();
  document.getElementById("stat-products").textContent = window.PRODUCTS.length;
};

function renderAdminProducts() {
  const table = document.getElementById("admin-products-table");
  if (!table) return;
  const products = (window.PRODUCTS || []).filter(
    (p) =>
      !adminProductSearch ||
      p.name.toLowerCase().includes(adminProductSearch.toLowerCase()) ||
      p.category.toLowerCase().includes(adminProductSearch.toLowerCase()),
  );

  table.innerHTML = `
    <thead>
      <tr>
        <th>Produit</th>
        <th>Catégorie</th>
        <th>Prix</th>
        <th>Stock</th>
        <th>Note</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      ${products
        .map(
          (p) => `
        <tr>
          <td>
            <div class="product-cell">
              ${
                p.image
                  ? `<img src="${p.image}" class="product-cell-img" alt="${p.name}">`
                  : `<span class="product-cell-emoji">${p.emoji}</span>`
              }
              <div>
                <div class="product-cell-name">${p.name}</div>
                ${p.badge ? `<span class="admin-tag ${p.badge}">${p.badgeText}</span>` : ""}
              </div>
            </div>
          </td>
          <td><span class="admin-category-tag">${p.category}</span></td>
          <td>
            <strong>${fmtPrice(p.price)}</strong>
            ${p.oldPrice ? `<br><small style="color:var(--text-light);text-decoration:line-through">${fmtPrice(p.oldPrice)}</small>` : ""}
          </td>
          <td>
            <span class="stock-indicator ${p.stock <= 5 ? "low" : p.stock <= 15 ? "medium" : "high"}">
              ${p.stock <= 5 ? "⚠️" : "✅"} ${p.stock}
            </span>
          </td>
          <td><span style="color:#F59E0B">★</span> ${p.rating} <small style="color:var(--text-muted)">(${p.reviews})</small></td>
          <td>
            <div class="action-btns">
              <button class="action-btn edit" onclick="editProduct(${p.id})">✏️</button>
              <button class="action-btn delete" onclick="deleteProduct(${p.id})">🗑️</button>
            </div>
          </td>
        </tr>
      `,
        )
        .join("")}
    </tbody>
  `;
}

window.filterAdminProducts = function (query) {
  adminProductSearch = query;
  renderAdminProducts();
};

// ===== ORDERS =====
window.filterAdminOrders = function (status, btn) {
  adminOrderFilter = status;
  document
    .querySelectorAll("#admin-tab-orders .filter-btn")
    .forEach((b) => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  renderAdminOrders();
};

function renderAdminOrders() {
  const table = document.getElementById("admin-orders-table");
  if (!table) return;
  const orders =
    adminOrderFilter === "all"
      ? FAKE_ORDERS
      : FAKE_ORDERS.filter((o) => o.status === adminOrderFilter);

  table.innerHTML = `
    <thead>
      <tr>
        <th>N° Commande</th>
        <th>Client</th>
        <th>Email</th>
        <th>Date</th>
        <th>Articles</th>
        <th>Total</th>
        <th>Statut</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      ${orders
        .map(
          (o) => `
        <tr>
          <td><code>${o.id}</code></td>
          <td><strong>${o.customer}</strong></td>
          <td style="color:var(--text-muted);font-size:13px">${o.email}</td>
          <td style="font-size:13px">${o.date}</td>
          <td style="text-align:center">${o.items}</td>
          <td><strong>${fmtPrice(o.total)}</strong></td>
          <td>${statusBadge(o.status)}</td>
          <td>
            <select class="status-select" onchange="changeOrderStatus('${o.id}', this.value)">
              <option value="pending" ${o.status === "pending" ? "selected" : ""}>En attente</option>
              <option value="shipped" ${o.status === "shipped" ? "selected" : ""}>Expédiée</option>
              <option value="delivered" ${o.status === "delivered" ? "selected" : ""}>Livrée</option>
              <option value="cancelled" ${o.status === "cancelled" ? "selected" : ""}>Annulée</option>
            </select>
          </td>
        </tr>
      `,
        )
        .join("")}
    </tbody>
  `;
}

window.changeOrderStatus = function (orderId, newStatus) {
  const order = FAKE_ORDERS.find((o) => o.id === orderId);
  if (order) {
    order.status = newStatus;
    showToastAdmin("✅ Statut mis à jour", "success");
    renderAdminOrders();
  }
};

// ===== CUSTOMERS =====
function renderAdminCustomers() {
  const table = document.getElementById("admin-customers-table");
  if (!table) return;
  table.innerHTML = `
    <thead>
      <tr>
        <th>Nom</th>
        <th>Email</th>
        <th>Commandes</th>
        <th>Total dépensé</th>
        <th>Inscrit le</th>
        <th>Statut</th>
      </tr>
    </thead>
    <tbody>
      ${FAKE_CUSTOMERS.map(
        (c) => `
        <tr>
          <td><strong>${c.name}</strong></td>
          <td style="color:var(--text-muted);font-size:13px">${c.email}</td>
          <td style="text-align:center">${c.orders}</td>
          <td><strong>${fmtPrice(c.total)}</strong></td>
          <td style="font-size:13px">${c.joined}</td>
          <td><span class="customer-status ${c.status.toLowerCase()}">${c.status}</span></td>
        </tr>
      `,
      ).join("")}
    </tbody>
  `;
}

// ===== SETTINGS =====
window.saveSettings = function (e) {
  e.preventDefault();
  showToastAdmin("✅ Paramètres sauvegardés !", "success");
};

// ===== HELPERS =====
function statusBadge(status) {
  const map = {
    pending: ["⏳ En attente", "pending"],
    shipped: ["🚚 Expédiée", "shipped"],
    delivered: ["✅ Livrée", "delivered"],
    cancelled: ["❌ Annulée", "cancelled"],
  };
  const [label, cls] = map[status] || [status, ""];
  return `<span class="order-status ${cls}">${label}</span>`;
}

function fmtPrice(p) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",
  }).format(p);
}

function showToastAdmin(msg, type = "default") {
  // reuse the shop toast
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("fade-out");
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// Close admin with Escape key
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    document.getElementById("admin-overlay").style.display !== "none"
  ) {
    closeAdmin();
  }
});
