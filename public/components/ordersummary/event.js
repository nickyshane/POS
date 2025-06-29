import styles from './component.module.css';
import axios from 'axios';

export default function Events() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = localStorage.getItem('cartTotal') || '0.00';
    const summaryContainer = document.getElementById('summary');
    const placeOrder = document.getElementById('place-order');

    let content = '';
    cart.forEach(item => {
        content += `
            <div class=${styles['orders']}>
                <p style="width: 100px;">${item.name}</p>
                <p>${item.size}</p>
                <p>₱${item.unitPrice}.00</p>
                <p>${item.qty}</p>
                <p>₱${item.total}.00</p>
            </div>
        `;
        //document.getElementById('summary-total').textContent = `₱${total}`;
    });

    summaryContainer.innerHTML = content;
    document.getElementById('summary-total').textContent = `₱${total}`;

    placeOrder.addEventListener('click', async function() {
        const selectedPayment = document.querySelector('input[name="method"]:checked');
        const selectedChoice = document.querySelector('input[name="order-type"]:checked');

        const response = await axios.post(`http://localhost:4000/v1/order/`, {
            cart: cart,
            total: total,
            order_type: selectedChoice.value,
            payment_method: selectedPayment.value
        }, {
            headers: {
                'Content-Type': 'application/json',
                'apikey': 'pos'
            }
        });
        localStorage.removeItem('cart');
        localStorage.removeItem('cartTotal');

        window.app.pushRoute('/')
    })
}