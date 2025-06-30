import styles from './component.module.css';
import Image1 from '../../icons/FoodIngredients 1.png';
import Image2 from '../../icons/Drinks 1.png';
import Image3 from '../../icons/package.png';
import Image4 from '../../icons/Non-Food Consumables 1.png';

export default function Main(root) {
    root.innerHTML = `
        <aside class="${styles['sidebar']}">
            <ul class="${styles['menu']}">
            <li class="${styles['menu-item']} ${styles['active']}" data-type="ingredient_stock">
                <div class="abutton">
                <img src="${Image1}" alt="" />
                <span>Ingredient Stocks</span>
                </div>
            </li>
            <li class="${styles['menu-item']}" data-type="beverage_stock">
                <div class="abutton">
                <img src="${Image2}" alt="" />
                <span>Beverage Stock</span>
                </div>
            </li>
            <li class="${styles['menu-item']}" data-type="packaging_supplies_stock">
                <div class="abutton">
                <img src="${Image3}" alt="" />
                <span>Packaging and Supplies</span>
                </div>
            </li>
            <li class="${styles['menu-item']}" data-type="non_food_consumable_stock">
                <div class="abutton">
                <img src="${Image4}" alt="" />
                <span>Non-Food Consumables</span>
                </div>
            </li>
            </ul>
        </aside>

        <main class="${styles['main-content']}">
            <div class="${styles['top']}"></div>
            <div class="bottom">
                <div class="search"></div>
                <table class="${styles['table']} "id="products-supp-inventory" border="1">
                    <thead>
                        <th>NAME</th>
                        <th>STOCK</th>
                        <th>UNIT</th>
                        <th>PRICE</th>
                        <th>SUPPLIER</th>
                        <th>CATEGORY</th>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </main>
    `;

    root.className = styles['container']
}