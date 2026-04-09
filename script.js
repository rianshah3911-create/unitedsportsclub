const menuData = [
    { 
        name: "STARTERS", icon: "zap", 
        sections: [
            { type: "VEG", name: "PANEER STARTERS", items: [{ n: "Paneer Kebab", p: 450 }, { n: "Paneer Pokora", p: 650 }, { n: "Paneer Pousin", p: 650 }, { n: "Paneer Tikka", p: 500 }, { n: "Paneer Chilly", p: 650 }, { n: "Paneer Samosa (6 Pcs)", p: 240 }]},
            { type: "VEG", name: "CHAPATIS", items: [{ n: "Vegetable Chapati (+Salad)", p: 300 }, { n: "Egg Chapati (+Salad)", p: 350 }, { n: "Paneer Chapati (+Salad)", p: 500 }, { n: "Mutton Kheema Egg Chapati", p: 450 }, { n: "Cheese Chapati (+Salad)", p: 500 }, { n: "Veg Cheese Chapati", p: 550 }]},
            { type: "VEG", name: "CHIPS", items: [{ n: "Plain Chips", p: 200 }, { n: "Periperi Chips", p: 300 }, { n: "Masala Chips", p: 300 }, { n: "Pepper Chips", p: 300 }, { n: "Pousin Chips", p: 300 }]},
            { type: "VEG", name: "BHAJIA", items: [{ n: "Daal Bhajia", sizes: { "6 Pcs": 250, "10 Pcs": 400 } }, { n: "Maru Bhajia", p: 250 }, { n: "Chilly Bhajia", p: 250 }, { n: "Onion Bhajia", p: 250 }, { n: "Methi/Gota Bhajia", sizes: { "6 Pcs": 250, "10 Pcs": 400 } }, { n: "Mixed Bhajia", p: 500 }, { n: "Egg Bhajia", p: 350 }]},
            { type: "VEG", name: "POTATOES", items: [{ n: "Mashed Potatoes", p: 350 }, { n: "Packed Potatoes", sizes: { "6 Pcs": 250, "10 Pcs": 400 } }, { n: "Bateta Vada", sizes: { "6 Pcs": 250, "10 Pcs": 400 } }, { n: "Potato Vada Roll", p: 450 }]},
            { type: "VEG", name: "OTHERS", items: [{ n: "Veg Lollipop-Normal", sizes: { "6 Pcs": 300, "10 Pcs": 450 } }, { n: "Veg Lollipop-Cheese Special", sizes: { "6 Pcs": 350, "10 Pcs": 600 } }, { n: "Soya Veg Kebab-Normal (3 Pcs)", p: 350 }, { n: "Soya Veg Kebab-Special", p: 500 }, { n: "Kin Kebab", p: 450 }, { n: "Onion Ring", p: 300 }, { n: "Gobi Pakora", p: 300 }, { n: "Egg Plant Chilly", p: 450 }, { n: "Chilly Baby Corn", p: 450 }, { n: "Boiled Jugu", p: 250 }, { n: "Veg Samosa (6 Pcs)", p: 200 }, { n: "Cassava Pousin", p: 400 }, { n: "Roasted/Fried Garlic", p: 100 }, { n: "Puri/Tepla", p: 30 }]},
            { type: "NON-VEG", name: "POULTRY", items: [{ n: "Chicken Lollipop", sizes: { "6 Pcs": 450, "10 Pcs": 600 } }, { n: "Chicken Wings (6 Pcs)", sizes: { "Plain": 500, "Pepper": 600, "Pousin": 600 } }, { n: "Chicken Sausages (3 Pcs)", sizes: { "Fried": 300, "Pepper/Chilly": 400 } }, { n: "Chicken Kebab (3 Pcs)", sizes: { "Normal": 500, "Special": 600 } }, { n: "Chicken Thigh Tikka", p: 500 }, { n: "Chicken Breast Tikka", p: 650 }, { n: "Chicken Mishakiki", p: 400 }, { n: "Chicken Drumstick (3 Pcs)", p: 550 }, { n: "Chicken Tender", p: 750 }]},
            { type: "NON-VEG", name: "MUTTON", items: [{ n: "Mutton/Shish Kebab (3 Pcs)", p: 400 }, { n: "Black Fried Kebab", p: 400 }, { n: "Mutton Samosa (6 Pcs)", p: 300 }, { n: "Mishakiki", p: 400 }, { n: "Molo Lamb Chop Grilled", p: 1000 }]},
            { type: "NON-VEG", name: "FISH (Red Snapper)", items: [{ n: "Fish Fingers", sizes: { "Qtr": 850, "Half": 1400, "Full": 2250 } }, { n: "Fish Pakora", sizes: { "Qtr": 850, "Half": 1400, "Full": 2250 } }, { n: "Fish Chilly", sizes: { "Qtr": 850, "Half": 1400, "Full": 2250 } }, { n: "Fish Green Tawa", sizes: { "Half": 1400, "Full": 2250 } }, { n: "Fish Foil", sizes: { "Half": 1400, "Full": 2250 } }, { n: "Fish Tawa", sizes: { "Half": 1450, "Full": 2250 } }, { n: "Fish Grill/Tikka", sizes: { "Half": 1400, "Full": 2250 } }, { n: "Fish Pousin", sizes: { "Half": 1400, "Full": 2250 } }]}
        ]
    },
    { 
        name: "VEG MAINS", icon: "leaf", 
        sections: [
            { name: "PANEER SPECIALTIES", items: [{ n: "Paneer Tikka Butter", sizes: { "Half": 800, "Full": 1300 } }, { n: "Paneer Matar", sizes: { "Half": 800, "Full": 1300 } }, { n: "Paneer Makhni", sizes: { "Half": 800, "Full": 1300 } }, { n: "Paneer Palak", sizes: { "Half": 800, "Full": 1300 } }, { n: "Paneer Methi Malai", sizes: { "Half": 800, "Full": 1300 } }, { n: "Paneer Bhurji", sizes: { "Half": 800, "Full": 1300 } }, { n: "Paneer Shahi", sizes: { "Half": 1000, "Full": 1600 } }]},
            { name: "EGG SPECIALTIES", items: [{ n: "Egg Curry/Masala", sizes: { "Half": 500, "Full": 800 } }, { n: "Egg Bhurji", sizes: { "Half": 500, "Full": 800 } }]},
            { name: "CURRIES & DAALS", items: [
                { n: "Daal Fry", sizes: { "Half": 750, "Full": 1050 } }, { n: "Daal Makhni", sizes: { "Half": 750, "Full": 1050 } }, { n: "Moong (pojo) Daal", sizes: { "Half": 750, "Full": 1050 } }, { n: "Mixed vegetables Curry", sizes: { "Half": 750, "Full": 1050 } }, { n: "Aloo Jeera", sizes: { "Half": 750, "Full": 1050 } }, { n: "Aloo Methi Palak", sizes: { "Half": 750, "Full": 1050 } }, { n: "Aloo Matra", sizes: { "Half": 750, "Full": 1050 } }, { n: "Bengan Bharta (oro)", sizes: { "Half": 750, "Full": 1050 } }, { n: "Lady Fingers (Binda)", sizes: { "Half": 750, "Full": 1050 } }, { n: "Veg. Manchurian", sizes: { "Half": 750, "Full": 1050 } }, { n: "Veg. Kofta Malai", sizes: { "Half": 750, "Full": 1050 } }, { n: "Mchicha (Bhajee)", sizes: { "Half": 750, "Full": 1050 } }, { n: "Hutton mix", sizes: { "Half": 750, "Full": 1050 } }, { n: "Makai Paka", p: 950 }, { n: "Butter Beans", p: 1050 }, { n: "Githeri", p: 1050 }, { n: "Methi Gota Curry", p: 1050 }, { n: "Matra Masala", p: 1050 }, { n: "Matra Methi", p: 1050 }, { n: "Baked Beans Karai", p: 1050 }, { n: "Soya Veg Khima", p: 1050 }, { n: "Soya Chunk Mari/Masala/Methi", p: 1050 }, { n: "Makai Masala", p: 1050 }, { n: "Special Cauliflower Curry", p: 1200 }, { n: "Mushroom Foil", p: 1200 }, { n: "Mushroom Masala", p: 1200 }, { n: "Special Mushroom Masala", p: 1200 }, { n: "Kitchiri (Served with Veg Curry/Kadhi)", p: 2500 }
            ]},
            { name: "RICE & SALADS", items: [{ n: "Plain Rice", p: 250 }, { n: "Jeera Rice", p: 300 }, { n: "Vegetable Rice", p: 400 }, { n: "Kitchiri Set", p: 2500 }, { n: "Gulab Salad", p: 400 }, { n: "Kachumbari", p: 300 }]}
        ]
    },
    { 
        name: "NON-VEG MAINS", icon: "drumstick", 
        sections: [
            { name: "CHICKEN (WITH BONES)", items: [{ n: "Chicken Mari Methi/Palak", sizes: { "Half": 950, "Full": 1600 } }, { n: "Chicken Malai Tawa", sizes: { "Half": 950, "Full": 1600 } }, { n: "Chicken Paka", sizes: { "Half": 1000, "Full": 1700 } }, { n: "Butter Chicken", sizes: { "Half": 1000, "Full": 1700 } }, { n: "Chicken Tikka Special", sizes: { "Half": 1000, "Full": 1700 } }, { n: "Chicken Kyenyeji", sizes: { "Full": 1800 } }, { n: "Chicken Pousin (+Chips)", sizes: { "Half": 1000, "Full": 1700 } }]},
            { name: "CHICKEN (BONELESS)", items: [{ n: "Chicken Mari Methi (Boneless)", p: 950 }, { n: "Chicken Paka (Boneless)", p: 1050 }, { n: "Butter Chicken (Boneless)", p: 1050 }, { n: "Chicken Tikka Butter Curry", p: 1050 }]},
            { name: "FISH (RED SNAPPER)", items: [
                { n: "Fish Masala", sizes: { "Half": 1400, "Full": 2250 } }, { n: "Fish Paka", sizes: { "Half": 1450, "Full": 2250 } }, { n: "Fish Khima", sizes: { "Half": 1400, "Full": 2250 } }, { n: "Fish Mari/Methi/Palak/Jeera", sizes: { "Half": 1400, "Full": 2250 } }, { n: "Fish Jawar Style", sizes: { "Half": 1600, "Full": 2700 } }
            ]},
            { name: "MUTTON", items: [
                { n: "Mutton Khima Masala", sizes: { "Qtr": 750, "Half": 1300, "Full": 2200 } }, { n: "Mutton Khima Kofta", sizes: { "Qtr": 750, "Half": 1350, "Full": 2200 } }, { n: "Mutton Palak/Methi/Jeera/Masala", sizes: { "Half": 1300, "Full": 2200 } }, { n: "Mutton Karai", sizes: { "Half": 1300, "Full": 2200 } }
            ]},
            { name: "PRAWNS", items: [
                { n: "Prawns Masala (Queen)", sizes: { "Qtr": 1300, "Half": 2000, "Full": 3800 } }, { n: "Prawns Masala (King)", sizes: { "Half": 3000, "Full": 6000 } },
                { n: "Prawns Paka (Queen)", sizes: { "Qtr": 1300, "Half": 2000, "Full": 3800 } }, { n: "Prawns Paka (King)", sizes: { "Half": 3000, "Full": 6000 } },
                { n: "Prawns Karai (Queen)", sizes: { "Qtr": 1300, "Half": 2000, "Full": 3800 } }, { n: "Prawns Karai (King)", sizes: { "Half": 3000, "Full": 6000 } },
                { n: "Prawns Tawa (Queen)", sizes: { "Qtr": 1300, "Half": 2000, "Full": 3800 } }, { n: "Prawns Tawa (King)", sizes: { "Half": 3000, "Full": 6000 } },
                { n: "Prawns Garlic Butter (Queen)", sizes: { "Qtr": 1300, "Half": 2000, "Full": 3800 } }, { n: "Prawns Garlic Butter (King)", sizes: { "Half": 3000, "Full": 6000 } }
            ]}
        ]
    },
    { 
        name: "CHINESE", icon: "sun", 
        sections: [{ name: "SPECIALS", items: [{ n: "Spring Rolls (4 Pcs)", p: 300 }, { n: "Chilly Chicken", p: 1050 }, { n: "Chilli Fish", p: 1300 }, { n: "Chilli Paneer", p: 750 }, { n: "Rice Veg", p: 400 }, { n: "Egg Fried Rice", p: 450 }]}]
    },
    { 
        name: "ITALIAN", icon: "pizza", 
        sections: [
            { name: "PASTA", items: [{ n: "Penne Alfredo", p: 600 }, { n: "Shrimp Pasta", p: 700 }, { n: "Veg Pasta Red Sauce", p: 600 }]},
            { name: "PIZZA", items: [{ n: "Chicken Pizza", p: 800 }, { n: "Margarita Pizza", p: 650 }, { n: "Veg Pizza", p: 700 }]},
            { name: "OTHER", items: [{ n: "Falafel Hummus Plate", p: 750 }, { n: "Grilled Halloumi Plate", p: 750 }, { n: "Lebanese Garlic Wings", p: 600 }]}
        ]
    },
    { 
        name: "BIRYANI", icon: "utensils", 
        sections: [{ name: "BIRYANI", items: [{ n: "Veg Biriyani", p: 2850 }, { n: "Paneer Biriyani", p: 3000 }, { n: "Mutton Biriyani", p: 3000 }, { n: "Chicken Biriyani", p: 3000 }, { n: "Fish Biriyani", p: 3000 }]}]
    },
    { 
        name: "NAAN", icon: "circle-dot", 
        sections: [{ name: "NAANS (Min 5)", items: [{ n: "Plain Naan", p: 150 }, { n: "Butter Naan", p: 150 }, { n: "Garlic Naan", p: 150 }, { n: "Turbo Naan", p: 150 }, { n: "Kila Kitu Naan", p: 150 }]}]
    }
];

