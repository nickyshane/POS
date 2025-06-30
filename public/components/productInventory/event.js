import styles from './component.module.css';
import axios from 'axios';

export default async function Events() {
    const mainContent = document.querySelector('#products-inventory tbody');
    const buttons = document.querySelectorAll(`.${styles['menu-item']}`);

    const addProductBtn = document.getElementById('add-product');
    const modal = document.querySelector(`.${styles.modal}`);
    const cancelBtn = document.querySelector('#cancel-add');
    const form = document.querySelector('#add-product-form');
    
    addProductBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    cancelBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        form.reset(); // Optional: Reset the form
    });

    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent page reload

        // Get values from form
        const formData = new FormData(form);
        const data = {
            image: formData.get('image'),
            name: formData.get('name'),
            price: parseFloat(formData.get('price')),
            category: formData.get('category'),
            small: parseInt(formData.get('small')) || 0,
            medium: parseInt(formData.get('medium')) || 0,
            large: parseInt(formData.get('large')) || 0
        };

        try {
            // TODO: Replace with your actual API endpoint
            await axios.post('http://localhost:4000/v1/product', data, {
                headers: {
                    "Content-Type": "application/json",
                    "apikey": "pos"
                }
            });

            alert('Product added!');
            modal.style.display = 'none';
            form.reset();
            window.app.pushRoute("/products")
            // Optional: Refresh inventory table here
        } catch (error) {
            console.error('Error saving product:', error);
            alert('Failed to add product');
        }
    });
        buttons.forEach((button) => {
            button.addEventListener('click', async function() {
                buttons.forEach(btn => btn.classList.remove(styles['active']));
    
                button.classList.add(styles['active']);
    
                const type = button.getAttribute('data-type');
    
                mainContent.innerHTML = "";
    
                await populateTable(type);
            });
        });
    
    await populateTable('chicken');
    
    const button = document.getElementById("add-product");

    button.addEventListener('click', function() {

    })


}

// async function populateTable(type) {
//     const productData = await axios.get(
//         `http://localhost:4000/v1/product/stocks/${type}`, {
//             headers: {
//                 "Content-Type": "application/json",
//                 "apikey": "pos"
//             }
//         }
//     )

//     const dataArray = productData.data.data;
//     const tableBody = document.querySelector('#products-inventory tbody');
//     tableBody.innerHTML = ''; // Clear existing rows

//     for (const item of dataArray) {
//         const row = document.createElement('tr');

//         // Extract quantities from item.stocks
//         let smallQty = 0;
//         let mediumQty = 0;
//         let largeQty = 0;

//         for (const stock of item.stocks) {
//             smallQty = stock.small || 0;
//             mediumQty = stock.medium || 0;
//             largeQty = stock.large || 0;
//         }

//         // Create cells
//         const nameCell = document.createElement('td');
//         nameCell.textContent = item.name;

//         const priceCell = document.createElement('td');
//         priceCell.textContent = `₱${parseFloat(item.price).toFixed(2)}`;

//         const smallCell = document.createElement('td');
//         smallCell.textContent = smallQty;

//         const mediumCell = document.createElement('td');
//         mediumCell.textContent = mediumQty;

//         const largeCell = document.createElement('td');
//         largeCell.textContent = largeQty;

//         // Append cells to row
//         row.appendChild(nameCell);
//         row.appendChild(priceCell);
//         row.appendChild(smallCell);
//         row.appendChild(mediumCell);
//         row.appendChild(largeCell);

//         // Append row to table body
//         tableBody.appendChild(row);
//     }

// }

// async function populateTable(type) {
//     const productData = await axios.get(
//         `http://localhost:4000/v1/product/stocks/${type}`, {
//             headers: {
//                 "Content-Type": "application/json",
//                 "apikey": "pos"
//             }
//         }
//     );

//     const dataArray = productData.data.data;
//     const tableBody = document.querySelector('#products-inventory tbody');
//     tableBody.innerHTML = ''; // Clear existing rows

//     for (const item of dataArray) {
//         const row = document.createElement('tr');

//         // Default quantities
//         let smallQty = 0;
//         let mediumQty = 0;
//         let largeQty = 0;

//         if (Array.isArray(item.stocks) && item.stocks.length > 0) {
//             const stock = item.stocks[0];
//             smallQty = stock.small || 0;
//             mediumQty = stock.medium || 0;
//             largeQty = stock.large || 0;
//         }

//         // Create and fill cells
//         const nameCell = document.createElement('td');
//         nameCell.textContent = item.name;

//         const priceCell = document.createElement('td');
//         priceCell.textContent = `₱${parseFloat(item.price).toFixed(2)}`;

//         const smallCell = document.createElement('td');
//         smallCell.textContent = smallQty;

//         const mediumCell = document.createElement('td');
//         mediumCell.textContent = mediumQty;

//         const largeCell = document.createElement('td');
//         largeCell.textContent = largeQty;

