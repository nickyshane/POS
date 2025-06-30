import styles from './component.module.css';
import axios from 'axios';

export default async function Events() {
    const container = document.getElementById('order-pending-container');
    const container1 = document.getElementById('order-progressing-container');
    const container2 = document.getElementById('order-completed-container');

    await populateContainers('pending', container);
    await populateContainers('progressing', container1);
    await populateContainers('completed', container2);
}

async function populateContainers(status, container) {
    const response = await axios.get(
        `http://localhost:4000/v1/order/${status}`,
        {
            headers: {
                "Content-Type": "application/json",
                "apikey": "pos"
            }
        }
    );

    const dataArray = response.data.data;
    console.log(dataArray);

    container.innerHTML = ''; // Clear previous content

    for (const data of dataArray) {
        const orderBox = document.createElement('div');
        orderBox.className = styles['order-box'];

        const id = data.id;
        const items = data.items || [];
        const total = data.total_amount || 0;
        const createdAt = new Date(data.order_time).toLocaleString();

        let itemList = '';
        for (const item of items) {
            itemList += `<li>${item.quantity}x ${item.product_name} (${item.size}) - ₱${(item.price * item.quantity).toFixed(2)}</li>`;
        }

        orderBox.innerHTML = `
            <h4>Order #${id}</h4>
            <ul class="${styles['ul']}">${itemList}</ul>
            <p><strong>Total:</strong> ₱${parseFloat(total).toFixed(2)}</p>
            <p><strong>Time:</strong> ${createdAt}</p>
            <p>Status: 
                <select class="status-dropdown" data-id="${id}">
                    <option value="pending" ${data.status === 'pending' ? 'selected' : ''}>Pending</option>
                    <option value="progressing" ${data.status === 'progressing' ? 'selected' : ''}>Progressing</option>
                    <option value="completed" ${data.status === 'completed' ? 'selected' : ''}>Completed</option>
                </select>
            </p>
        `;

        container.appendChild(orderBox); // Insert into DOM

        // Attach listener after insertion
        const dropdown = orderBox.querySelector('.status-dropdown');
        dropdown.addEventListener('change', async function () {
            const orderId = this.getAttribute('data-id');
            const newStatus = this.value;

            try {
                await axios.patch(`http://localhost:4000/v1/order/status`, {
                    order_id: orderId,
                    status: newStatus
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        "apikey": "pos"
                    }
                });
                window.app.pushRoute("/orders");
            } catch (error) {
                console.error("Failed to update order status:", error);
                alert("Error updating status.");
            }
        });
    }
}
