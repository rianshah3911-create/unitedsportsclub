const menuData = [
    {
        name: "STARTERS", icon: "zap",
        sections: [
            { type: "VEG", name: "BREAKFAST", items: [
                { n: "Egg (Per Egg)", sizes: { "Plain": 80, "Boiled": 80, "Fried": 80 } },
                { n: "Parota (4 Pcs)", p: 280 },
                { n: "Tea Masala", p: 100 },
                { n: "Special Coffee", p: 100 },
                { n: "Black Tea", p: 100 },
                { n: "Coffee", p: 100 },
                { n: "Glass Milk", p: 100 },
                { n: "Toast (1 Slice)", p: 20 },
                { n: "Mini Butter (10 Gms)", p: 100 },
                { n: "Butter (250 Gms)", p: 700 }
            ]},
            { type: "VEG", name: "SANDWICHES", items: [
                { n: "Sandwich", sizes: { "Cheese": 500, "Onion": 500, "Tomato": 500 } },
                { n: "Boiled Egg Sandwich", p: 500 },
                { n: "Plain Omelette", p: 350 },
                { n: "Spanish Omelette Sandwich (+Chips)", p: 400 }
            ]},
            { type: "VEG", name: "PANEER STARTERS", items: [
                { n: "Paneer", sizes: { "Chilly": 650, "Pousin": 650 } },
                { n: "Paneer Pokora", p: 650 },
                { n: "Paneer Tikka", p: 500 },
                { n: "Paneer Samosa (6 Pcs)", p: 300 }
            ]},
            { type: "VEG", name: "CHAPATIS", items: [
                { n: "Vegetable Chapati (+Salad)", p: 300 },
                { n: "Egg Chapati Double (+Salad)", p: 350 },
                { n: "Egg Chapati Single (+Salad)", p: 250 },
                { n: "Mutton Kheema Egg Chapati (+Salad)", p: 450 },
                { n: "Cheese Chapati (+Salad)", p: 500 },
                { n: "Cheese Corn Chapati (+Salad)", p: 550 },
                { n: "Veg Cheese Chapati (+Salad)", p: 550 },
                { n: "Paneer Chapati (+Salad)", p: 500 },
                { n: "Chicken Khima Chapati (+Salad)", p: 550 }
            ]},
            { type: "VEG", name: "BHAJIA", items: [
                { n: "Daal Bhajia (8 Pcs)", p: 400 },
                { n: "Maru Bhajia", p: 250 },
                { n: "Chilly Bhajia", p: 250 },
                { n: "Onion Bhajia", p: 250 },
                { n: "Methi Bhajia (8 Pcs)", p: 400 },
                { n: "Gota Bhajia (8 Pcs)", p: 400 },
                { n: "Egg Bhajia (3 Eggs)", p: 350 },
                { n: "Mixed Bhajia", p: 500 }
            ]},
            { type: "VEG", name: "CHIPS", items: [
                { n: "Plain Chips", p: 200 },
                { n: "Periperi Chips", p: 300 },
                { n: "Masala Chips", p: 300 },
                { n: "Pepper Chips", p: 300 },
                { n: "Pepper Dhania Chilly Chips", p: 300 },
                { n: "Pousin Chips", p: 300 }
            ]},
            { type: "VEG", name: "POTATOES", items: [
                { n: "Packed Potatoes (8 Pcs)", p: 400 },
                { n: "Bateta Vada (8 Pcs)", p: 400 },
                { n: "Mashed Potatoes", p: 350 }
            ]},
            { type: "VEG", name: "SIMA", items: [
                { n: "Brown Sima (Atta)", p: 300 },
                { n: "Jeera Sima", p: 300 },
                { n: "Butter Sima", p: 300 },
                { n: "Plain Sima", p: 150 }
            ]},
            { type: "VEG", name: "DRINKS", items: [
                { n: "Lassi", sizes: { "Sweet": 180, "Salted": 180 } },
                { n: "Raitha", p: 250 },
                { n: "Kadhi", p: 300 }
            ]},
            { type: "VEG", name: "OTHERS", items: [
                { n: "Veg Lollipop Normal (8 Pcs)", p: 450 },
                { n: "Veg Lollipop Cheese Special (8 Pcs)", p: 600 },
                { n: "Soya Veg Kebab Normal (3 Pcs)", p: 350 },
                { n: "Soya Veg Kebab Special (3 Pcs)", p: 500 },
                { n: "Gobi Pakora", p: 300 },
                { n: "Egg Plant Chilly", p: 450 },
                { n: "Chilly Baby Corn", p: 450 },
                { n: "Boiled Jugu", p: 250 },
                { n: "Veg Samosa (6 Pcs)", p: 300 },
                { n: "Cassava Pousin", p: 400 },
                { n: "Roasted Garlic", p: 100 },
                { n: "Fried Garlic", p: 100 },
                { n: "Puri (12 Pcs)", p: 360 },
                { n: "Tepla (4 Pcs)", p: 280 }
            ]},
            { type: "NON-VEG", name: "POULTRY", items: [
                { n: "Chicken Tender (Portion)", p: 850 },
                { n: "Chicken Lollipop (8 Pcs)", p: 700 },
                { n: "Chicken Wings (8 Pcs)", sizes: { "Plain": 600, "Pepper": 700, "Pousin": 700 } },
                { n: "Chicken Sausages (3 Pcs)", sizes: { "Fried": 400, "Roasted": 400 } },
                { n: "Chicken Sausages Spicy (3 Pcs)", sizes: { "Pepper": 500, "Chilly": 500, "Pousin": 500 } },
                { n: "Chicken Kebab (3 Pcs)", sizes: { "Normal": 600, "Special": 700 } },
                { n: "Chicken Mishakiki (Min 4 Skewers)", p: 400 }
            ]},
            { type: "NON-VEG", name: "MUTTON", items: [
                { n: "Mutton Kebab (3 Pcs)", p: 400 },
                { n: "Shish Kebab (3 Pcs)", p: 400 },
                { n: "Black Fried Kebab", p: 400 },
                { n: "Mutton Samosa (6 Pcs)", p: 300 },
                { n: "Mishakiki (4 Sticks Min)", p: 400 }
            ]},
            { type: "NON-VEG", name: "LAMB CHOP", items: [
                { n: "Molo Lamb Chop Grilled (Portion)", p: 1000 }
            ]},
            { type: "NON-VEG", name: "FISH (Red Snapper)", items: [
                { n: "Fish Fingers", p: 1400 },
                { n: "Fish Pakora", p: 1400 },
                { n: "Fish Chilly", p: 1400 },
                { n: "Fish Green Tawa", p: 1400 },
                { n: "Fish Foil", p: 1400 },
                { n: "Fish Tawa", p: 1450 },
                { n: "Fish in Breadcrumb", p: 1400 },
                { n: "Fish Grill", p: 1400 },
                { n: "Fish Tikka", p: 1400 },
                { n: "Fish Corrwalla", p: 1400 },
                { n: "Fish Pousin (+Salads & Chips)", p: 1450 }
            ]}
        ]
    },
    {
        name: "VEG MAINS", icon: "leaf",
        sections: [
            { name: "PANEER SPECIALTIES", items: [
                { n: "Paneer Tikka Butter", p: 1300 },
                { n: "Paneer Matar (Peas)", p: 1300 },
                { n: "Paneer Makhni", p: 1300 },
                { n: "Paneer Palak", p: 1300 },
                { n: "Paneer Methi Malai", p: 1300 },
                { n: "Paneer Bhurji", p: 1300 }
            ]},
            { name: "EGG SPECIALTIES", items: [
                { n: "Egg (3 Eggs)", sizes: { "Curry": 800, "Mari Methi": 800, "Masala": 800 } },
                { n: "Egg Bhurji (3 Eggs)", p: 800 }
            ]},
            { name: "CURRIES & DAALS", items: [
                { n: "Daal Fry", p: 800 },
                { n: "Daal Makhni", p: 800 },
                { n: "Moong (pojo) Daal", p: 800 },
                { n: "Mixed Vegetables Curry", p: 800 },
                { n: "Aloo Jeera", p: 800 },
                { n: "Aloo Methi Palak", p: 800 },
                { n: "Aloo Matra", p: 1000 },
                { n: "Bengan Bharta (oro)", p: 800 },
                { n: "Lady Fingers (Binda)", p: 800 },
                { n: "Veg Manchurian", p: 800 },
                { n: "Veg Kofta Malai", p: 800 },
                { n: "Mchicha (Bhajee)", p: 800 },
                { n: "Hutton Mix", p: 800 },
                { n: "Makai Paka", p: 1100 },
                { n: "Butter Beans", p: 1000 },
                { n: "Githeri", p: 1000 },
                { n: "Matra Masala", p: 1000 },
                { n: "Matra Methi", p: 1000 },
                { n: "Makai Masala", p: 1000 },
                { n: "Soya Veg Khima", p: 800 },
                { n: "Special Cauliflower Curry", p: 800 },
                { n: "Mushroom Foil", p: 1200 },
                { n: "Mushroom Masala", p: 1200 },
                { n: "Kitchiri", sizes: { "Potato Curry": 2500, "Kadhi": 2500 } }
            ]},
            { name: "SALADS", items: [
                { n: "Onion Extra", p: 50 },
                { n: "Plain Salad", p: 250 },
                { n: "Long Salad", p: 250 },
                { n: "Jeera Salad", p: 300 },
                { n: "Kachumbari", p: 300 },
                { n: "Gulab Salad", p: 400 }
            ]},
            { name: "RICE", items: [
                { n: "Plain Rice", p: 250 },
                { n: "Jeera Rice", p: 300 },
                { n: "Vegetable Rice", p: 400 },
                { n: "Butter Rice", p: 400 },
                { n: "Egg Fried Rice", p: 450 }
            ]}
        ]
    },
    {
        name: "NON-VEG MAINS", icon: "drumstick",
        sections: [
            { name: "CHICKEN (WITH BONES)", items: [
                { n: "Chicken Mari Methi", sizes: { "Half": 950, "Full": 1600 } },
                { n: "Chicken Palak", sizes: { "Half": 950, "Full": 1600 } },
                { n: "Chicken Jeera", sizes: { "Half": 950, "Full": 1600 } },
                { n: "Chicken Chilly", sizes: { "Half": 950, "Full": 1600 } },
                { n: "Chicken Malai Curry", sizes: { "Half": 950, "Full": 1600 } },
                { n: "Chicken Dhania", sizes: { "Half": 950, "Full": 1600 } },
                { n: "Chicken Paka", sizes: { "Half": 1000, "Full": 1700 } },
                { n: "Chicken Masala", sizes: { "Half": 950, "Full": 1600 } },
                { n: "Chicken Fry", sizes: { "Half": 950, "Full": 1600 } },
                { n: "Butter Chicken", sizes: { "Half": 1000, "Full": 1700 } },
                { n: "Chicken Breadcrumb", sizes: { "Half": 950, "Full": 1600 } },
                { n: "Chicken Wet Fry", sizes: { "Half": 950, "Full": 1600 } },
                { n: "Chicken Tikka Kienyeji", sizes: { "Half": 950, "Full": 1600 } },
                { n: "Chicken Choma Kienyeji", sizes: { "Half": 950, "Full": 1600 } },
                { n: "Chicken Tikka Special", sizes: { "Half": 1000, "Full": 1700 } },
                { n: "Chicken Kienyeji", sizes: { "Full": 1800 } },
                { n: "Chicken Khima Kofta", sizes: { "Half": 1200, "Full": 2000 } },
                { n: "Chicken Khima", sizes: { "Half": 1200, "Full": 2000 } },
                { n: "Chicken Steak (+Pepper Sauce, Salad & Chips)", sizes: { "Half": 1000, "Full": 1700 } },
                { n: "Chicken Pousin (+Chips/Salad)", sizes: { "Half": 1000, "Full": 1700 } }
            ]},
            { name: "CHICKEN (BONELESS)", items: [
                { n: "Chicken Mari Methi (Boneless)", p: 1000 },
                { n: "Chicken Palak (Boneless)", p: 1000 },
                { n: "Chicken Jeera (Boneless)", p: 1000 },
                { n: "Chicken Malai Tawa (Boneless)", p: 1000 },
                { n: "Chicken Malai Curry (Boneless)", p: 1000 },
                { n: "Chicken Paka (Boneless)", p: 1050 },
                { n: "Chicken Chilly (Boneless)", p: 1000 },
                { n: "Chicken Tikka Butter Curry", p: 1050 },
                { n: "Butter Chicken (Boneless)", p: 1050 },
                { n: "Chicken Breadcrumb (Boneless)", p: 1000 },
                { n: "Chicken Masala (Boneless)", p: 1000 },
                { n: "Chicken Tikka Kienyeji (Boneless)", p: 1000 },
                { n: "Chicken Choma Kienyeji (Boneless)", p: 1000 },
                { n: "Chicken Tikka Special (Boneless)", p: 1000 }
            ]},
            { name: "FISH (RED SNAPPER)", items: [
                { n: "Fish Masala", p: 1400 },
                { n: "Fish Paka", p: 1450 },
                { n: "Fish Khima", p: 1400 },
                { n: "Fish Mari", p: 1400 },
                { n: "Fish Methi", p: 1400 },
                { n: "Fish Palak", p: 1400 },
                { n: "Fish Jeera", p: 1400 },
                { n: "Fish Jawar Style", p: 1400 }
            ]},
            { name: "MUTTON", items: [
                { n: "Mutton Khima Masala", sizes: { "Qtr": 750, "Half": 1300, "Full": 2200 } },
                { n: "Mutton Khima Kofta", sizes: { "Qtr": 750, "Half": 1350, "Full": 2200 } },
                { n: "Mutton Palak", sizes: { "Half": 1300, "Full": 2200 } },
                { n: "Mutton Methi", sizes: { "Half": 1300, "Full": 2200 } },
                { n: "Mutton Jeera", sizes: { "Half": 1300, "Full": 2200 } },
                { n: "Mutton Masala", sizes: { "Half": 1300, "Full": 2200 } },
                { n: "Mutton Karai", sizes: { "Half": 1300, "Full": 2200 } }
            ]},
            { name: "PRAWNS", items: [
                { n: "Prawns Masala (Queen)", sizes: { "Qtr": 1300, "Half": 2000, "Full": 3800 } },
                { n: "Prawns Masala (King)", sizes: { "Half": 3000, "Full": 6000 } },
                { n: "Prawns Paka (Queen)", sizes: { "Qtr": 1300, "Half": 2000, "Full": 3800 } },
                { n: "Prawns Paka (King)", sizes: { "Half": 3000, "Full": 6000 } },
                { n: "Prawns Karai (Queen)", sizes: { "Qtr": 1300, "Half": 2000, "Full": 3800 } },
                { n: "Prawns Karai (King)", sizes: { "Half": 3000, "Full": 6000 } },
                { n: "Prawns Tawa (Queen)", sizes: { "Qtr": 1300, "Half": 2000, "Full": 3800 } },
                { n: "Prawns Tawa (King)", sizes: { "Half": 3000, "Full": 6000 } },
                { n: "Prawns Garlic Butter (Queen)", sizes: { "Qtr": 1300, "Half": 2000, "Full": 3800 } },
                { n: "Prawns Garlic Butter (King)", sizes: { "Half": 3000, "Full": 6000 } }
            ]}
        ]
    },
    {
        name: "CHAAT & KULFI", icon: "star",
        sections: [
            { name: "CHAAT", items: [
                { n: "Bhel", p: 350 },
                { n: "Dahi", p: 350 },
                { n: "Masala Dhosa", p: 500 },
                { n: "Pani Puri", p: 350 },
                { n: "Sev Puri", p: 350 },
                { n: "Uttapa", p: 500 },
                { n: "Chana Bateta", p: 450 },
                { n: "Idli Sambar", p: 400 }
            ]},
            { name: "KULFI", items: [
                { n: "Kesar Badam Pista Kulfi", p: 350 },
                { n: "Mango Kulfi", p: 300 }
            ]}
        ]
    },
    {
        name: "ITALIAN", icon: "pizza",
        sections: [
            { name: "PASTA", items: [
                { n: "Chicken Mushroom & Chick Peas Pasta", p: 700 },
                { n: "Penne Alfredo", p: 600 },
                { n: "Shrimp Pasta", p: 700 },
                { n: "Veg Pasta Red Sauce", p: 600 }
            ]},
            { name: "PIZZA", items: [
                { n: "Chicken Pizza", p: 800 },
                { n: "Margarita Pizza", p: 650 },
                { n: "Veg Pizza", p: 700 }
            ]},
            { name: "OTHER", items: [
                { n: "Crispy Eggplant Parmesan", p: 600 },
                { n: "Falafel with Hummus & Pita", p: 750 },
                { n: "Grilled Halloumi Plate", p: 750 },
                { n: "Mediterranean Garlic Butter Prawns", p: 1500 },
                { n: "Spicy Lebanese Prawns", p: 1500 },
                { n: "Lebanese Garlic Chicken Wings", p: 675 }
            ]}
        ]
    },
    {
        name: "BIRYANI", icon: "utensils",
        sections: [{ name: "BIRYANI (Order 12hrs in advance)", items: [
            { n: "Veg Biriyani", p: 2850 },
            { n: "Chicken Biriyani", p: 3000 },
            { n: "Mutton Biriyani", p: 3250 }
        ]}]
    },
    {
        name: "NAAN", icon: "circle-dot",
        sections: [{ name: "NAANS (Min 5)", items: [
            { n: "Plain Naan", p: 150 },
            { n: "Butter Naan", p: 150 },
            { n: "Garlic Naan", p: 150 },
            { n: "Methi Naan", p: 150 },
            { n: "Turbo Naan", p: 150 },
            { n: "Kila Kitu Naan", p: 150 }
        ]}]
    },
    {
        name: "KOROGA", icon: "flame",
        sections: [{ name: "KOROGA MENU (+Jiko Fee KES 400)", items: [
            { n: "Fish Koroga", sizes: { "Half": 1400, "Full": 2250 } },
            { n: "Chicken Koroga", sizes: { "Half": 950, "Full": 1600 } },
            { n: "Khima Koroga", sizes: { "Half": 1300, "Full": 2200 } },
            { n: "Mutton Koroga", sizes: { "Half": 1300, "Full": 2200 } },
            { n: "King Prawns Koroga", sizes: { "Half": 3000, "Full": 6000 } },
            { n: "Queen Prawns Koroga", sizes: { "Half": 2000, "Full": 3800 } },
            { n: "Eggs Koroga (Min 10 @ KES 80 each)", p: 800 }
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
                <div class="qty-controls">
                    <button class="qty-btn minus-btn" onclick="removeOneFromCard(this)">−</button>
                    <button class="qty-btn plus-btn" onclick="addToCart(this)">+</button>
                </div>
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
        const activeBtn = document.querySelector('.nav-btn.active');
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
        if (activeBtn) activeBtn.click();
        return;
    }

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
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ name, size, price, qty: 1, comment: "" });
    }
    updateCartUI();
}