let cart = [];

function init() {
    const app = document.getElementById('menu-app');
    const nav = document.getElementById('nav-buttons');
    if(!app || !nav) return;

    menuData.forEach((main, mIdx) => {
        const btn = document.createElement('div');
        btn.className = 'nav-btn' + (mIdx === 0 ? ' active' : '');
        btn.innerHTML = `<i data-lucide="${main.icon}"></i><span>${main.name}</span>`;
        btn.onclick = () => openMainCategory(`main-${mIdx}`, btn);
        nav.appendChild(btn);

        const mainWrapper = document.createElement('div');
        mainWrapper.className = 'main-category-block';
        mainWrapper.id = `main-${mIdx}`;
        mainWrapper.style.display = mIdx === 0 ? 'block' : 'none';

        if (main.name === "STARTERS") {
            ["VEG", "NON-VEG"].forEach(groupType => {
                const typeID = `type-${groupType}`;
                mainWrapper.innerHTML += `
                    <div class="category-wrapper">
                        <div class="category-header" onclick="toggleSub('${typeID}')">
                            <span>${groupType} STARTERS</span><i data-lucide="chevron-down"></i>
                        </div>
                        <div class="category-content" id="${typeID}">
                            ${main.sections.filter(sec => sec.type === groupType).map((sub, sIdx) => {
                                const subID = `sub-starter-${groupType}-${sIdx}`;
                                return `
                                    <div class="category-wrapper">
                                        <div class="category-header" onclick="toggleSub('${subID}')" style="font-size:14px; background:#f9f9f9;">
                                            <span>${sub.name}</span><i data-lucide="chevron-down"></i>
                                        </div>
                                        <div class="category-content" id="${subID}">
                                            <div class="items-grid">${sub.items.map(item => renderItem(item)).join('')}</div>
                                        </div>
                                    </div>`;
                            }).join('')}
                        </div>
                    </div>`;
            });
        } else {
            main.sections.forEach((sub, sIdx) => {
                const subID = `sub-${mIdx}-${sIdx}`;
                mainWrapper.innerHTML += `
                    <div class="category-wrapper">
                        <div class="category-header" onclick="toggleSub('${subID}')">
                            <span>${sub.name}</span><i data-lucide="chevron-down"></i>
                        </div>
                        <div class="category-content" id="${subID}">
                            <div class="items-grid">${sub.items.map(item => renderItem(item)).join('')}</div>
                        </div>
                    </div>`;
            });
        }
        app.appendChild(mainWrapper);
    });
    lucide.createIcons();
}

