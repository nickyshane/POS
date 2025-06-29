import styles from './component.module.css';


export default function Main(root) {
    root.innerHTML = `
        <div class="${styles['left-side']}">
            <div class="order-summary">
                <div class="${styles['order-header']}">
                    <p>NAME</p>
                    <p>SIZE</p>
                    <p>PRICE</p>
                    <p>QTY</p>
                    <p>SUBTOTAL</p>
                </div>
                <div id="summary"></div>
            </div>
            <div class="${styles['total-summary']}">
                <h1>TOTAL: <span id="summary-total"></span></h1>
            </div>
        </div>
        <div class="${styles['right-side']}">
            <div class="${styles['inside-container']}">
                <p>Payment Method</p>
                <label><input type="radio" name="method" value="Cash" checked>Cash</label>
                <label><input type="radio" name="method" value="Card">Card</label>
                <label><input type="radio" name="method" value="EWallet">E Wallet</label>

                <p>Discount</p>
                <label><input type="radio" name="discount" value="Senior">Senior</label>
                <label><input type="radio" name="discount" value="PWD">PWD</label>
            </div>
        </div>
    `;

    root.className = styles['container']
}