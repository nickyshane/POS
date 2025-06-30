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
            console.error("<error> product.create ", error);
            throw error;
        }
    };
}

export default Product;