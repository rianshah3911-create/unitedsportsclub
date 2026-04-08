const menuData = [
    { 
        name: "STARTERS", icon: "zap", 
        sections: [
            { type: "VEG", name: "PANEER STARTERS", items: [
                { n: "Paneer Kebab", p: 450 }, { n: "Paneer Pokora", p: 650 }, { n: "Paneer Pousin", p: 650 }, { n: "Paneer Tikka", p: 500 }, { n: "Paneer Chilly", p: 650 }, { n: "Paneer Samosa (6 Pcs)", p: 240 }
            ]},
            { type: "VEG", name: "CHAPATIS", items: [
                { n: "Vegetable Chapati (+Salad)", p: 300 }, { n: "Egg Chapati (+Salad)", p: 350 }, { n: "Paneer Chapati (+Salad)", p: 500 }, { n: "Mutton Kheema Egg Chapati", p: 450 }, { n: "Cheese Chapati (+Salad)", p: 500 }, { n: "Veg Cheese Chapati", p: 550 }
            ]},
            { type: "VEG", name: "CHIPS", items: [
                { n: "Plain Chips", p: 200 }, { n: "Periperi Chips", p: 300 }, { n: "Masala Chips", p: 300 }, { n: "Pepper Chips", p: 300 }, { n: "Pousin Chips", p: 300 }
            ]},
            { type: "VEG", name: "BHAJIA", items: [
                { n: "Daal Bhajia", sizes: { "6 Pcs": 250, "10 Pcs": 400 } }, { n: "Maru Bhajia", p: 250 }, { n: "Chilly Bhajia", p: 250 }, { n: "Onion Bhajia", p: 250 }, { n: "Methi/Gota Bhajia", sizes: { "6 Pcs": 250, "10 Pcs": 400 } }, { n: "Mixed Bhajia", p: 500 }, { n: "Egg Bhajia", p: 350 }
            ]},
            { type: "VEG", name: "POTATOES", items: [
                { n: "Mashed Potatoes", p: 350 }, { n: "Packed Potatoes", sizes: { "6 Pcs": 250, "10 Pcs": 400 } }, { n: "Bateta Vada", sizes: { "6 Pcs": 250, "10 Pcs": 400 } }, { n: "Potato Vada Roll", p: 450 }
            ]},
            { type: "VEG", name: "OTHERS", items: [
                { n: "Veg Lollipop-Normal", sizes: { "6 Pcs": 300, "10 Pcs": 450 } }, { n: "Veg Lollipop-Cheese Special", sizes: { "6 Pcs": 350, "10 Pcs": 600 } }, { n: "Soya Veg Kebab-Normal (3 Pcs)", p: 350 }, { n: "Soya Veg Kebab-Special", p: 500 }, { n: "Kin Kebab", p: 450 }, { n: "Onion Ring", p: 300 }, { n: "Gobi Pakora", p: 300 }, { n: "Egg Plant Chilly", p: 450 }, { n: "Chilly Baby Corn", p: 450 }, { n: "Boiled Jugu", p: 250 }, { n: "Veg Samosa (6 Pcs)", p: 200 }, { n: "Cassava Pousin", p: 400 }, { n: "Roasted/Fried Garlic", p: 100 }, { n: "Puri/Tepla", p: 30 }
            ]},
            { type: "NON-VEG", name: "POULTRY", items: [
                { n: "Chicken Lollipop", sizes: { "6 Pcs": 450, "10 Pcs": 600 } }, { n: "Chicken Wings (6 Pcs)", sizes: { "Plain": 500, "Pepper": 600, "Pousin": 600 } }, { n: "Chicken Sausages (3 Pcs)", sizes: { "Fried": 300, "Pepper/Chilly": 400 } }, { n: "Chicken Kebab (3 Pcs)", sizes: { "Normal": 500, "Special": 600 } }, { n: "Chicken Thigh Tikka", p: 500 }, { n: "Chicken Breast Tikka", p: 650 }, { n: "Chicken Mishakiki", p: 400 }, { n: "Chicken Drumstick (3 Pcs)", p: 550 }, { n: "Chicken Tender", p: 750 }
            ]},
            { type: "NON-VEG", name: "MUTTON", items: [
                { n: "Mutton/Shish Kebab (3 Pcs)", p: 400 }, { n: "Black Fried Kebab", p: 400 }, { n: "Mutton Samosa (6 Pcs)", p: 300 }, { n: "Mishakiki", p: 400 }, { n: "Molo Lamb Chop Grilled", p: 1000 }
            ]},
            { type: "NON-VEG", name: "FISH (Red Snapper)", items: [
                { n: "Fish Fingers", sizes: { "Qtr": 850, "Half": 1400, "Full": 2250 } }, { n: "Fish Pakora", sizes: { "Qtr": 850, "Half": 1400, "Full": 2250 } }, { n: "Fish Chilly", sizes: { "Qtr": 850, "Half": 1400, "Full": 2250 } }, { n: "Fish Green Tawa", sizes: { "Half": 1400, "Full": 2250 } }, { n: "Fish Foil", sizes: { "Half": 1400, "Full": 2250 } }, { n: "Fish Tawa", sizes: { "Half": 1450, "Full": 2250 } }, { n: "Fish Grill/Tikka", sizes: { "Half": 1400, "Full": 2250 } }, { n: "Fish Pousin", sizes: { "Half": 1400, "Full": 2250 } }
            ]}
        ]
    },
    { 
        name: "VEG MAINS", icon: "leaf", 
        sections: [
            { name: "PANEER SPECIALTIES", items: [
                { n: "Paneer Tikka Butter", sizes: { "Half": 800, "Full": 1300 } }, { n: "Paneer Matar", sizes: { "Half": 800, "Full": 1300 } }, { n: "Paneer Makhni", sizes: { "Half": 800, "Full": 1300 } }, { n: "Paneer Palak", sizes: { "Half": 800, "Full": 1300 } }, { n: "Paneer Methi Malai", sizes: { "Half": 800, "Full": 1300 } }, { n: "Paneer Bhurji", sizes: { "Half": 800, "Full": 1300 } }, { n: "Paneer Shahi", sizes: { "Half": 1000, "Full": 1600 } }
            ]},
            { name: "EGG SPECIALTIES", items: [
                { n: "Egg Curry/Masala", sizes: { "Half": 500, "Full": 800 } }, { n: "Egg Bhurji", sizes: { "Half": 500, "Full": 800 } }
            ]},
            { name: "CURRIES & DAALS", items: [
                { n: "Daal Fry", sizes: { "Half": 750, "Full": 1050 } }, { n: "Daal Makhni", sizes: { "Half": 750, "Full": 1050 } }, { n: "Mixed Veg Curry", sizes: { "Half": 750, "Full": 1050 } }, { n: "Makai Paka", p: 950 }, { n: "Makai Masala", p: 1050 }, { n: "Butter Beans", p: 1050 }, { n: "Githeri", p: 1050 }, { n: "Baked Beans Karai", p: 1050 }
            ]},
            { name: "RICE & SALADS", items: [
                { n: "Plain Rice", p: 250 }, { n: "Jeera Rice", p: 300 }, { n: "Vegetable Rice", p: 400 }, { n: "Kitchiri Set", p: 2500 }, { n: "Gulab Salad", p: 400 }, { n: "Kachumbari", p: 300 }
            ]}
        ]
    },
    { 
        name: "NON-VEG MAINS", icon: "drumstick", 
        sections: [
            { name: "CHICKEN (WITH BONES)", items: [
                { n: "Chicken Mari Methi/Palak", sizes: { "Half": 950, "Full": 1600 } }, { n: "Chicken Malai Tawa", sizes: { "Half": 950, "Full": 1600 } }, { n: "Chicken Paka", sizes: { "Half": 1000, "Full": 1700 } }, { n: "Butter Chicken", sizes: { "Half": 1000, "Full": 1700 } }, { n: "Chicken Tikka Special", sizes: { "Half": 1000, "Full": 1700 } }, { n: "Chicken Kyenyeji", sizes: { "Full": 1800 } }, { n: "Chicken Pousin (+Chips)", sizes: { "Half": 1000, "Full": 1700 } }
            ]},
            { name: "CHICKEN (BONELESS)", items: [
                { n: "Chicken Mari Methi (Boneless)", p: 950 }, { n: "Chicken Paka (Boneless)", p: 1050 }, { n: "Butter Chicken (Boneless)", p: 1050 }, { n: "Chicken Tikka Butter Curry", p: 1050 }
            ]},
            { name: "FISH & MUTTON", items: [
                { n: "Fish Masala", sizes: { "Half": 1400, "Full": 2250 } }, { n: "Fish Jawar Style", sizes: { "Half": 1600, "Full": 2700 } }, { n: "Mutton Khima Masala", sizes: { "Qtr": 750, "Half": 1300, "Full": 2200 } }, { n: "Mutton Karai", sizes: { "Half": 1300, "Full": 2200 } }
            ]},
            { name: "PRAWNS (QUEEN/KING)", items: [
                { n: "Prawns Masala (Queen)", sizes: { "Qtr": 1300, "Half": 2000, "Full": 3800 } }, { n: "Prawns Masala (King)", sizes: { "Half": 3000, "Full": 6000 } }
            ]}
        ]
    },
    { 
        name: "CHINESE", icon: "sun", 
        sections: [{ name: "SPECIALS", items: [
            { n: "Spring Rolls (4 Pcs)", p: 300 }, { n: "Chilly Chicken", p: 1050 }, { n: "Chilli Fish", p: 1300 }, { n: "Chilli Paneer", p: 750 }, { n: "Rice Veg", p: 400 }, { n: "Egg Fried Rice", p: 450 }
        ]}]
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
        sections: [{ name: "BIRYANI", items: [
            { n: "Veg Biriyani", p: 2850 }, { n: "Paneer Biriyani", p: 3000 }, { n: "Mutton Biriyani", p: 3000 }, { n: "Chicken Biriyani", p: 3000 }, { n: "Fish Biriyani", p: 3000 }
        ]}]
    },
    { 
        name: "NAAN", icon: "circle-dot", 
        sections: [{ name: "NAANS (Min 5)", items: [
            { n: "Plain Naan", p: 150 }, { n: "Butter Naan", p: 150 }, { n: "Garlic Naan", p: 150 }, { n: "Turbo Naan", p: 150 }, { n: "Kila Kitu Naan", p: 150 }
        ]}]
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

    if (q.length === 0) {
        // RESET: Restore original spacing and tab view
        const activeBtn = document.querySelector('.nav-btn.active');
        const activeId = activeBtn.getAttribute('onclick').match(/'([^']+)'/)[1];
        
        allMainBlocks.forEach(block => {
            block.style.display = (block.id === activeId) ? 'block' : 'none';
            block.style.padding = "15px"; // Restore main padding
        });

        allWrappers.forEach(w => {
            w.style.display = 'block';
            w.style.margin = "0 0 12px 0"; // Restore original margin
            w.style.boxShadow = "var(--shadow)";
            const header = w.querySelector('.category-header');
            if (header) header.style.display = 'flex';
        });

        allCards.forEach(c => c.style.display = 'flex');
        document.querySelectorAll('.category-content').forEach(c => c.classList.remove('active'));
        return;
    }

    // SEARCH MODE: Tighten everything up
    allMainBlocks.forEach(block => {
        block.style.display = 'block';
        block.style.padding = "0 15px"; // Remove vertical padding during search
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
            wrapper.style.margin = "0"; // KILL THE GAP
            wrapper.style.boxShadow = "none"; // Clean look for list
            wrapper.style.background = "transparent";
            if (content) {
                content.classList.add('active');
                content.style.padding = "0"; // Remove internal padding
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
    lucide.createIcons(); // Refresh icons for the notes
}

function updateComment(index, val) { cart[index].comment = val; }

function placeOrder() {
    const name = document.getElementById('cust-name').value;
    const pax = document.getElementById('cust-people').value || "1";
    if(!name) {
        document.getElementById('cust-name').style.border = "2px solid red";
        return alert("Please enter your name!");
    }
    
    let msg = `*USC PREMIUM ORDER*%0a*Customer:* ${name}%0a*Pax:* ${pax}%0a%0a`;
    cart.forEach(item => {
        msg += `✅ ${item.qty}x ${item.name} ${item.size ? `(${item.size})` : ''}%0a`;
        if(item.comment) msg += `   _Note: ${item.comment}_%0a`;
    });
    msg += `%0a*Total: ${document.getElementById('modal-total').innerText}*`;
    window.open(`https://wa.me/254722850525?text=${msg}`);
}

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