import styles from './component.module.css';
import Chicken from '../../icons/chickens.jpg';
import Fries from '../../icons/fries.jpg';
import Pizza from '../../icons/pizza.jpg';
import Drinks from '../../icons/drinks.jpg';

export default function Main(root) {
    root.innerHTML = `
        <aside class="${styles['sidebar']}">
            <ul class="${styles['menu']}">
            <li class="${styles['menu-item']} ${styles['active']}" data-type="chicken">
                <div class="abutton">
                <img src="${Chicken}" alt="Chickens" />
                <span>chickens</span>
                </div>
            </li>
            <li class="${styles['menu-item']}" data-type="fries">
                <div class="abutton">
                <img src="${Fries}" alt="Fries" />
                <span>Fries</span>
                </div>
            </li>
            <li class="${styles['menu-item']}" data-type="pizza">
                <div class="abutton">
                <img src="${Pizza}" alt="Pizza" />
                <span>Pizza</span>
                </div>
            </li>
            <li class="${styles['menu-item']}" data-type="drinks">
                <div class="abutton">
                <img src="${Drinks  }" alt="Drinks" />
                <span>Drinks</span>
                </div>
            </li>
            </ul>
        </aside>

        <main class="${styles['main-content']}">
            <div class="${styles['top']}"></div>
            <div class="bottom">
                <div class="search"></div>
                <table class="${styles['table']} "id="products-inventory" border="1">
                    <thead>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>SMALL</th>
                        <th>MEDIUM</th>
                        <th>LARGE</th>
                    </thead>
                    <tbody></tbody>
                <table>
            </div>
        </main>
    `;

    root.className = styles['container']
}