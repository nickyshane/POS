import styles from './component.module.css';

export default function Footer(root) {
    root.innerHTML = `
        <button id="place-order">Place Order</button>
    `;

    root.className = styles['footer'];
}