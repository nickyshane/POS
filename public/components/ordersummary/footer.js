import styles from './component.module.css';

export default function Footer(root) {
    root.innerHTML = `
        <button>Place Order</button>
    `;

    root.className = styles['footer'];
}