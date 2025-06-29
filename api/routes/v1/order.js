import { Router } from "express";
import authorization from '../../middlewares/authorization.js';
import OrderController from "../../controllers/v1/orderController.js";

const orderRouter = new Router();
const order = new OrderController();

orderRouter.use(authorization);

// Get Methods
orderRouter.get('/', order.read.bind(order));

// Post Methods
orderRouter.post('/', order.create.bind(order));

// Patch Methods
orderRouter.patch('/', order.update.bind(order));

// Delete Methods
orderRouter.delete('/', order.delete.bind(order));

export default orderRouter;