import Order from "../../models/order.js";

class OrderController {
    constructor() {
        this.order = new Order();
    };

    async create(request, response) {
        try{
            const { cart, total, order_type, payment_method } = request.body || {};
            const result = await this.order.create(cart, total, order_type, payment_method);
            response.json({
                success: true,
                data: result
            });
            response.end();
        } catch(error) {
            response.json({
                success: false,
                message: error.toString()
            });
            response.end();
        };
    };

    async read(request, response) {
        try{
            const { status } = request.params || {};
            const result = await this.order.read(status);
            response.json({
                success: true,
                data: result
            });
            response.end();
        } catch(error) {
            response.json({
                success: false,
                message: error.toString()
            });
            response.end();
        };
    };

    async update(request, response) {
        try{
            const { order_id, status } = request.body || {};
            const result = await this.order.update(order_id, status);
            response.json({
                success: true,
            });
            response.end();
        } catch(error) {
            response.json({
                success: false,
                message: error.toString()
            });
            response.end();
        };
    };

    async delete(request, response) {
        try{

        } catch(error) {
            response.json({
                success: false,
                message: error.toString()
            });
            response.end();
        };
    };
};

export default OrderController;