//         const editCell = document.createElement('td');
//         const editBtn = document.createElement('button');
//         editBtn.textContent = 'Edit';
//         editBtn.classList.add('edit-btn');
//         editBtn.addEventListener('click', () => {
//             if (editBtn.textContent === 'Edit') {
//                 // Make fields editable
//                 smallCell.innerHTML = `<input type="number" value="${smallQty}" min="0">`;
//                 mediumCell.innerHTML = `<input type="number" value="${mediumQty}" min="0">`;
//                 largeCell.innerHTML = `<input type="number" value="${largeQty}" min="0">`;
//                 editBtn.textContent = 'Save';
//             } else {
//                 // Save values and switch back to text
//                 const smallInput = smallCell.querySelector('input');
//                 const mediumInput = mediumCell.querySelector('input');
//                 const largeInput = largeCell.querySelector('input');

//                 const updatedSmall = parseInt(smallInput.value) || 0;
//                 const updatedMedium = parseInt(mediumInput.value) || 0;
//                 const updatedLarge = parseInt(largeInput.value) || 0;

//                 smallCell.textContent = updatedSmall;
//                 mediumCell.textContent = updatedMedium;
//                 largeCell.textContent = updatedLarge;

//                 editBtn.textContent = 'Edit';

//                 // Optionally: send update to server here
//                 console.log('Saving...', {
//                     productId: item.id,
//                     small: updatedSmall,
//                     medium: updatedMedium,
//                     large: updatedLarge
//                 });
//             }
//         });

//         editCell.appendChild(editBtn);

//         row.appendChild(nameCell);
//         row.appendChild(priceCell);
//         row.appendChild(smallCell);
//         row.appendChild(mediumCell);
//         row.appendChild(largeCell);
//         row.appendChild(editCell);

//         tableBody.appendChild(row);
//     }
// }

// async function populateTable(type) {
//     const productData = await axios.get(
//         `http://localhost:4000/v1/product/stocks/${type}`, {
//             headers: {
//                 "Content-Type": "application/json",
//                 "apikey": "pos"
//             }
//         }
//     );

//     const dataArray = productData.data.data;
//     const tableBody = document.querySelector('#products-inventory tbody');
//     tableBody.innerHTML = ''; // Clear existing rows

//     for (const item of dataArray) {
//         const row = document.createElement('tr');

//         // Default stock values
//         let smallQty = 0;
//         let mediumQty = 0;
//         let largeQty = 0;

//         if (Array.isArray(item.stocks) && item.stocks.length > 0) {
//             const stock = item.stocks[0];
//             smallQty = stock.small || 0;
//             mediumQty = stock.medium || 0;
//             largeQty = stock.large || 0;
//         }

//         // Create cells
//         const nameCell = document.createElement('td');
//         nameCell.textContent = item.name;

//         const priceCell = document.createElement('td');
//         priceCell.textContent = `₱${parseFloat(item.price).toFixed(2)}`;

//         const smallCell = document.createElement('td');
//         smallCell.textContent = smallQty;

//         const mediumCell = document.createElement('td');
//         mediumCell.textContent = mediumQty;

//         const largeCell = document.createElement('td');
//         largeCell.textContent = largeQty;

//         // Create edit/save button
//         const editCell = document.createElement('td');
//         const editBtn = document.createElement('button');
//         editBtn.textContent = 'Edit';
//         editBtn.classList.add('edit-btn');

//         editBtn.addEventListener('click', async () => {
//             if (editBtn.textContent === 'Edit') {
//                 // Convert to inputs
//                 priceCell.innerHTML = `<input type="number" value="${smallQty}" min="0">`;
//                 smallCell.innerHTML = `<input type="number" value="${smallQty}" min="0">`;
//                 mediumCell.innerHTML = `<input type="number" value="${mediumQty}" min="0">`;
//                 largeCell.innerHTML = `<input type="number" value="${largeQty}" min="0">`;
//                 editBtn.textContent = 'Save';
//             } else {
//                 // Get input values
//                 const smallInput = smallCell.querySelector('input');
//                 const mediumInput = mediumCell.querySelector('input');
//                 const largeInput = largeCell.querySelector('input');

//                 const updatedSmall = parseInt(smallInput.value) || 0;
//                 const updatedMedium = parseInt(mediumInput.value) || 0;
//                 const updatedLarge = parseInt(largeInput.value) || 0;

//                 try {
//                     // Send PATCH request to update stock
//                     await axios.patch('http://localhost:4000/v1/product/stock', {
//                         product_id: item.id,
//                         small: updatedSmall,
//                         medium: updatedMedium,
//                         large: updatedLarge
//                     }, {
//                         headers: {
//                             "Content-Type": "application/json",
//                             "apikey": "pos"
//                         }
//                     });

//                     // Show updated values
//                     smallCell.textContent = updatedSmall;
//                     mediumCell.textContent = updatedMedium;
//                     largeCell.textContent = updatedLarge;

//                     // Reset button
//                     editBtn.textContent = 'Edit';

//                     // Optional: show success message
//                     alert(`Stock updated for "${item.name}"!`);
//                 } catch (error) {
//                     console.error('Failed to update stock:', error);
//                     alert('Error updating stock. Please try again.');
//                 }
//             }
//         });

//         editCell.appendChild(editBtn);

//         // Append all cells
//         row.appendChild(nameCell);
//         row.appendChild(priceCell);
//         row.appendChild(smallCell);
//         row.appendChild(mediumCell);
//         row.appendChild(largeCell);
//         row.appendChild(editCell);

//         tableBody.appendChild(row);
//     }
// }

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

