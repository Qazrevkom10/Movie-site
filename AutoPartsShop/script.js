const products = [
  {
    id: 1,
    name: "Моторное масло Toyota 5W-30",
    category: "Расходники",
    brand: "Toyota",
    price: 18500,
    code: "5W-30",
    article: "08880-83388",
    stock: "В наличии",
    text: "Синтетическое масло для планового обслуживания бензиновых двигателей."
  },
  {
    id: 2,
    name: "Фильтр масляный MANN",
    category: "Расходники",
    brand: "Hyundai",
    price: 6200,
    code: "MANN",
    article: "W 811/80",
    stock: "В наличии",
    text: "Фильтр для ТО с надежной фильтрацией и плотной посадкой."
  },
  {
    id: 3,
    name: "Колодки тормозные Bosch",
    category: "Тормозная система",
    brand: "Kia",
    price: 24700,
    code: "BOSCH",
    article: "0 986 494 501",
    stock: "2 часа",
    text: "Передний комплект для стабильного торможения в городе и на трассе."
  },
  {
    id: 4,
    name: "Аккумулятор Varta 75Ah",
    category: "Электрика",
    brand: "BMW",
    price: 59800,
    code: "75Ah",
    article: "E44 Silver",
    stock: "В наличии",
    text: "Пусковой ток для холодного сезона и автомобилей с активной электроникой."
  },
  {
    id: 5,
    name: "Свечи зажигания NGK Iridium",
    category: "Электрика",
    brand: "Mercedes",
    price: 16900,
    code: "NGK",
    article: "ILZKAR7B11",
    stock: "Под заказ",
    text: "Комплект свечей для ровной работы двигателя и уверенного запуска."
  },
  {
    id: 6,
    name: "Коврики EVA в салон",
    category: "Аксессуары",
    brand: "Toyota",
    price: 22500,
    code: "EVA",
    article: "EVA-CAM-70",
    stock: "1 день",
    text: "Индивидуальный крой, аккуратный кант и простая мойка после сезона."
  },
  {
    id: 7,
    name: "Держатель телефона MagSafe",
    category: "Аксессуары",
    brand: "all",
    price: 8900,
    code: "MAG",
    article: "AC-MG-15",
    stock: "В наличии",
    text: "Крепление на дефлектор с поворотом и жесткой фиксацией смартфона."
  },
  {
    id: 8,
    name: "Комплект зимних шин R17",
    category: "Шины и диски",
    brand: "Hyundai",
    price: 128000,
    code: "R17",
    article: "WIN-225-17",
    stock: "3 дня",
    text: "Комплект для уверенной езды по снегу, мокрой дороге и гололеду."
  },
  {
    id: 9,
    name: "Амортизатор KYB Excel-G",
    category: "Расходники",
    brand: "Kia",
    price: 34200,
    code: "KYB",
    article: "339402",
    stock: "В наличии",
    text: "Газомасляный амортизатор для комфортной и собранной подвески."
  }
];

const productsNode = document.querySelector("#products");
const resultCount = document.querySelector("#resultCount");
const tabs = document.querySelectorAll(".tab");
const quickSearch = document.querySelector("#quickSearch");
const heroSearch = document.querySelector("#heroSearch");
const selectorForm = document.querySelector("#selectorForm");
const carBrand = document.querySelector("#carBrand");
const categoryFilter = document.querySelector("#categoryFilter");
const budgetFilter = document.querySelector("#budgetFilter");
const cartPanel = document.querySelector("#cartPanel");
const openCart = document.querySelector("#openCart");
const closeCart = document.querySelector("#closeCart");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const checkoutButton = document.querySelector("#checkoutButton");
const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

let activeCategory = "all";
let searchText = "";
let cart = [];

function money(value) {
  return new Intl.NumberFormat("ru-RU").format(value) + " ₸";
}

function productWord(count) {
  if (count % 10 === 1 && count % 100 !== 11) return "товар";
  if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) return "товара";
  return "товаров";
}

