import connection from "../core/database.js";
import sizeMap from "../utils/sizeMap.js";

class Order {
    constructor() {
        this.db = connection;
    }

    async create(cart, total, orderType, paymentMethod) {
        try {
            const [orderResult,] = await this.db.execute(
                `INSERT INTO orders (order_type, total_amount, payment_method) VALUES (?, ?, ?)`,
                [orderType, total, paymentMethod]
            );
            const orderId = orderResult.insertId;
            for (const item of cart) {
                const [productRow,] = await this.db.execute(
                    `SELECT id FROM products WHERE name = ? LIMIT 1`,
                    [item.name]
                );
                console.log("DEBUG: ", productRow[0].id)

                if (productRow.length === 0) continue;

                const productId = productRow[0].id;

                const [orderDetails,] = await this.db.execute(
                    `INSERT INTO order_items (order_id, product_id, quantity, size, price) VALUES (?, ?, ?, ?, ?)`,
                    [orderId, productId, item.qty, item.size, item.unitPrice]
                );

                const sizeColumn = sizeMap[item.size];

                const [deductStock] = await this.db.execute(
                    `UPDATE products_availability SET ${sizeColumn} = ${sizeColumn} - ? WHERE id = ?`,
                    [item.qty, productId]
                );
            };
            return orderId;
        } catch(error) {
            console.error("<error> order.create ", error);
            throw error;
        }
    };

    async read() {

    };

    async update() {

    };

    async delete() {

    };
};

export default Order;