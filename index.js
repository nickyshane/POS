import $2y63V$express, {Router as $2y63V$Router} from "express";
import $2y63V$cookieparser from "cookie-parser";
import $2y63V$cors from "cors";
import $2y63V$bodyparser from "body-parser";
import "dotenv/config.js";
import $2y63V$morgan from "morgan";
import $2y63V$mysql2promise from "mysql2/promise";









function $6801ccb4a9eab177$export$2e2bcd8739ae039(req, res, next) {
    const apikey = req.headers.apikey;
    if (!apikey || apikey && apikey !== process.env.API_KEY) {
        res.json({
            'success': false,
            'message': 'Unauthorized'
        });
        return;
    }
    next();
}



// Connection to the database
const $d4fdde683896a9fb$var$connection = await (0, $2y63V$mysql2promise).createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
});
var $d4fdde683896a9fb$export$2e2bcd8739ae039 = $d4fdde683896a9fb$var$connection;


class $0db1f37a705dc77a$var$Inventory {
    constructor(){
        this.db = (0, $d4fdde683896a9fb$export$2e2bcd8739ae039);
    }
    async create(type, name, stockLevel, units, price, supplier, category) {
        try {
            const query = `INSERT INTO ${type} (Ingredients, Stock_Level, Units, Price, Supplier, Category) VALUES (?, ?, ?, ?, ?, ?)`;
            const [result] = await this.db.execute(query, [
                name,
                stockLevel,
                units,
                price,
                supplier,
                category
            ]);
            return result;
        } catch (error) {
            console.error("<error> inventory.create ", error);
            throw error;
        }
    }
    async read() {}
    async update() {}
    async delete() {}
}
var $0db1f37a705dc77a$export$2e2bcd8739ae039 = $0db1f37a705dc77a$var$Inventory;


class $6f82f8a379296673$var$InventoryController {
    constructor(){
        this.inventory = new (0, $0db1f37a705dc77a$export$2e2bcd8739ae039)();
    }
    async create(request, response) {
        try {
            const { type: type } = request.params;
            console.log(type);
            const { name: name, stockLevel: stockLevel, units: units, price: price, supplier: supplier, category: category } = request.body || {};
            const response = await this.inventory.create(type, name, stockLevel, units, price, supplier, category);
            response.json({
                success: true,
                response: response
            });
            response.end();
        } catch (error) {
            response.json({
                success: false,
                message: error.toString()
            });
            response.end();
        }
    }
    async read(request, response) {}
    async update(request, response) {}
    async delete(request, response) {}
}
var $6f82f8a379296673$export$2e2bcd8739ae039 = $6f82f8a379296673$var$InventoryController;


const $853c1d737ac6351e$var$inventoryRouter = new (0, $2y63V$Router)();
const $853c1d737ac6351e$var$inventory = new (0, $6f82f8a379296673$export$2e2bcd8739ae039)();
$853c1d737ac6351e$var$inventoryRouter.use((0, $6801ccb4a9eab177$export$2e2bcd8739ae039));
// Get Methods
$853c1d737ac6351e$var$inventoryRouter.get('/', $853c1d737ac6351e$var$inventory.read.bind($853c1d737ac6351e$var$inventory));
// Post Methods
$853c1d737ac6351e$var$inventoryRouter.post('/:type', $853c1d737ac6351e$var$inventory.create.bind($853c1d737ac6351e$var$inventory));
var $853c1d737ac6351e$export$2e2bcd8739ae039 = $853c1d737ac6351e$var$inventoryRouter;


const $3707f37220076628$var$v1 = new (0, $2y63V$Router)();
$3707f37220076628$var$v1.use("/inventory", (0, $853c1d737ac6351e$export$2e2bcd8739ae039));
var $3707f37220076628$export$2e2bcd8739ae039 = $3707f37220076628$var$v1;


const $7531d008007ecdad$var$app = (0, $2y63V$express)();
const $7531d008007ecdad$var$port = process.env.API_PORT || 4000;
$7531d008007ecdad$var$app.use((0, $2y63V$morgan)("combined"));
$7531d008007ecdad$var$app.use((0, $2y63V$cookieparser)());
$7531d008007ecdad$var$app.use((0, $2y63V$bodyparser).json());
$7531d008007ecdad$var$app.use((0, $2y63V$bodyparser).urlencoded({
    extended: false
}));
$7531d008007ecdad$var$app.use("/v1", (0, $2y63V$cors)(), (0, $3707f37220076628$export$2e2bcd8739ae039));
$7531d008007ecdad$var$app.listen($7531d008007ecdad$var$port, ()=>{
    console.log(`Api is running at port ${$7531d008007ecdad$var$port}...`);
});


//# sourceMappingURL=index.js.map
