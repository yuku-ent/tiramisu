// ===== CONFIG =====
const WHATSAPP_NUMBER = "221784788502";

// ===== DATA: PRODUCTS =====
const PRODUCTS = [
  {
    id: 1,
    name: "box brunch sucrée",
    category: "brunch",
    price: 3500,
    oldPrice: null,
    emoji: "🥖",
    rating: 4.7,
    reviews: 30,
    badge: "bestseller",
    badgeText: "Best-seller",
    description:
      "Une box gourmande composée de délicieuses pâtisseries artisanales préparées avec soin. Parfaite pour les amateurs de douceurs et pour partager un moment sucré en famille ou entre amis.",
    sizes: ["Box de 15", "Box personalisée"],
    colors: null,
    stock: 20,
    featured: true,
  },
  {
    id: 2,
    name: "Croissant au beurre",
    category: "Viennoiseries",
    price: 2500,
    oldPrice: null,
    emoji: "🥐",
    rating: 4.9,
    reviews: 31,
    badge: "new",
    badgeText: "Maison",
    description:
      "Feuilletage délicat au beurre AOP de Charentes. Dorure brillante, intérieur fondant et feuilleté à souhait. Préparé avec 36 couches de beurre et de pâte.",
    sizes: null,
    colors: null,
    stock: 80,
    featured: true,
  },
  {
    id: 3,
    name: "Tiramisu",
    category: "Pâtisseries",
    price: 3500,
    oldPrice: null,
    emoji: "🍓",
    rating: 4.8,
    reviews: 14,
    badge: null,
    badgeText: null,
    description:
      "Fond de tarte croustillant en pâte sablée, crème pâtissière à la vanille de Madagascar, fraises fraîches de saison. Une part généreuse pour le plaisir.",
    sizes: ["Petit model", "Grand model"],
    colors: null,
    stock: 25,
    featured: true,
  },
  {
    id: 4,
    name: "box brunch salées",
    category: "brunch",
    price: 3500,
    oldPrice: null,
    emoji: "🍞",
    rating: 4.8,
    reviews: 89,
    badge: null,
    badgeText: null,
    description:
      "Une box savoureuse composée de différentes bouchées salées comme des mini sandwichs, feuilletés et autres spécialités, idéale pour vos pauses gourmandes ou vos petits événements.",
    sizes: ["Box de 15", "Box personalisée"],
    colors: null,
    stock: 10,
    featured: true,
  },
  {
    id: 5,
    name: "Pain au chocolat",
    category: "Viennoiseries",
    price: 2500,
    oldPrice: null,
    emoji: "🍫",
    rating: 4.9,
    reviews: 52,
    badge: "bestseller",
    badgeText: "Best-seller",
    description:
      "Deux barres de chocolat noir 70% Valrhona enroulées dans une pâte feuilletée pur beurre. Légèrement doré, cuit à la perfection. Irrésistible encore chaud !",
    sizes: null,
    colors: null,
    stock: 70,
    featured: false,
  },
  {
    id: 6,
    name: "Cinnamon Rolls",
    category: "Pâtisseries",
    price: 3800,
    oldPrice: null,
    emoji: "🍥",
    rating: 4.7,
    reviews: 18,
    badge: "new",
    badgeText: "Nouveau",
    description:
      "De délicieux cinnamon rolls moelleux et parfumés à la cannelle, préparés avec soin pour offrir une douceur gourmande. Parfaits pour accompagner un café, un petit-déjeuner ou une pause sucrée.",
    sizes: ["box de 6", "Box personnalisés"],
    colors: null,
    stock: 30,
    featured: false,
  },
  {
    id: 7,
    name: "Brioche tressée",
    category: "Viennoiseries",
    price: 6.9,
    oldPrice: 7.8,
    emoji: "🫓",
    rating: 4.8,
    reviews: 293,
    badge: "sale",
    badgeText: "-12%",
    description:
      "Brioche tressée à la main, enrichie de 4 œufs et 200g de beurre par kilo. Mie filante, légèrement sucrée, parfumée à la fleur d'oranger. Idéale pour le petit-déjeuner.",
    sizes: ["Tranche", "Petite (400g)", "Grande (800g)"],
    colors: null,
    stock: 20,
    featured: false,
  },
  {
    id: 8,
    name: "Mini burger",
    category: "Salé",
    price: 2500,
    oldPrice: null,
    emoji: "🥧",
    rating: 4.7,
    reviews: 12,
    badge: null,
    badgeText: null,
    description:
      "Pâte brisée maison garnie d'une migaine généreuse aux lardons fumés, gruyère râpé, crème fraîche et oeufs fermiers. Servie tiède. Disponible midi et soir.",
    sizes: ["Box de 15"],
    colors: null,
    stock: 15,
    featured: false,
  },
  {
    id: 9,
    name: "Bento Cake",
    category: "Pâtisseries",
    price: 4500,
    oldPrice: null,
    emoji: "🍰",
    rating: 4.9,
    reviews: 31,
    badge: "bestseller",
    badgeText: "Best-seller",
    description:
      "Trois couches de feuilletage inversé caramélisé, crème pâtissière à la vanille bourbon, glaçage royal marbré. L'emblème de la pâtisserie française.",
    sizes: "peronalisable",
    colors: null,
    stock: "sur commande",
    featured: false,
  },
  {
    id: 10,
    name: "Pain aux chocolat",
    category: "viennoiseries",
    price: 3500,
    oldPrice: null,
    emoji: "🌰",
    rating: 4.6,
    reviews: 17,
    badge: "new",
    badgeText: "Nouveau",
    description:
      "Pain de campagne enrichi de cerneaux de noix entiers (30%). Farine semi-complète T80, levain naturel. Idéal avec du fromage ou du miel.",
    sizes: ["Box de 15", "Box personalisable"],
    colors: null,
    stock: "sur commande",
    featured: false,
  },
  {
    id: 11,
    name: "Sandwich jambon-beurre",
    category: "Salé",
    price: 3500,
    oldPrice: null,
    emoji: "🥪",
    rating: 4.8,
    reviews: 45,
    badge: "bestseller",
    badgeText: "Best-seller",
    description:
      "L'incontournable parisien ! Baguette tradition cuite du matin, jambon blanc Label Rouge, beurre doux Échiré. Simple, frais et délicieux.",
    sizes: ["Box de 15", "box personalisable"],
    colors: null,
    stock: "sur commande",
    featured: false,
  },
  {
    id: 12,
    name: "Cup Cake",
    category: "Pâtisseries",
    price: 8500,
    oldPrice: null,
    emoji: "🎨",
    rating: 4.8,
    reviews: 27,
    badge: "sale",
    badgeText: null,
    description:
      "Boîte de 12 cup cake aux saveurs variées : framboise, pistache, caramel beurre salé, citron, chocolat et rose. Coques croustillantes, ganache fondante.",
    sizes: ["Boîte de 12", "Boîte personalisée"],
    colors: null,
    stock: "sur commande",
    featured: false,
  },
  {
    id: 13,
    name: "Box brunch mix",
    category: "brunch",
    price: 3500,
    oldPrice: null,
    emoji: "🎨",
    rating: 4.8,
    reviews: 287,
    badge: "sale",
    badgeText: "Nouveau",
    description:
      "Une box complète qui combine pâtisseries sucrées et bouchées salées. Parfaite pour profiter d’un mélange de saveurs et satisfaire toutes les envies lors de vos moments de partage.",
    sizes: ["Box de 15", "Box personalisée"],
    colors: null,
    stock: "sur commande",
    featured: false,
  },
];

