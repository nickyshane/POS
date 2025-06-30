import styles from './component.module.css';
import axios from 'axios';

let isDoneCustomizing = true;

export default async function Events() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = localStorage.getItem('cartTotal') || '0.00';
    const cartOrders = document.getElementById('cart-orders');

    let cartContent = "";
    cart.forEach(item => {
        cartContent += `
            <div class="${styles['customize-item']}">
                <p style="width: 100px;">${item.name}</p>
                <p>₱${item.unitPrice}.00</p>
                <p>${item.qty}</p>
                <p>${item.size}</p>
                <p>₱${item.unitPrice * item.qty}.00</p>
            </div>
        `;
    })
    cartOrders.innerHTML = cartContent;
    document.getElementById('total-span').textContent = `₱${total}`;


    const mainContent = document.getElementById('main-content');

    const buttons = document.querySelectorAll(`.${styles['menu-item']}`);

    buttons.forEach((button) => {
        button.addEventListener('click', async function() {
            buttons.forEach(btn => btn.classList.remove(styles['active']));

            button.classList.add(styles['active']);

            const type = button.getAttribute('data-type');

            mainContent.innerHTML = "";

            await populateContainer(type);

            const menuItems = document.querySelectorAll(`.${styles['menu-box']}`);

            menuItems.forEach((item) => {
                item.addEventListener('click', () => {
                    if (isDoneCustomizing) {
                        const name = item.getAttribute('data-name');
                        const price = item.getAttribute('data-price');

                        populateCustomizeContainer(name, price)
                        isDoneCustomizing = false
                    } else {
                        window.alert("Please settle current order")
                    }
                });
    });
        });
    });

    await populateContainer('chicken');

    const menuItems = document.querySelectorAll(`.${styles['menu-box']}`);
    console.log(menuItems)

    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            if (isDoneCustomizing) {
                const name = item.getAttribute('data-name');
                const price = item.getAttribute('data-price');

                populateCustomizeContainer(name, price)
                isDoneCustomizing = false
            } else {
                window.alert("Please settle current order")
            }
        });
    });

    document.getElementById('place-order').addEventListener('click', function(){
        window.app.pushRoute('/summary');
    })
}

const populateCustomizeContainer = (name, price) => {
    const customizeContainer = document.getElementById('customize-container');

    function getMultiplier(size) {
            switch (size) {
                case 'S':
                    return 1;
                case 'M':
                    return 1.5;
                case 'L':
                    return 2;
                default:
                    return 1; // fallback value
            }
    };

    let content = "";

    content = `
        <div class="${styles['customize-item']}">
            <p style="width: 100px;">${name}</p>
            <p id="custom-price">₱${price}.00</p>
            <input type="number" style="width: 50px;" id="qty" value="1"/>
            <select name="size" id="size" style="width: 50px;">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
            </select>
        </div>
        <button id="confirm">Confirm Order</button>
    `;

    customizeContainer.innerHTML = content;

    const qtyInput = document.getElementById('qty');
    const sizeSelect = document.getElementById('size');
    const priceDisplay = document.getElementById('custom-price');

    sizeSelect.addEventListener('change', () => {
        const selectedSize = sizeSelect.value;
        const multiplier = getMultiplier(selectedSize);
        const updatedPrice = price * multiplier;
        priceDisplay.textContent = `₱${updatedPrice}.00`;
    });

    const confirmOrder = document.getElementById('confirm');

    confirmOrder.addEventListener('click', () => {
        const qty = qtyInput.value;
        const size = sizeSelect.value;
        const multiplier = getMultiplier(size);
        const finalPrice = price * multiplier;

        const orderCart = document.getElementById('cart-orders');

        let content = `
            <div class="${styles['customize-item']}">
                <p style="width: 100px;">${name}</p>
                <p>₱${finalPrice}.00</p>
                <p>${qty}</p>
                <p>${size}</p>
                <p>₱${finalPrice * qty}.00</p>
            </div>
        `;

        orderCart.innerHTML += content;
        customizeContainer.innerHTML = "";
        isDoneCustomizing = true;

        // Save to localStorage
        const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
        currentCart.push({
            name,
            size,
            qty: parseInt(qty),
            unitPrice: finalPrice,
            total: finalPrice * qty
        });
        localStorage.setItem('cart', JSON.stringify(currentCart));

        // Update total in localStorage
        const currentTotal = currentCart.reduce((acc, item) => acc + item.total, 0);
        localStorage.setItem('cartTotal', currentTotal.toFixed(2));

        updateCartTotal()
    })
}

