import styles from './component.module.css';
import Menu from '../../icons/menu.png';

export default function Main(root) {
    root.innerHTML = `
        <img src="${Menu}" alt="Menu Image" />
    `;

    root.className = styles['main-content'];
}