function getFilteredProducts() {
  const selectedBrand = carBrand.value;
  const selectedCategory = categoryFilter.value;
  const budget = Number(budgetFilter.value || 0);
  const query = searchText.trim().toLowerCase();

  return products.filter(product => {
    const categoryMatch = activeCategory === "all" || product.category === activeCategory;
    const selectorCategoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    const brandMatch = selectedBrand === "all" || product.brand === selectedBrand || product.brand === "all";
    const budgetMatch = !budget || product.price <= budget;
    const searchMatch = !query || [
      product.name,
      product.category,
      product.brand,
      product.article,
      product.text
    ].join(" ").toLowerCase().includes(query);

    return categoryMatch && selectorCategoryMatch && brandMatch && budgetMatch && searchMatch;
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();
  resultCount.textContent = `${filtered.length} ${productWord(filtered.length)}`;

  if (!filtered.length) {
    productsNode.innerHTML = `
      <article class="product">
        <h3>Ничего не найдено</h3>
        <p>Попробуйте изменить фильтр или оставьте заявку на подбор по VIN.</p>
      </article>
    `;
    return;
  }

  productsNode.innerHTML = filtered.map(product => `
    <article class="product">
      <div class="product-visual">${product.code}</div>
      <span class="category">${product.category}</span>
      <h3>${product.name}</h3>
      <p>${product.text}</p>
      <div class="product-meta">
        <span>${product.article}</span>
        <span class="product-status">${product.stock}</span>
      </div>
      <div class="product-footer">
        <span class="price">${money(product.price)}</span>
        <button type="button" data-id="${product.id}">В корзину</button>
      </div>
    </article>
  `).join("");
}

function renderCart() {
  cartCount.textContent = cart.length;
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = money(total);

  if (!cart.length) {
    cartItems.innerHTML = `<p class="lead">Корзина пока пустая.</p>`;
    return;
  }

  cartItems.innerHTML = cart.map((item, index) => `
    <article class="cart-item">
      <div>
        <strong>${item.name}</strong>
        <span>${item.article} · ${money(item.price)}</span>
      </div>
      <button type="button" data-remove="${index}" aria-label="Удалить товар">×</button>
    </article>
  `).join("");
}

function openCartPanel() {
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
}

function closeCartPanel() {
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    activeCategory = tab.dataset.category;
    renderProducts();
  });
});

heroSearch.addEventListener("submit", event => {
  event.preventDefault();
  searchText = quickSearch.value;
  document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
  renderProducts();
});

selectorForm.addEventListener("submit", event => {
  event.preventDefault();
  renderProducts();
  document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
});

productsNode.addEventListener("click", event => {
  const button = event.target.closest("button[data-id]");
  if (!button) return;

  const product = products.find(item => item.id === Number(button.dataset.id));
  cart.push(product);
  renderCart();
  openCartPanel();
});

cartItems.addEventListener("click", event => {
  const button = event.target.closest("button[data-remove]");
  if (!button) return;

  cart.splice(Number(button.dataset.remove), 1);
  renderCart();
});

openCart.addEventListener("click", openCartPanel);
closeCart.addEventListener("click", closeCartPanel);
cartPanel.addEventListener("click", event => {
  if (event.target === cartPanel) closeCartPanel();
});

checkoutButton.addEventListener("click", () => {
  if (!cart.length) return;

  closeCartPanel();
  document.querySelector("#contacts").scrollIntoView({ behavior: "smooth" });
  formMessage.textContent = "Товары из корзины готовы к оформлению. Оставьте телефон, и менеджер свяжется с вами.";
});

contactForm.addEventListener("submit", event => {
  event.preventDefault();
  formMessage.textContent = "Заявка принята в демо-режиме. В рабочей версии подключим WhatsApp, Telegram или CRM.";
  contactForm.reset();
});

renderProducts();
renderCart();
