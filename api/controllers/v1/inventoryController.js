import Inventory from "../../models/inventory.js";

class InventoryController {
    constructor() {
        this.inventory = new Inventory();
    }

    async create(request, response) {
        try {
            const { type } = request.params || {};
            const { name, stock_level, units, price, supplier, category } = request.body || {};
            const result = await this.inventory.create(type, name, stock_level, units, price, supplier, category);
            response.json({
                success: true,
                result
            });
            response.end();
        } catch(error) {
            response.json({
                success: false,
                message: error.toString()
            });
            response.end();
        }
    }

    async read(request, response) {
        try {
            const { type } = request.params || {};
            const result = await this.inventory.read(type);
            response.json({
                success: true,
                data: result
            })
            
        } catch(error) {
            response.json({
                success: false,
                message: error.toString()
            });
            response.end();
        }
    }

    async update(request, response) {
        try {
            const { type } = request.params || {};
            const { stock_level, name } = request.body || {};
            const result = await this.inventory.update(type, stock_level, name);
            response.json({
                success: true,
                data: result
            })
        } catch(error) {
            response.json({
                success: false,
                message: error.toString()
            });
            response.end();
        }
    }

    async delete(request, response) {
        try {
            const { type } = request.params || {};
            const { name } = request.body || {};
            const result = await this.inventory.delete(type, name);
            response.json({
                success: true,
                data: result
            })
        } catch(error) {
            response.json({
                success: false,
                message: error.toString()
            });
            response.end();
        }
    }
};

export default InventoryController