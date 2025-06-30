import Product from "../../models/product.js";

class ProductController {
    constructor() {
        this.product = new Product();
    }

    async create(request, response) {
        try {
            const { image_url, name, category, price } = request.body || {};
            const result = await this.product.create(image_url, name, category, price);
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
        }
    };

    async getProdsCategory(request, response) {
        try {
            const { category } = request.params || {};
            const result = await this.product.getProdsCategory(category);
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
        }
    }
};

export default ProductController;