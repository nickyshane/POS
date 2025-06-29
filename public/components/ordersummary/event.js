import styles from './component.module.css';

export default function Events() {
    document.getElementById('app').style.overflowY = "hidden";

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = localStorage.getItem('cartTotal') || '0.00';
    const summaryContainer = document.getElementById('summary');

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
}