import styles from './component.module.css';
import Logo from '../../icons/logo.png';

export default function Header(root) {
    root.innerHTML = `
        <div class="${styles['logo']}">
        <a href="/">
            <img src="${Logo}" alt="UnliWings Logo" />
        </a>
        <div class="${styles['brand']}">
            <span class="${styles['u']}">Unli</span>
            <span class="${styles['w']}">Wings</span>
        </div>
        </div>
        <h1>ORDERS</h1>
    `;

    root.className = styles['header'];
}