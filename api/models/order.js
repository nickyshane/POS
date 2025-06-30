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

    async read(status) {
        try {
            const orders = [];

            const [results,] = await this.db.execute(
                `SELECT * FROM orders WHERE status = ?`,
                [status]
            );
            
            for (const item of results) {
                const [itemsResult,] = await this.db.execute(
                `SELECT 
                    oi.order_id, 
                    oi.product_id, 
                    p.name AS product_name,
                    oi.quantity, 
                    oi.size, 
                    oi.price 
                 FROM order_items oi
                 JOIN products p ON oi.product_id = p.id
                 WHERE oi.order_id = ?`,
                [item.id]
            );
                orders.push({
                    ...item,
                    items: itemsResult
                })
            }
            return orders;
        } catch(error) {
            console.error("<error> order.read ", error);
            throw error;
        }
    };

    async update(orderId, status) {
        try {
            const [result,] = await this.db.execute(
                `UPDATE orders SET status = ? WHERE id = ?`,
                [status, orderId]
            );
            return result;
        } catch(error) {
            console.error("<error> order.update ", error);
            throw error;
        }
    };

    async delete() {

    };
};

export default Order;