// Expose products globally for admin access
window.PRODUCTS = PRODUCTS;

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem("bonnemie_cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("bonnemie_wishlist") || "[]");
let currentPage = "home";
let previousPage = "home";
let currentFilter = "Tous";
let currentSort = "default";
let currentDetailId = null;
let detailQty = 1;
let detailSelectedSize = null;
let detailSelectedColor = null;
let currentUser = JSON.parse(localStorage.getItem("bonnemie_user") || "null");
let checkoutDeliveryType = "home"; // 'home' | 'pickup'
const DELIVERY_FEE = 1.5; // frais de livraison fixes

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedProducts();
  renderAllProducts();
  updateCartUI();
  updateAuthUI();
  document.addEventListener("click", (e) => {
    const dropdown = document.getElementById("account-dropdown");
    const wrapper = document.querySelector(".account-wrapper");
    if (
      dropdown &&
      dropdown.classList.contains("open") &&
      wrapper &&
      !wrapper.contains(e.target)
    ) {
      closeAccountDropdown();
    }
  });
});

// ===== NAVIGATION =====
function navigate(page, data) {
  previousPage = currentPage;
  currentPage = page;

  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("page-" + page).classList.add("active");

  document.querySelectorAll(".nav-link").forEach((l) => {
    l.classList.toggle("active", l.dataset.page === page);
  });

  if (page === "products") renderAllProducts();
  if (page === "cart") renderCart();
  if (page === "checkout") {
    checkoutDeliveryType = "home";
    renderCheckout();
  }
  if (page === "product-detail" && data) renderProductDetail(data);
  if (page === "account") renderAccountPage();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goBack() {
  navigate(previousPage);
}

function filterByCategory(category) {
  currentFilter = category;
  navigate("products");
  const filterBtns = document.querySelectorAll("#page-products .filter-btn");
  filterBtns.forEach((btn) => {
    btn.classList.toggle(
      "active",
      btn.textContent.trim() === category ||
        (category === "Tous" && btn.textContent.trim() === "Tous"),
    );
  });
}

// ===== SEARCH =====
function toggleSearch() {
  const bar = document.getElementById("search-bar");
  bar.classList.toggle("open");
  if (bar.classList.contains("open")) {
    document.getElementById("search-input").focus();
  }
}

function handleSearch(query) {
  if (!query.trim()) return;
  const results = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()),
  );
  navigate("products");
  const grid = document.getElementById("all-products");
  grid.innerHTML = results.length
    ? results.map(createProductCard).join("")
    : '<div class="empty-cart"><div class="empty-cart-icon">🔍</div><h2>Aucun résultat</h2><p>Essayez un autre terme de recherche.</p></div>';
  document.getElementById("products-count").textContent =
    `${results.length} produit(s) trouvé(s) pour "${query}"`;
}

