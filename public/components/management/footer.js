import styles from './component.module.css';

export default function Footer(root) {
    root.innerHTML = `
        <a href="/orders"> Orders </a> |
        <a href="/products"> Product Inventory </a> |
        <a href="/supplies"> Raw Supplies Inventory </a>
    `;

    root.className = styles['footer'];
}