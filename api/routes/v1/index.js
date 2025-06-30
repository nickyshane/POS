import { Router } from "express";

import inventoryRouter from "./inventory.js";
import orderRouter from "./order.js";
import productRouter from "./product.js";

const v1 = new Router();

v1.use("/inventory", inventoryRouter);
v1.use("/order", orderRouter);
v1.use("/product", productRouter);

export default v1;