// ===== MOBILE MENU =====
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("open");
}

// ===== RENDER: PRODUCT CARD =====
function createProductCard(product) {
  const isWishlisted = wishlist.includes(product.id);
  return `
    <div class="product-card" onclick="openProduct(${product.id})">
      <div class="product-card-img">
        ${product.badge ? `<span class="product-badge ${product.badge}">${product.badgeText}</span>` : ""}
        <span class="product-wishlist ${isWishlisted ? "active" : ""}" onclick="toggleWishlist(event, ${product.id})" title="Ajouter aux favoris">
          ${isWishlisted ? "❤️" : "🤍"}
        </span>
        ${product.emoji}
      </div>
      <div class="product-card-body">
        <div class="product-category">${product.category}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-rating">
          <span class="stars">${getStars(product.rating)}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-footer">
          <div class="product-price">
            <span class="price-current">${formatPrice(product.price)}</span>
            ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ""}
          </div>
          <button class="add-to-cart-btn" onclick="quickAddToCart(event, ${product.id})" title="Ajouter au panier">+</button>
        </div>
      </div>
    </div>
  `;
}

function renderFeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.featured);
  document.getElementById("featured-products").innerHTML = featured
    .map(createProductCard)
    .join("");
}

function renderAllProducts() {
  let products = [...PRODUCTS];

  if (currentFilter !== "Tous") {
    products = products.filter((p) => p.category === currentFilter);
  }

  if (currentSort === "price-asc") products.sort((a, b) => a.price - b.price);
  else if (currentSort === "price-desc")
    products.sort((a, b) => b.price - a.price);
  else if (currentSort === "name-asc")
    products.sort((a, b) => a.name.localeCompare(b.name));
  else if (currentSort === "rating")
    products.sort((a, b) => b.rating - a.rating);

  const grid = document.getElementById("all-products");
  grid.innerHTML = products.length
    ? products.map(createProductCard).join("")
    : '<div class="empty-cart"><div class="empty-cart-icon">📦</div><h2>Aucun produit</h2><p>Aucun produit dans cette catégorie.</p></div>';

  const count = document.getElementById("products-count");
  if (count)
    count.textContent =
      `${products.length} produit(s) disponible(s)` +
      (currentFilter !== "Tous" ? ` en ${currentFilter}` : "");
}

// ===== FILTERS & SORT =====
function setFilter(cat, btn) {
  currentFilter = cat;
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderAllProducts();
}

function handleSort(val) {
  currentSort = val;
  renderAllProducts();
}

// ===== PRODUCT DETAIL =====
function openProduct(id) {
  currentDetailId = id;
  detailQty = 1;
  detailSelectedSize = null;
  detailSelectedColor = null;
  navigate("product-detail", id);
}