function renderItem(item) {
    const hasSizes = !!item.sizes;
    const price = hasSizes ? Object.values(item.sizes)[0] : item.p;
    return `
        <div class="food-card" data-name="${item.n.toLowerCase()}">
            <div class="food-info">
                <span class="food-name">${item.n}</span>
                ${hasSizes ? `<div class="portion-box">${Object.keys(item.sizes).map((s, i) => `<div class="portion-btn ${i===0?'active':''}" onclick="changePrice(this, ${item.sizes[s]})">${s}</div>`).join('')}</div>` : ''}
            </div>
            <div class="card-right">
                <span class="price-display">KES <span class="v">${price}</span></span>
                <button class="add-to-cart" onclick="addToCart(this)">+</button>
            </div>
        </div>`;
}

function filterMenu() {
    const q = document.getElementById('menuSearch').value.toLowerCase();
    const allMainBlocks = document.querySelectorAll('.main-category-block');
    const allWrappers = document.querySelectorAll('.category-wrapper');
    const allCards = document.querySelectorAll('.food-card');
    const allContents = document.querySelectorAll('.category-content');
    const allHeaders = document.querySelectorAll('.category-header');

    if (q.length === 0) {
        // 1. Find the currently active tab button
        const activeBtn = document.querySelector('.nav-btn.active');
        
        // 2. SCRUB ALL INLINE STYLES from everything
        [allMainBlocks, allWrappers, allHeaders, allContents, allCards].forEach(list => {
            list.forEach(el => {
                el.style.display = "";
                el.style.margin = "";
                el.style.padding = "";
                el.style.boxShadow = "";
                el.style.background = "";
                el.classList.remove('active');
            });
        });

        // 3. FORCE RE-TRIGGER the current tab to restore original layout
        if (activeBtn) {
            activeBtn.click();
        }
        return;
    }

    // --- SEARCH MODE (Remains the same) ---
    allMainBlocks.forEach(block => {
        block.style.display = 'block';
        block.style.padding = "0 15px"; 
    });

    allWrappers.forEach(wrapper => {
        const header = wrapper.querySelector('.category-header');
        const content = wrapper.querySelector('.category-content');
        const cardsInside = wrapper.querySelectorAll('.food-card');
        let matchInThisWrapper = false;

        cardsInside.forEach(card => {
            const name = card.getAttribute('data-name');
            if (name.includes(q)) {
                card.style.display = 'flex';
                matchInThisWrapper = true;
            } else {
                card.style.display = 'none';
            }
        });

        if (matchInThisWrapper) {
            wrapper.style.display = 'block';
            wrapper.style.margin = "0"; 
            wrapper.style.boxShadow = "none"; 
            wrapper.style.background = "transparent";
            if (content) {
                content.classList.add('active');
                content.style.display = "block";
                content.style.padding = "0"; 
            }
            if (header) header.style.display = 'none';
        } else {
            wrapper.style.display = 'none';
        }
    });
}

