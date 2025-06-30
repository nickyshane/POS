import styles from './component.module.css';
import axios from 'axios';

export default async function Events() {
    const mainContent = document.querySelector('#products-supp-inventory tbody');
    const buttons = document.querySelectorAll(`.${styles['menu-item']}`);
    
        buttons.forEach((button) => {
            button.addEventListener('click', async function() {
                buttons.forEach(btn => btn.classList.remove(styles['active']));
    
                button.classList.add(styles['active']);
    
                const type = button.getAttribute('data-type');
    
                mainContent.innerHTML = "";
    
                await populateInvContainer(type);
    
                const menuItems = document.querySelectorAll(`.${styles['menu-box']}`);

            });
        });
    
    await populateInvContainer('ingredient_stock')

}

async function populateInvContainer(type) {
    const supplyData = await axios.get(
        `http://localhost:4000/v1/inventory/${type}`, {
            headers: {
                "Content-Type": "application/json",
                "apikey": "pos"
            }
        }
    );

    const dataArray = supplyData.data.data;
    console.log(dataArray)
    const tableBody = document.querySelector('#products-supp-inventory tbody');
    tableBody.innerHTML = '';

    for (const item of dataArray) {
        const row = document.createElement('tr');

        // Default values
        let smallQty = 0, mediumQty = 0, largeQty = 0, stockId = null;
        if (Array.isArray(item.stocks) && item.stocks.length > 0) {
            const stock = item.stocks[0];
            smallQty = stock.small || 0;
            mediumQty = stock.medium || 0;
            largeQty = stock.large || 0;
            stockId = stock.id; // use this for patch
        }

        const price = parseFloat(item.price).toFixed(2);

        // Create cells
        const nameCell = document.createElement('td');
        nameCell.textContent = item.Name;

        const stockCell = document.createElement('td');
        stockCell.textContent = `${item.Stock_Level}`;

        const unitCell = document.createElement('td');
        unitCell.textContent = item.Units;

        const priceCell = document.createElement('td');
        priceCell.textContent = item.Price;

        const supplierCell = document.createElement('td');
        supplierCell.textContent = item.Supplier;

        const categoryCell = document.createElement('td');
        categoryCell.textContent = item.Category

        // Edit button cell
        const editCell = document.createElement('td');
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');

        editBtn.addEventListener('click', async () => {
            if (editBtn.textContent === 'Edit') {
                // Switch to input mode
                priceCell.innerHTML = `<input type="number" value="${price}" min="0" step="0.01">`;
                smallCell.innerHTML = `<input type="number" value="${smallQty}" min="0">`;
                mediumCell.innerHTML = `<input type="number" value="${mediumQty}" min="0">`;
                largeCell.innerHTML = `<input type="number" value="${largeQty}" min="0">`;
                editBtn.textContent = 'Save';
            } else {
                // Read values from inputs
                const priceInput = priceCell.querySelector('input');
                const smallInput = smallCell.querySelector('input');
                const mediumInput = mediumCell.querySelector('input');
                const largeInput = largeCell.querySelector('input');

                const updatedPrice = parseFloat(priceInput.value).toFixed(2);
                const updatedSmall = parseInt(smallInput.value) || 0;
                const updatedMedium = parseInt(mediumInput.value) || 0;
                const updatedLarge = parseInt(largeInput.value) || 0;

                try {
                    // PATCH stock
                    await axios.patch('http://localhost:4000/v1/product/stock', {
                        product_id: stockId, // this is from item.stocks[0].id
                        small: updatedSmall,
                        medium: updatedMedium,
                        large: updatedLarge
                    }, {
                        headers: {
                            "Content-Type": "application/json",
                            "apikey": "pos"
                        }
                    });

                    // PATCH price
                    await axios.patch('http://localhost:4000/v1/product/', {
                        product_id: item.id,
                        price: updatedPrice
                    }, {
                        headers: {
                            "Content-Type": "application/json",
                            "apikey": "pos"
                        }
                    });

                    // Reset cells
                    priceCell.textContent = `₱${updatedPrice}`;
                    smallCell.textContent = updatedSmall;
                    mediumCell.textContent = updatedMedium;
                    largeCell.textContent = updatedLarge;

                    editBtn.textContent = 'Edit';
                    alert(`Stock & price updated for "${item.name}"!`);
                } catch (error) {
                    console.error('Failed to update:', error);
                    alert('Error saving. Try again.');
                }
            }
        });

        editCell.appendChild(editBtn);

        // Append cells to row
        row.appendChild(nameCell);
        row.appendChild(stockCell);
        row.appendChild(unitCell);
        row.appendChild(priceCell);
        row.appendChild(supplierCell);
        row.appendChild(categoryCell);
        row.appendChild(editCell);

        tableBody.appendChild(row);
    }

}