function renderProductDetail(id) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return;

  const waMsg = encodeURIComponent(
    `Bonjour, je suis intéressé par votre produit : ${product.name} (${formatPrice(product.price)}). Pouvez-vous m'en dire plus ?`,
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;

  const content = document.getElementById("product-detail-content");
  content.innerHTML = `
    <div class="product-detail-img">
      ${product.badge ? `<div class="product-detail-badge">${product.badgeText}</div>` : ""}
      ${
        product.image
          ? `<img src="${product.image}" alt="${product.name}" class="product-detail-photo">`
          : `<span class="product-detail-emoji">${product.emoji}</span>`
      }
    </div>
    <div class="product-detail-info">
      <div class="product-detail-category">${product.category}</div>
      <h1>${product.name}</h1>
      <div class="product-detail-rating">
        <span class="stars">${getStars(product.rating)}</span>
        <strong>${product.rating}</strong>
        <span>${product.reviews} avis</span>
      </div>
      <div class="product-detail-price">
        <span class="price-current">${formatPrice(product.price)}</span>
        ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ""}
      </div>
      <p class="product-detail-desc">${product.description}</p>

      ${
        product.sizes
          ? `
      <div class="product-detail-options">
        <div class="options-label">Format :</div>
        <div class="options-btns" id="size-options">
          ${product.sizes.map((s) => `<button class="option-btn" onclick="selectSize(this, '${s}')">${s}</button>`).join("")}
        </div>
      </div>
      `
          : ""
      }

      <div class="product-detail-actions">
        <div class="qty-selector">
          <button class="qty-btn" onclick="changeQty(-1)">−</button>
          <input type="number" class="qty-value" id="qty-value" value="1" min="1" max="${product.stock}" onchange="setQty(this.value)">
          <button class="qty-btn" onclick="changeQty(1)">+</button>
        </div>
        <button class="btn btn-primary btn-commander" onclick="commanderFromDetail(${product.id})">🛒 Commander</button>
        <a class="btn btn-whatsapp" href="${waLink}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.558 4.11 1.524 5.838L.057 23.5l5.802-1.52A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.006-1.374l-.359-.214-3.44.9.919-3.352-.234-.375A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/></svg>
          Discuter
        </a>
      </div>

      <div class="product-detail-meta">
        <div class="meta-item"><strong>Disponibilité :</strong> ${product.stock > 0 ? `✅ Disponible` : "❌ Rupture"}</div>
        <div class="meta-item"><strong>Préparation :</strong> 🌅 Frais du jour, dès 6h du matin</div>
        <div class="meta-item"><strong>Livraison :</strong> 🚴 Livraison locale dans votre quartier</div>
        <div class="meta-item"><strong>Commande spéciale :</strong> 📞 Contactez-nous 48h à l'avance</div>
      </div>
    </div>
  `;
}

function selectSize(btn, size) {
  detailSelectedSize = size;
  document
    .querySelectorAll("#size-options .option-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
}

function selectColor(btn, color) {
  detailSelectedColor = color;
  document
    .querySelectorAll("#color-options .option-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
}

function changeQty(delta) {
  const product = PRODUCTS.find((p) => p.id === currentDetailId);
  detailQty = Math.max(
    1,
    Math.min(detailQty + delta, product ? product.stock : 99),
  );
  document.getElementById("qty-value").value = detailQty;
}

function setQty(val) {
  const product = PRODUCTS.find((p) => p.id === currentDetailId);
  detailQty = Math.max(1, Math.min(Number(val), product ? product.stock : 99));
  document.getElementById("qty-value").value = detailQty;
}

function addToCartFromDetail(id) {
  addToCart(id, detailQty);
}

function commanderFromDetail(id) {
  addToCart(id, detailQty);
  navigate("cart");
}

// ===== CART =====
function addToCart(id, qty = 1) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return;

  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.qty = Math.min(existing.qty + qty, product.stock);
  } else {
    cart.push({ id, qty });
  }

  saveCart();
  updateCartUI();
  showToast(`✅ "${product.name}" ajouté au panier !`, "success");
}

function quickAddToCart(event, id) {
  event.stopPropagation();
  addToCart(id, 1);

  const btn = event.currentTarget;
  btn.textContent = "✓";
  btn.style.background = "#10B981";
  btn.style.color = "white";
  setTimeout(() => {
    btn.textContent = "+";
    btn.style.background = "";
    btn.style.color = "";
  }, 1200);
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  updateCartUI();
  renderCart();
  showToast("🗑️ Produit retiré du panier", "error");
}

function updateCartQty(id, qty) {
  const product = PRODUCTS.find((p) => p.id === id);
  const item = cart.find((item) => item.id === id);
  if (!item) return;

  if (qty <= 0) {
    removeFromCart(id);
    return;
  }
  item.qty = Math.min(qty, product ? product.stock : 99);
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem("bonnemie_cart", JSON.stringify(cart));
}