function addToCart(btn) {
    btn.style.transform = "scale(1.3)";
    setTimeout(() => btn.style.transform = "scale(1)", 200);

    const card = btn.closest('.food-card');
    const name = card.querySelector('.food-name').innerText;
    const price = parseInt(card.querySelector('.v').innerText);
    const size = card.querySelector('.portion-btn.active')?.innerText || "";
    
    const existing = cart.find(i => i.name === name && i.size === size);
    if(existing) { existing.qty++; } 
    else { cart.push({ name, size, price, qty: 1, comment: "" }); }
    updateCartUI();
}

function updateCartUI() {
    const list = document.getElementById('cart-items-list');
    let total = 0;
    list.innerHTML = "";
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        list.innerHTML += `
            <div class="cart-item-card" style="animation-delay: ${index * 0.05}s">
                <div class="cart-item-top">
                    <div class="cart-item-info">
                        <span class="cart-qty">${item.qty}x</span>
                        <span class="cart-name">${item.name} ${item.size ? `<small>(${item.size})</small>` : ''}</span>
                    </div>
                    <span class="cart-price">KES ${itemTotal}</span>
                </div>
                <div class="cart-item-bottom">
                    <i data-lucide="message-square" class="note-icon"></i>
                    <input class="modern-input note-input" 
                           placeholder="Add special instructions..." 
                           oninput="updateComment(${index}, this.value)" 
                           value="${item.comment}">
                </div>
            </div>`;
    });

    document.getElementById('cart-count').innerText = cart.reduce((acc, obj) => acc + obj.qty, 0);
    document.getElementById('cart-total').innerText = "KES " + total;
    document.getElementById('modal-total').innerText = "KES " + total;
    
    const bar = document.getElementById('cart-bar');
    bar.style.display = cart.length > 0 ? 'flex' : 'none';
    lucide.createIcons(); 
}

