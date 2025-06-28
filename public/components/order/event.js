import styles from './component.module.css';

export default function Events() {
    const mainContent = document.getElementById('main-content');

    const buttons = document.querySelectorAll('.abutton');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove(styles['active']));

            button.classList.add(styles['active']);

            const type = button.getAttribute('data-type');

            mainContent.innerHTML = "";

            populateContainer(type)
        });
    });

    populateContainer('chicken')
}

// Content loader function
const populateContainer = (type) => {
    const mainContent = document.getElementById('main-content');

    let content = "";

    switch(type) {
        case 'chicken':
            content = `
                <div class="menu-box">
                    <img src="" />
                    <p>Fried Chicken Wings</p>
                    <p>₱120</p>
                </div>
                <div class="menu-box">
                    <img src="" />
                    <p>Baked Bufallo Wings</p>
                    <p>₱150</p>
                </div>
                <div class="menu-box">
                    <img src="" />
                    <p>BBQ Chicken Wings</p>
                    <p>₱150</p>
                </div>
                <div class="menu-box">
                    <img src="" />
                    <p>Dry Rub Chicken Wings</p>
                    <p>₱150</p>
                </div>
                <div class="menu-box">
                    <img src="" />
                    <p>Honey-Sriracha Chicken Wings</p>
                    <p>₱160</p>
                </div>
                <div class="menu-box">
                    <img src="" />
                    <p>Lemon Pepper Chicken Wings</p>
                    <p>₱150</p>
                </div>
            `;
            break;
        case 'fries':
            content = `
                <h2>French Fries</h2>
                <p>Regular Fries - ₱60</p>
                <p>Cheesy Fries - ₱90</p>
            `;
            break;
        case 'pizza':
            content = `
                <h2>Pizza</h2>
                <p>Pepperoni - ₱200</p>
                <p>Hawaiian - ₱180</p>
            `;
            break;
        case 'drinks':
            content = `
                <h2>Drinks</h2>
                <p>Coke - ₱30</p>
                <p>Iced Tea - ₱40</p>
            `;
            break;
        default:
            content = `<p>Category not found.</p>`;
    }

    mainContent.innerHTML = content;
}