function updateCartUI() {
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  const countEl = document.getElementById("cart-count");
  const mobileCountEl = document.getElementById("mobile-cart-count");

  if (countEl) {
    countEl.textContent = total;
    countEl.classList.toggle("show", total > 0);
  }
  if (mobileCountEl) mobileCountEl.textContent = total;
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const product = PRODUCTS.find((p) => p.id === item.id);
    return product ? sum + product.price * item.qty : sum;
  }, 0);
}

function renderCart() {
  const itemsEl = document.getElementById("cart-items");
  const summaryEl = document.getElementById("cart-summary");
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <h2>Votre panier est vide</h2>
        <p>Ajoutez des produits à votre panier pour continuer.</p>
        <button class="btn btn-primary" onclick="navigate('products')">Voir les produits</button>
      </div>
    `;
    summaryEl.innerHTML = "";
    return;
  }

  itemsEl.innerHTML = cart
    .map((item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      if (!product) return "";
      return `
      <div class="cart-item">
        <div class="cart-item-img">${product.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${product.name}</div>
          <div class="cart-item-cat">${product.category}</div>
          <div class="cart-item-controls">
            <div class="qty-selector">
              <button class="qty-btn" onclick="updateCartQty(${item.id}, ${item.qty - 1})">−</button>
              <input type="number" class="qty-value" value="${item.qty}" min="1" onchange="updateCartQty(${item.id}, Number(this.value))">
              <button class="qty-btn" onclick="updateCartQty(${item.id}, ${item.qty + 1})">+</button>
            </div>
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Supprimer</button>
          </div>
        </div>
        <div class="cart-item-price">${formatPrice(product.price * item.qty)}</div>
      </div>
    `;
    })
    .join("");

  const subtotal = getCartTotal();

  summaryEl.innerHTML = `
    <h2>Résumé</h2>
    <div class="summary-row"><span>Sous-total</span><span>${formatPrice(subtotal)}</span></div>
    <div class="summary-row"><span>Livraison</span><span style="color:var(--text-muted);font-size:13px">Choix à l'étape suivante</span></div>
    <div class="summary-row total"><span>Total</span><span>${formatPrice(subtotal)}</span></div>
    <div class="summary-divider"></div>
    <div class="promo-input-group">
      <input type="text" placeholder="Code promo" id="promo-code-input">
      <button onclick="applyPromo()">Appliquer</button>
    </div>
    <button class="btn btn-primary btn-full" onclick="navigate('checkout')">Commander →</button>
    <br><br>
    <button class="btn btn-outline btn-full" onclick="navigate('products')" style="margin-top:8px">Continuer mes achats</button>
  `;
}

function applyPromo() {
  const code = document
    .getElementById("promo-code-input")
    .value.toUpperCase()
    .trim();
  if (code === "MATINEE") {
    showToast(
      '🎉 Code "MATINEE" appliqué ! -15% sur les viennoiseries',
      "success",
    );
  } else if (code === "BIENVENUE") {
    showToast(
      '🎉 Code "BIENVENUE" appliqué ! -10% sur votre commande',
      "success",
    );
  } else if (code) {
    showToast("❌ Code promo invalide ou expiré", "error");
  }
}

// ===== WISHLIST =====
function toggleWishlist(event, id) {
  if (event) event.stopPropagation();
  const idx = wishlist.indexOf(id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast("💔 Retiré des favoris");
  } else {
    wishlist.push(id);
    showToast("❤️ Ajouté aux favoris !", "success");
  }
  localStorage.setItem("bonnemie_wishlist", JSON.stringify(wishlist));
  renderFeaturedProducts();
  renderAllProducts();
  if (currentPage === "product-detail" && currentDetailId) {
    renderProductDetail(currentDetailId);
  }
}

// ===== CHECKOUT =====
function renderCheckout() {
  const summaryEl = document.getElementById("checkout-summary");
  if (!summaryEl) return;

  const subtotal = getCartTotal();
  const shipping = checkoutDeliveryType === "pickup" ? 0 : DELIVERY_FEE;
  const total = subtotal + shipping;

  const products = cart
    .map((item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      if (!product) return "";
      return `
      <div class="checkout-product">
        <div class="checkout-product-img">${product.image ? `<img src="${product.image}" style="width:36px;height:36px;object-fit:cover;border-radius:6px">` : product.emoji}</div>
        <div class="checkout-product-name">${product.name} x${item.qty}</div>
        <div class="checkout-product-price">${formatPrice(product.price * item.qty)}</div>
      </div>
    `;
    })
    .join("");

  summaryEl.innerHTML = `
    <h2>Votre commande</h2>
    ${products}
    <div style="height:1px;background:var(--border);margin:16px 0"></div>
    <div class="summary-row"><span>Sous-total</span><span>${formatPrice(subtotal)}</span></div>
    <div class="summary-row"><span>Livraison</span><span>${
      checkoutDeliveryType === "pickup"
        ? '<span class="delivery-tag-pickup">À payer à la réception</span>'
        : formatPrice(shipping)
    }</span></div>
    <div class="summary-row total"><span>Total à payer</span><span>${formatPrice(total)}</span></div>
    ${checkoutDeliveryType === "pickup" ? '<p class="checkout-note">💡 Les frais de livraison seront réglés directement au livreur.</p>' : ""}
  `;
}

function selectPayment(method) {
  document.getElementById("wave-instructions").style.display =
    method === "wave" ? "block" : "none";
  document.getElementById("orange-instructions").style.display =
    method === "orange" ? "block" : "none";
  document.querySelectorAll(".payment-option").forEach((el) => {
    const radio = el.querySelector('input[type="radio"]');
    el.classList.toggle("active", radio && radio.value === method);
  });
}

function selectDelivery(type, labelEl) {
  checkoutDeliveryType = type;
  document
    .querySelectorAll(".delivery-option")
    .forEach((l) => l.classList.remove("active"));
  if (labelEl) labelEl.classList.add("active");
  renderCheckout();
}

function placeOrder(event) {
  event.preventDefault();
  const orderId = "BM-" + Date.now().toString(36).toUpperCase();
  const paymentMethod =
    document.querySelector('input[name="payment"]:checked')?.value || "wave";
  const deliveryType = checkoutDeliveryType;

  // Save order to user history if logged in
  if (currentUser) {
    const users = JSON.parse(localStorage.getItem("bonnemie_users") || "[]");
    const userIdx = users.findIndex((u) => u.id === currentUser.id);
    if (userIdx > -1) {
      const subtotal = getCartTotal();
      const shipping = deliveryType === "pickup" ? 0 : DELIVERY_FEE;
      const order = {
        id: orderId,
        date: new Date().toISOString(),
        items: cart.map((item) => {
          const p = PRODUCTS.find((pr) => pr.id === item.id);
          return {
            id: item.id,
            name: p ? p.name : "?",
            qty: item.qty,
            price: p ? p.price : 0,
            emoji: p ? p.emoji : "",
          };
        }),
        total: subtotal + shipping,
        paymentMethod,
        deliveryType,
        status: "En préparation",
      };
      if (!users[userIdx].orders) users[userIdx].orders = [];
      users[userIdx].orders.unshift(order);
      localStorage.setItem("bonnemie_users", JSON.stringify(users));
    }
  }

  cart = [];
  saveCart();
  updateCartUI();

  document.getElementById("success-order-id").textContent =
    `Numéro de commande : ${orderId}`;
  navigate("order-success");
}

// ===== NEWSLETTER =====
function subscribeNewsletter() {
  const email = document.getElementById("newsletter-email").value;
  if (!email || !email.includes("@")) {
    showToast("⚠️ Veuillez entrer un email valide", "error");
    return;
  }
  document.getElementById("newsletter-email").value = "";
  showToast("🎉 Merci ! Vous êtes inscrit(e) à notre newsletter.", "success");
}

// ===== CARD FORMATTING =====
function formatCard(input) {
  let val = input.value.replace(/\D/g, "").substring(0, 16);
  input.value = val.replace(/(\d{4})/g, "$1 ").trim();
}

function formatExpiry(input) {
  let val = input.value.replace(/\D/g, "").substring(0, 4);
  if (val.length > 2) val = val.substring(0, 2) + "/" + val.substring(2);
  input.value = val;
}

// ===== UTILS =====
function formatPrice(price) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",
  }).format(price);
}

function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5 ? 1 : 0;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(5 - full - half);
}

function showToast(message, type = "default") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("fade-out");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== CUSTOMER AUTH =====
function openAuthModal(tab = "login") {
  const overlay = document.getElementById("auth-overlay");
  overlay.classList.add("open");
  switchAuthTab(tab);
  document.body.style.overflow = "hidden";
}

function closeAuthModal(event) {
  if (event && event.target !== document.getElementById("auth-overlay")) return;
  const overlay = document.getElementById("auth-overlay");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  document.getElementById("login-error").style.display = "none";
  document.getElementById("register-error").style.display = "none";
}

function switchAuthTab(tab) {
  document
    .getElementById("tab-login")
    .classList.toggle("active", tab === "login");
  document
    .getElementById("tab-register")
    .classList.toggle("active", tab === "register");
  document
    .getElementById("auth-panel-login")
    .classList.toggle("active", tab === "login");
  document
    .getElementById("auth-panel-register")
    .classList.toggle("active", tab === "register");
}

function customerLogin(event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;
  const errorEl = document.getElementById("login-error");

  const users = JSON.parse(localStorage.getItem("bonnemie_users") || "[]");
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    errorEl.textContent = "Email ou mot de passe incorrect.";
    errorEl.style.display = "block";
    return;
  }

  currentUser = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
  localStorage.setItem("bonnemie_user", JSON.stringify(currentUser));

  document.getElementById("auth-overlay").classList.remove("open");
  document.body.style.overflow = "";
  updateAuthUI();
  showToast(`Bonjour ${user.firstName} ! 🥖`, "success");
}

function customerRegister(event) {
  event.preventDefault();
  const firstName = document.getElementById("register-firstname").value.trim();
  const lastName = document.getElementById("register-lastname").value.trim();
  const email = document.getElementById("register-email").value.trim();
  const password = document.getElementById("register-password").value;
  const confirm = document.getElementById("register-confirm").value;
  const errorEl = document.getElementById("register-error");

  if (!firstName || !lastName || !email || !password) {
    errorEl.textContent = "Veuillez remplir tous les champs obligatoires.";
    errorEl.style.display = "block";
    return;
  }
  if (password.length < 8) {
    errorEl.textContent =
      "Le mot de passe doit contenir au moins 8 caractères.";
    errorEl.style.display = "block";
    return;
  }
  if (password !== confirm) {
    errorEl.textContent = "Les mots de passe ne correspondent pas.";
    errorEl.style.display = "block";
    return;
  }

  const users = JSON.parse(localStorage.getItem("bonnemie_users") || "[]");
  if (users.find((u) => u.email === email)) {
    errorEl.textContent = "Un compte avec cet email existe déjà.";
    errorEl.style.display = "block";
    return;
  }

  const newUser = {
    id: "u-" + Date.now(),
    firstName,
    lastName,
    email,
    password,
    createdAt: new Date().toISOString(),
    orders: [],
  };
  users.push(newUser);
  localStorage.setItem("bonnemie_users", JSON.stringify(users));

  currentUser = { id: newUser.id, firstName, lastName, email };
  localStorage.setItem("bonnemie_user", JSON.stringify(currentUser));

  document.getElementById("auth-overlay").classList.remove("open");
  document.body.style.overflow = "";
  updateAuthUI();
  showToast(`Bienvenue ${firstName} ! Votre compte est créé. 🎉`, "success");
}

function customerLogout() {
  currentUser = null;
  localStorage.removeItem("bonnemie_user");
  closeAccountDropdown();
  updateAuthUI();
  if (currentPage === "account") navigate("home");
  showToast("À bientôt ! 👋");
}

function handleAccountClick() {
  if (currentUser) {
    const dropdown = document.getElementById("account-dropdown");
    dropdown.classList.toggle("open");
  } else {
    openAuthModal("login");
  }
}

function closeAccountDropdown() {
  const dropdown = document.getElementById("account-dropdown");
  if (dropdown) dropdown.classList.remove("open");
}

function updateAuthUI() {
  const label = document.getElementById("account-btn-label");
  const mobileLink = document.getElementById("mobile-account-link");
  const dropdownName = document.getElementById("dropdown-user-name");

  if (currentUser) {
    const name = currentUser.firstName;
    if (label) label.textContent = name;
    if (mobileLink) mobileLink.textContent = `👤 ${name}`;
    if (dropdownName)
      dropdownName.textContent = `${currentUser.firstName} ${currentUser.lastName}`;
    document.getElementById("account-header-btn").classList.add("logged-in");
  } else {
    if (label) label.textContent = "Connexion";
    if (mobileLink) mobileLink.textContent = "👤 Connexion";
    if (dropdownName) dropdownName.textContent = "Mon compte";
    const btn = document.getElementById("account-header-btn");
    if (btn) btn.classList.remove("logged-in");
  }
}

function toggleAuthPassword(inputId) {
  const input = document.getElementById(inputId);
  input.type = input.type === "password" ? "text" : "password";
}

function renderAccountPage() {
  const container = document.getElementById("account-page-content");
  if (!container) return;

  if (!currentUser) {
    container.innerHTML = `
      <div class="account-login-prompt">
        <div class="empty-cart-icon">👤</div>
        <h2>Connectez-vous</h2>
        <p>Veuillez vous connecter pour accéder à votre espace personnel.</p>
        <button class="btn btn-primary" onclick="openAuthModal('login')">Se connecter</button>
        <button class="btn btn-outline" style="margin-left:12px" onclick="openAuthModal('register')">Créer un compte</button>
      </div>
    `;
    return;
  }

  const users = JSON.parse(localStorage.getItem("bonnemie_users") || "[]");
  const user = users.find((u) => u.id === currentUser.id) || currentUser;
  const orders = user.orders || [];

  const ordersHtml =
    orders.length === 0
      ? `<div class="no-orders"><p>Vous n'avez pas encore de commandes.</p><button class="btn btn-primary" onclick="navigate('products')">Commander maintenant</button></div>`
      : orders
          .map(
            (order) => `
        <div class="order-card">
          <div class="order-card-header">
            <div>
              <span class="order-id">${order.id}</span>
              <span class="order-date">${new Date(order.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}</span>
            </div>
            <span class="order-status">${order.status}</span>
          </div>
          <div class="order-items">
            ${order.items.map((item) => `<span class="order-item-pill">${item.emoji} ${item.name} ×${item.qty}</span>`).join("")}
          </div>
          <div class="order-total">Total : <strong>${formatPrice(order.total)}</strong></div>
        </div>
      `,
          )
          .join("");

  container.innerHTML = `
    <div class="account-header-section">
      <div class="account-avatar">${currentUser.firstName.charAt(0)}${currentUser.lastName.charAt(0)}</div>
      <div>
        <h1>${currentUser.firstName} ${currentUser.lastName}</h1>
        <p class="account-email">${currentUser.email}</p>
      </div>
      <button class="btn btn-outline btn-sm" onclick="customerLogout()" style="margin-left:auto">Se déconnecter</button>
    </div>

    <div class="account-grid">
      <div class="account-card">
        <h3>👤 Informations personnelles</h3>
        <div class="account-info-row"><span>Prénom</span><strong>${currentUser.firstName}</strong></div>
        <div class="account-info-row"><span>Nom</span><strong>${currentUser.lastName}</strong></div>
        <div class="account-info-row"><span>Email</span><strong>${currentUser.email}</strong></div>
        <div class="account-info-row"><span>Membre depuis</span><strong>${new Date(user.createdAt || Date.now()).toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}</strong></div>
      </div>
      <div class="account-card account-stats-card">
        <h3>📊 Vos statistiques</h3>
        <div class="account-stat"><span class="account-stat-num">${orders.length}</span><span>commande(s)</span></div>
        <div class="account-stat"><span class="account-stat-num">${formatPrice(orders.reduce((s, o) => s + o.total, 0))}</span><span>dépensés</span></div>
      </div>
    </div>

    <div class="account-orders-section">
      <h2>📦 Mes commandes</h2>
      ${ordersHtml}
    </div>
  `;
}
// ===== EXPOSE TO WINDOW (ES module scope fix) =====
window.navigate = navigate;
window.goBack = goBack;
window.filterByCategory = filterByCategory;
window.toggleSearch = toggleSearch;
window.handleSearch = handleSearch;
window.toggleMenu = toggleMenu;
window.setFilter = setFilter;
window.handleSort = handleSort;
window.openProduct = openProduct;
window.selectSize = selectSize;
window.selectColor = selectColor;
window.changeQty = changeQty;
window.setQty = setQty;
window.addToCartFromDetail = addToCartFromDetail;
window.commanderFromDetail = commanderFromDetail;
window.quickAddToCart = quickAddToCart;
window.removeFromCart = removeFromCart;
window.updateCartQty = updateCartQty;
window.toggleWishlist = toggleWishlist;
window.applyPromo = applyPromo;
window.placeOrder = placeOrder;
window.selectPayment = selectPayment;
window.selectDelivery = selectDelivery;
window.subscribeNewsletter = subscribeNewsletter;
window.showToast = showToast;
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.switchAuthTab = switchAuthTab;
window.customerLogin = customerLogin;
window.customerRegister = customerRegister;
window.customerLogout = customerLogout;
window.handleAccountClick = handleAccountClick;
window.closeAccountDropdown = closeAccountDropdown;
window.toggleAuthPassword = toggleAuthPassword;
