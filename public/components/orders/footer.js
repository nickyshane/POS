import styles from './component.module.css';

export default function Footer(root) {
    root.innerHTML = `
        <a href="/"> Home </a>
        <a href="/products"> Products Inventory </a>
        <a href="/supplies"> Raw Supplies Inventory </a>
    `;

    root.className = styles['footer'];
}