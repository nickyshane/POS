import styles from './component.module.css';

export default function Footer(root) {
    root.innerHTML = `
        <a href="/menu"> Menu </a> |
        <a href="/order"> Order </a>|
        <a href="/management"> Management </a>
    `;

    root.className = styles['footer'];
}