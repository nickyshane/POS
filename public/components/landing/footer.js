import styles from './component.module.css';

export default function Footer(root) {
    root.innerHTML = `
        <a href=""> Menu </a> |
        <a href=""> Order </a>|
        <a href=""> Inventory </a>
    `;

    root.className = styles['footer'];
}