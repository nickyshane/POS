import { Router } from "express";
import authorization from "../../middlewares/authorization.js";
import ProductController from "../../controllers/v1/productController.js";

const productRouter = new Router();
const product = new ProductController();

productRouter.use(authorization);

// Get Methods
productRouter.get('/:category', product.getProdsCategory.bind(product));

// Post Methods
productRouter.post('/', product.create.bind(product));


export default productRouter;