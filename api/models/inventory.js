import connection from '../core/database.js';

class Inventory {
    constructor() {
        this.db = connection
    }

    async create(type, name, stockLevel, units, price, supplier, category) {
        try {
            const query = `INSERT INTO ${type} (Name, Stock_Level, Units, Price, Supplier, Category) VALUES (?, ?, ?, ?, ?, ?)`;
            const [result,] = await this.db.execute(
                query,
                [name, stockLevel, units, price, supplier, category] 
            );
            return result;
        } catch(error) {
            console.error("<error> inventory.create ", error);
            throw error;
        }
    }

    async read(type) {
        try {
            const query = `SELECT * FROM ${type}`;
            const [result,] = await this.db.execute(
                query
            );
            return result;
        } catch(error) {
            console.error("<error> inventory.read ", error);
            throw error;
        }
    }

    async update(type, productId, stockLevel, units, price, supplier, category) {
        try {
            const query = `UPDATE ${type} SET Stock_Level = ?, Units = ?, Price = ?, Supplier = ?, Category = ? WHERE id = ?`;
            const [result,] = await this.db.execute(
                query,
                [stockLevel, units, price, supplier, category, productId]
            );
            return result;
        } catch(error) {
            console.error("<error> inventory.update ", error);
            throw error;
        }
    }

    async delete(type, name) {
        try {
            const query = `DELETE FROM ${type} WHERE Name = ?`;
            const [result,] = await this.db.execute(
                query,
                [name]
            );
            return result;
        } catch(error) {
            console.error("<error> inventory.delete ", error);
            throw error;
        }
    }

};

export default Inventory;