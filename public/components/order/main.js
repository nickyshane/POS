import styles from './component.module.css';
import Chicken from '../../icons/chickens.jpg';
import Fries from '../../icons/fries.jpg';
import Pizza from '../../icons/pizza.jpg';
import Drinks from '../../icons/drinks.jpg';

export default function Main(root) {
    root.innerHTML = `
        <aside class="${styles['sidebar']}">
            <ul class="${styles['menu']}">
            <li class="${styles['menu-item']}">
                <div class="abutton ${styles['active']}" data-type="chicken">
                <img src="${Chicken}" alt="Chickens" />
                <span>chickens</span>
                </div>
            </li>
            <li class="${styles['menu-item']}">
                <div class="abutton" data-type="fries">
                <img src="${Fries}" alt="Fries" />
                <span>Fries</span>
                </div>
            </li>
            <li class="${styles['menu-item']}">
                <div class="abutton" data-type="pizza">
                <img src="${Pizza}" alt="Pizza" />
                <span>Pizza</span>
                </div>
            </li>
            <li class="${styles['menu-item']}">
                <div class="abutton" data-type="drinks">
                <img src="${Drinks  }" alt="Drinks" />
                <span>Drinks</span>
                </div>
            </li>
            </ul>
        </aside>

        <main class="main-content" id="main-content"></main>
    `;

    root.className = styles['container']
}