function updateComment(index, val) { cart[index].comment = val; }

// ... (keep your menuData and init() function at the top as they were) ...

function addToCart(btn) {
    btn.style.transform = "scale(1.3)";
    setTimeout(() => btn.style.transform = "scale(1)", 200);

    const card = btn.closest('.food-card');
    const name = card.querySelector('.food-name').innerText;
    const price = parseInt(card.querySelector('.v').innerText);
    const size = card.querySelector('.portion-btn.active')?.innerText || "";
    
    const existing = cart.find(i => i.name === name && i.size === size);
    if(existing) { 
        existing.qty++; 
    } else { 
        cart.push({ name, size, price, qty: 1, comment: "" }); 
    }
    updateCartUI();
}

function updateCartUI() {
    const list = document.getElementById('cart-items-list');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const modalTotal = document.getElementById('modal-total');
    const bar = document.getElementById('cart-bar');

    let total = 0;
    list.innerHTML = "";
    
    if (cart.length === 0) {
        list.innerHTML = `<div style="text-align:center; padding:40px; color:#888;">Your selection is empty</div>`;
    }

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        list.innerHTML += `
            <div class="cart-item-card" style="animation-delay: ${index * 0.05}s">
                <div class="cart-item-top">
                    <div class="cart-item-info">
                        <span class="cart-qty">${item.qty}x</span>
                        <span class="cart-name">${item.name} ${item.size ? `<small>(${item.size})</small>` : ''}</span>
                    </div>
                    <span class="cart-price">KES ${itemTotal}</span>
                </div>
                <div class="cart-item-bottom">
                    <input class="modern-input note-input" 
                           placeholder="Add instructions (e.g., No onions)..." 
                           oninput="updateComment(${index}, this.value)" 
                           value="${item.comment}">
                </div>
            </div>`;
    });

    // Update all count and total displays
    if(cartCount) cartCount.innerText = cart.reduce((acc, obj) => acc + obj.qty, 0);
    if(cartTotal) cartTotal.innerText = "KES " + total;
    if(modalTotal) modalTotal.innerText = "KES " + total;
    
    // Show/Hide bottom floating bar
    if(bar) bar.style.display = cart.length > 0 ? 'flex' : 'none';
    
    lucide.createIcons(); 
}

