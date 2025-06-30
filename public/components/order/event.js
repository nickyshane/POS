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