// Content loader function
async function populateContainer(type) {
    const productData = await axios.get(
        `http://localhost:4000/v1/product/${type}`, {
            headers: {
                "Content-Type": "application/json",
                "apikey": "pos"
            }
        }
    )
    const dataArray = productData.data.data;

    const mainContent = document.getElementById('main-content');

    let content = "";

    for (const item of dataArray) {
            content += `
                <div class="${styles['menu-box']}" data-name="${item.name}" data-price="${item.price}">
                    <img src="${item.image || ''}" />
                    <p>${item.name}</p>
                    <p>₱${item.price}</p>
                </div>
            `;
        }

    // switch(type) {
    //     case 'chicken':
    //         content = `
    //             <div class="${styles['menu-box']}" data-name="Fried Chicken Wings" data-price="120">
    //                 <img src="${FCW}" />
    //                 <p>Fried Chicken Wings</p>
    //                 <p>₱120</p>
    //             </div>
    //             <div class="${styles['menu-box']}" data-name="Baked Bufallo Wings" data-price="150">
    //                 <img src="${BBW}" />
    //                 <p>Baked Bufallo Wings</p>
    //                 <p>₱150</p>
    //             </div>
    //             <div class="${styles['menu-box']}" data-name="BBQ Chicken Wings" data-price="150">
    //                 <img src="${BCW}" />
    //                 <p>BBQ Chicken Wings</p>
    //                 <p>₱150</p>
    //             </div>
    //             <div class="${styles['menu-box']}" data-name="Dry Rub Chicken Wings" data-price="150">
    //                 <img src="${DRCW}" />
    //                 <p>Dry Rub Chicken Wings</p>
    //                 <p>₱150</p>
    //             </div>
    //             <div class="${styles['menu-box']}" data-name="Honey-Sriracha Chicken Wings" data-price="160">
    //                 <img src="${HSCW}" />
    //                 <p>Honey-Sriracha Chicken Wings</p>
    //                 <p>₱160</p>
    //             </div>
    //             <div class="${styles['menu-box']}" data-name="Lemon Pepper Chicken Wings" data-price="150">
    //                 <img src="${LPW}" />
    //                 <p>Lemon Pepper Chicken Wings</p>
    //                 <p>₱150</p>
    //             </div>
    //         `;
    //         break;
    //     case 'fries':
    //         content = `
    //             <div class="${styles['menu-box']}" data-name="Cheese Fries" data-price="110">
    //                 <img src="" />
    //                 <p>Cheese Fries</p>
    //                 <p>₱110</p>
    //             </div>
    //             <div class="${styles['menu-box']}" data-name="Baked Belgian Fries" data-price="90">
    //                 <img src="" />
    //                 <p>Baked Belgian Fries</p>
    //                 <p>₱90</p>
    //             </div>
    //             <div class="${styles['menu-box']}" data-name="Garlic Fries" data-price="100">
    //                 <img src="" />
    //                 <p>Garlic Fries</p>
    //                 <p>₱100</p>
    //             </div>
    //             <div class="${styles['menu-box']}" data-name="Standard Cut" data-price="70">
    //                 <img src="" />
    //                 <p>Standard Cut</p>
    //                 <p>₱70</p>
    //             </div>
    //             <div class="${styles['menu-box']}" data-name="Sweet Potato Fries" data-price="75">
    //                 <img src="" />
    //                 <p>Sweet Potato Fries</p>
    //                 <p>₱75</p>
    //             </div>
    //             <div class="${styles['menu-box']}" data-name="Truffle Fries" data-price="160">
    //                 <img src="" />
    //                 <p>Truffle Fries</p>
    //                 <p>₱160</p>
    //             </div>
    //         `;
    //         break;
    //     case 'pizza':
    //         content = `
    //             <div class="${styles['menu-box']}" data-name="Ham & Cheese" data-price="70">
    //                 <img src="" />
    //                 <p>Ham & Cheese</p>
    //                 <p>₱70</p>
    //             </div>
    //             <div class="${styles['menu-box']}" data-name="Hawaiian" data-price="80">
    //                 <img src="" />
    //                 <p>Hawaiian</p>
    //                 <p>₱80</p>
    //             </div>
    //             <div class="${styles['menu-box']}" data-name="Vegetarian" data-price="80">
    //                 <img src="" />
    //                 <p>Vegetarian</p>
    //                 <p>₱80</p>
    //             </div>
    //             <div class="${styles['menu-box']}" data-name="Peperoni" data-price="85">
    //                 <img src="" />
    //                 <p>Peperoni</p>
    //                 <p>₱85</p>
    //             </div>
    //             <div class="${styles['menu-box']}" data-name="Tomato & Olive" data-price="90">
    //                 <img src="" />
    //                 <p>Tomato & Olive</p>
    //                 <p>₱90</p>
    //             </div>
    //             <div class="${styles['menu-box']}" data-name="Pacific Veggie" data-price="100">
    //                 <img src="" />
    //                 <p>Pacific Veggie</p>
    //                 <p>₱100</p>
    //             </div>
    //         `;
    //         break;
    //     case 'drinks':
    //         content = `
    //             <div class="${styles['menu-box']}" data-name="Bottled Water" data-price="20">
    //                 <img src="" />
    //                 <p>Bottled Water</p>
    //                 <p>₱20</p>
    //             </div>
    //             <div class="${styles['menu-box']}" data-name="Coke (1.5L)" data-price="120">
    //                 <img src="" />
    //                 <p>Coke (1.5L)</p>
    //                 <p>₱120</p>
    //             </div>
    //             <div class="${styles['menu-box']}" data-name="Ice Tea (1L)" data-price="110">
    //                 <img src="" />
    //                 <p>Ice Tea (1L)</p>
    //                 <p>₱110</p>
    //             </div>
    //             <div class="${styles['menu-box']}" data-name="Orange Juice (1L)" data-price="75">
    //                 <img src="" />
    //                 <p>Orange Juice (1L)</p>
    //                 <p>₱75</p>
    //             </div>
    //             <div class="${styles['menu-box']}" data-name="Sprite (1.5L)" data-price="120">
    //                 <img src="" />
    //                 <p>Sprite (1.5L)</p>
    //                 <p>₱120</p>
    //             </div>
    //             <div class="${styles['menu-box']}" data-name="Sprite Zero" data-price="35">
    //                 <img src="" />
    //                 <p>Srite Zero</p>
    //                 <p>₱35</p>
    //             </div>
    //         `;
    //         break;
    //     default:
    //         content = `<p>Category not found.</p>`;
    // }

    mainContent.innerHTML = content;
}

function updateCartTotal() {
    const cartItems = document.querySelectorAll(`#cart-orders .${styles['customize-item']}`);
    let total = 0;

    cartItems.forEach(item => {
        const totalCell = item.children[4]; // 5th child contains the total price
        const text = totalCell.textContent.replace(/[₱,]/g, '').trim(); // Remove ₱ and commas
        total += parseFloat(text);
    });

    document.getElementById('total-span').textContent = `₱${total.toFixed(2)}`;
}