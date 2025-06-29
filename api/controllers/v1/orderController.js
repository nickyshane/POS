import Order from "../../models/order";

class OrderController {
    constructor() {
        this.order = new Order();
    };

    async create(request, response) {
        try{

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