function updateComment(index, val) { 
    cart[index].comment = val; 
}

function placeOrder() {
    const nameInput = document.getElementById('cust-name');
    const name = nameInput.value;
    const date = document.getElementById('order-date').value;
    const time = document.getElementById('order-time').value;
    const pax = document.getElementById('cust-people').value || "1";
    const finalTotal = document.getElementById('modal-total').innerText;

    if(!name) {
        nameInput.style.border = "2px solid red";
        nameInput.focus();
        return alert("Please enter your name to proceed!");
    }
    
    // Formatting Date for readability
    let formattedDate = "";
    if(date) {
        const d = date.split('-');
        formattedDate = `${d[2]}/${d[1]}/${d[0]}`;
    }

    // Build the WhatsApp message
    let msg = `*USC PREMIUM ORDER*%0a`;
    msg += `--------------------------%0a`;
    msg += `👤 *Customer:* ${name}%0a`;
    msg += `👥 *Pax:* ${pax}%0a`;
    
    if(date) msg += `📅 *Date:* ${formattedDate}%0a`;
    if(time) msg += `⏰ *Time:* ${time}%0a`;
    
    msg += `--------------------------%0a%0a`;
    msg += `*ITEMS ORDERED:*%0a`;

    cart.forEach(item => {
        msg += `✅ ${item.qty}x ${item.name} ${item.size ? `(${item.size})` : ''}%0a`;
        if(item.comment) msg += `   _Note: ${item.comment}_%0a`;
    });

    msg += `%0a💰 *Grand Total: ${finalTotal}*`;
    
    window.open(`https://wa.me/254722850525?text=${msg}`);
}

