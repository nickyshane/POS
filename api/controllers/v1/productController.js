import Product from "../../models/product.js";

class ProductController {
    constructor() {
        this.product = new Product();
    }

    async create(request, response) {
        try {
            const { image_url, name, category, price, small, medium, large } = request.body || {};
            const result = await this.product.create(image_url, name, category, price, small, medium, large);
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

    async getProdsStocks(request, response) {
        try {
            const productWithStoks = [];

            const { category } = request.params || {};
            const products = await this.product.getProdsCategory(category);
            
            for (const product of products) {
                const stocks = await this.product.getStocks(product.id);
                productWithStoks.push({
                    ...product,
                    stocks: stocks
                });
            }

            response.json({
                success: true,
                data: productWithStoks
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

    async updateStocks(request, response) {
        try {
            const { product_id, small, medium, large } = request.body || {};
            const result = await this.product.updateStocks(product_id, small, medium, large);
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

    async updateProduct(request, response) {
        try {
            const { product_id, price } =request.body || {};
            const result = await this.product.updateProduct(product_id, price);
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