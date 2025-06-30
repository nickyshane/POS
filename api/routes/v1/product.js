import { Router } from "express";
import authorization from "../../middlewares/authorization.js";
import ProductController from "../../controllers/v1/productController.js";

const productRouter = new Router();
const product = new ProductController();

productRouter.use(authorization);

// Get Methods
productRouter.get('/:category', product.getProdsCategory.bind(product));
productRouter.get('/stocks/:category', product.getProdsStocks.bind(product));

// Post Methods
productRouter.post('/', product.create.bind(product));

// Patch Methods
productRouter.patch('/', product.updateProduct.bind(product))
productRouter.patch('/stock', product.updateStocks.bind(product));


export default productRouter;