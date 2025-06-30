import styles from './component.module.css';

export default function Main(root) {
    root.innerHTML = `
        <div class="${styles['left-side']}">
            <h3>Pending</h3>
            <div id="order-pending-container"></div>
        </div>
        <div class="${styles['middle-side']}">
            <h3>Progressing</h3>
            <div id="order-progressing-container"></div>
        </div>
        <div class="${styles['right-side']}">
            <h3>Completed</h3>
            <div id="order-completed-container"></div>
        </div>
    `;

    root.className = styles['container']
}