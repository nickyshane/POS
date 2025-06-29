import connection from "../core/database.js";

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
                const [orderDetails,] = await this.db.execute(
                    `INSERT INTO order_items (order_id, product_name, quantity, size, price) VALUES (?, ?, ?, ?, ?)`,
                    [orderId, item.name, item.qty, item.size, item.unitPrice]
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