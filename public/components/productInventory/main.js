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
                <div class="search">
                    <button id="add-product">Add Product</button>
                </div>
                <table class="${styles['table']} "id="products-inventory" border="1">
                    <thead>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>SMALL</th>
                        <th>MEDIUM</th>
                        <th>LARGE</th>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </main>

        <div class="${styles.modal}">
            <div class="${styles['modal-overlay']}">
                <div class="${styles['modal-content']}">
                    <h2>Add Product</h2>
                    <form id="add-product-form" class="${styles['form']}">
                        <label>
                            Image URL:
                            <input type="text" name="image" />
                        </label>
                        <label>
                            Name:
                            <input type="text" name="name" required />
                        </label>
                        <label>
                            Price:
                            <input type="number" name="price" step="0.01" min="0" required />
                        </label>
                        <label>
                            Category:
                            <input type="text" name="category" required />
                        </label>
                        <label>
                            Small:
                            <input type="number" name="small" min="0" required />
                        </label>
                        <label>
                            Medium:
                            <input type="number" name="medium" min="0" required />
                        </label>
                        <label>
                            Large:
                            <input type="number" name="large" min="0" required />
                        </label>

                        <div class="${styles['modal-actions']}">
                            <button type="submit">Save</button>
                            <button type="button" id="cancel-add">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;

    root.className = styles['container']
}