function removeOneFromCard(btn) {
    const card = btn.closest('.food-card');
    const name = card.querySelector('.food-name').innerText;
    const size = card.querySelector('.portion-btn.active')?.innerText || "";

    const idx = cart.findIndex(i => i.name === name && i.size === size);
    if (idx === -1) return;

    if (cart[idx].qty > 1) {
        cart[idx].qty--;
    } else {
        cart.splice(idx, 1);
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
                    <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
                        <span class="cart-price">KES ${itemTotal}</span>
                        <button class="remove-item-btn" onclick="removeFromCart(${index})">×</button>
                    </div>
                </div>
                <div class="cart-item-bottom">
                    <input class="modern-input note-input"
                           placeholder="Add instructions (e.g., No onions)..."
                           oninput="updateComment(${index}, this.value)"
                           value="${item.comment}">
                </div>
            </div>`;
    });

    if (cartCount) cartCount.innerText = cart.reduce((acc, obj) => acc + obj.qty, 0);
    if (cartTotal) cartTotal.innerText = "KES " + total;
    if (modalTotal) modalTotal.innerText = "KES " + total;
    if (bar) bar.style.display = cart.length > 0 ? 'flex' : 'none';

    lucide.createIcons();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateComment(index, val) {
    cart[index].comment = val;
}

function setOrderType(btn) {
    document.querySelectorAll('.order-type-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function placeOrder() {
    const nameInput = document.getElementById('cust-name');
    const name = nameInput.value;
    const date = document.getElementById('order-date').value;
    const arrivalTime = document.getElementById('order-time').value;
    const orderTime = document.getElementById('order-time-now').value;
    const pax = document.getElementById('cust-people').value || "1";
    const finalTotal = document.getElementById('modal-total').innerText;
    const orderType = document.querySelector('.order-type-btn.active')?.innerText || "Dine In";

    if (!name) {
        nameInput.style.border = "2px solid red";
        nameInput.focus();
        return alert("Please enter your name to proceed!");
    }

    let formattedDate = "";
    if (date) {
        const d = date.split('-');
        formattedDate = `${d[2]}/${d[1]}/${d[0]}`;
    }

    const orderTypeIcon = orderType === "Takeaway" ? "🥡" : "🍽";

    let msg = `*USC PREMIUM ORDER*%0a`;
    msg += `--------------------------%0a`;
    msg += `👤 *Customer:* ${name}%0a`;
    msg += `👥 *Pax:* ${pax}%0a`;
    msg += `${orderTypeIcon} *Order Type:* ${orderType}%0a`;
    if (date) msg += `📅 *Date:* ${formattedDate}%0a`;
    if (orderTime) msg += `🕐 *Order Time:* ${orderTime}%0a`;
    if (arrivalTime) msg += `⏰ *Serving Time:* ${arrivalTime}%0a`;
    msg += `--------------------------%0a%0a`;
    msg += `*ITEMS ORDERED:*%0a`;

    cart.forEach(item => {
        msg += `✅ ${item.qty}x ${item.name} ${item.size ? `(${item.size})` : ''}%0a`;
        if (item.comment) msg += `   _Note: ${item.comment}_%0a`;
    });

    msg += `%0a💰 *Grand Total: ${finalTotal}*`;

    window.open(`https://wa.me/254722850525?text=${msg}`);
}

function toggleCart() {
    const m = document.getElementById('cart-modal');
    if (m.style.display === 'flex') {
        m.style.display = 'none';
    } else {
        m.style.display = 'flex';
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const min = String(now.getMinutes()).padStart(2, '0');
        const timeField = document.getElementById('order-time-now');
        if (timeField && !timeField.value) timeField.value = `${h}:${min}`;
        updateCartUI();
        lucide.createIcons();
    }
}

function clearCart() {
    if (confirm("Clear your entire order?")) {
        cart = [];
        updateCartUI();
        toggleCart();
    }
}

function toggleSub(id) {
    const el = document.getElementById(id);
    el.classList.toggle('active');
    if (el.classList.contains('active')) {
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

init();
