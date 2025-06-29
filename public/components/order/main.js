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
            <div class="${styles['top']}" id="main-content"></div>
            <div class="${styles['bottom']}">
                <div id="cart" class="${styles['cart']}">
                    <h1>Your Cart</h1>
                    <div class="${styles['customize-header']}">
                        <p style="width: 100px;">NAME</p>
                        <p>PRICE</p>
                        <p>QTY</p>
                        <p>SIZE</p>
                        <p>SUBTOTAL</p>
                    </div>
                    <div id="cart-orders"></div>
                    <div id="total">
                        <p style="text-align: right; margin-right: 20px">TOTAL: <span id="total-span">0.00</span></p>
                    </div>
                    <button>Place Order</button>
                </div>
                <div id="customize-order" class="${styles['customize']}">
                    <h1>Customize Order</h1>
                    <div class="${styles['customize-header']}">
                        <p>NAME</p>
                        <p>PRICE</p>
                        <p>QTY</p>
                        <p>SIZE</p>
                    </div>
                    <div id="customize-container"></div>
                </div>
            </div>
        </main>
    `;

    root.className = styles['container']
}