function toggleCart() {
    const m = document.getElementById('cart-modal');
    // Ensure display is handled correctly for the fade-in CSS
    if (m.style.display === 'flex') {
        m.style.display = 'none';
    } else {
        m.style.display = 'flex';
        updateCartUI(); // Refresh list when opening
    }
}

function clearCart() { 
    if(confirm("Are you sure you want to clear your entire order?")) {
        cart = []; 
        updateCartUI(); 
        toggleCart(); 
    }
}

// ... (keep toggleSub, openMainCategory, changePrice, filterMenu as they were) ...

function toggleSub(id) { 
    const el = document.getElementById(id);
    el.classList.toggle('active'); 
    if(el.classList.contains('active')) {
        el.querySelectorAll('.food-card').forEach((card, i) => {
            card.style.animationDelay = `${i * 0.05}s`;
        });
    }
}

function openMainCategory(id, btn) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.main-category-block').forEach(c => c.style.display = 'none');
    
    const target = document.getElementById(id);
    target.style.display = 'block';
    target.querySelectorAll('.category-wrapper').forEach((wrapper, i) => {
        wrapper.style.animation = `slideInRight 0.3s ease forwards ${i * 0.1}s`;
    });
}

function changePrice(el, p) {
    el.parentElement.querySelectorAll('.portion-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    el.closest('.food-card').querySelector('.v').innerText = p;
}

function toggleCart() {
    const m = document.getElementById('cart-modal');
    m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
    if(m.style.display === 'flex') lucide.createIcons();
}

function clearCart() { 
    if(confirm("Clear your entire order?")) {
        cart = []; 
        updateCartUI(); 
        toggleCart(); 
    }
}

init();