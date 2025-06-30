import connection from "../core/database.js";

class Product {
    constructor() {
        this.db = connection;
    }

    async create(imagUrl, name, category, price) {
        try {
            const [result,] = await this.db.execute(
                `INSERT INTO products (image, name, category, price) VALUES (?, ?, ?, ?)`,
                [imagUrl, name, category, price]
            );
            return result;
        } catch(error) {
            console.error("<error> product.create ", error);
            throw error;
        }
    };

    async getProdsCategory(category) {
        try {
            const [result,] = await this.db.execute(
                `SELECT * FROM products WHERE category = ?`,
                [category]
            );
            return result;
        } catch(error) {
            console.error("<error> product.getProdsCategory ", error);
            throw error;
        }
    };

    async getStocks(productId) {
        try {
            const [result,] = await this.db.execute(
                `SELECT * FROM products_availability WHERE id = ?`,
                [productId]
            );
            return result;
        } catch(error) {
            console.error("<error> product.getStocks ", error);
            throw error;
        }
    }

    async updateStocks(productId, small, medium, large) {
        try {
            const [result,] = await this.db.execute(
                `UPDATE products_availability SET small = ?, medium = ?, large = ? WHERE id = ?`,
                [small, medium, large, productId]
            );
            return result;
        } catch(error) {
            console.error("<error> product.updateStocks ", error);
            throw error;
        }
    }

    async updateProduct(productId, price) {
        try {
            const [result,] = await this.db.execute(
                `UPDATE products SET price = ? WHERE id = ?`,
                [price, productId]
            );
            return result;
        } catch(error) {
            console.error("<error> product.updateProduct ", error);
            throw error;
        }
    }
}

export default Product;