async function populateTable(type) {
    const productData = await axios.get(
        `http://localhost:4000/v1/product/stocks/${type}`, {
            headers: {
                "Content-Type": "application/json",
                "apikey": "pos"
            }
        }
    );

    const dataArray = productData.data.data;
    const tableBody = document.querySelector('#products-inventory tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    for (const item of dataArray) {
        const row = document.createElement('tr');

        // Default values
        let smallQty = 0, mediumQty = 0, largeQty = 0, stockId = null;
        if (Array.isArray(item.stocks) && item.stocks.length > 0) {
            const stock = item.stocks[0];
            smallQty = stock.small || 0;
            mediumQty = stock.medium || 0;
            largeQty = stock.large || 0;
            stockId = stock.id; // use this for patch
        }

        const price = parseFloat(item.price).toFixed(2);

        // Create cells
        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;

        const priceCell = document.createElement('td');
        priceCell.textContent = `₱${price}`;

        const smallCell = document.createElement('td');
        smallCell.textContent = smallQty;

        const mediumCell = document.createElement('td');
        mediumCell.textContent = mediumQty;

        const largeCell = document.createElement('td');
        largeCell.textContent = largeQty;

        // Edit button cell
        const editCell = document.createElement('td');
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');

        editBtn.addEventListener('click', async () => {
            if (editBtn.textContent === 'Edit') {
                // Switch to input mode
                priceCell.innerHTML = `<input type="number" value="${price}" min="0" step="0.01">`;
                smallCell.innerHTML = `<input type="number" value="${smallQty}" min="0">`;
                mediumCell.innerHTML = `<input type="number" value="${mediumQty}" min="0">`;
                largeCell.innerHTML = `<input type="number" value="${largeQty}" min="0">`;
                editBtn.textContent = 'Save';
            } else {
                // Read values from inputs
                const priceInput = priceCell.querySelector('input');
                const smallInput = smallCell.querySelector('input');
                const mediumInput = mediumCell.querySelector('input');
                const largeInput = largeCell.querySelector('input');

                const updatedPrice = parseFloat(priceInput.value).toFixed(2);
                const updatedSmall = parseInt(smallInput.value) || 0;
                const updatedMedium = parseInt(mediumInput.value) || 0;
                const updatedLarge = parseInt(largeInput.value) || 0;

                try {
                    // PATCH stock
                    await axios.patch('http://localhost:4000/v1/product/stock', {
                        product_id: stockId, // this is from item.stocks[0].id
                        small: updatedSmall,
                        medium: updatedMedium,
                        large: updatedLarge
                    }, {
                        headers: {
                            "Content-Type": "application/json",
                            "apikey": "pos"
                        }
                    });

                    // PATCH price
                    await axios.patch('http://localhost:4000/v1/product/', {
                        product_id: item.id,
                        price: updatedPrice
                    }, {
                        headers: {
                            "Content-Type": "application/json",
                            "apikey": "pos"
                        }
                    });

                    // Reset cells
                    priceCell.textContent = `₱${updatedPrice}`;
                    smallCell.textContent = updatedSmall;
                    mediumCell.textContent = updatedMedium;
                    largeCell.textContent = updatedLarge;

                    editBtn.textContent = 'Edit';
                    alert(`Stock & price updated for "${item.name}"!`);
                } catch (error) {
                    console.error('Failed to update:', error);
                    alert('Error saving. Try again.');
                }
            }
        });

        editCell.appendChild(editBtn);

        // Append cells to row
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(smallCell);
        row.appendChild(mediumCell);
        row.appendChild(largeCell);
        row.appendChild(editCell);

        tableBody.appendChild(row);
    }
}

