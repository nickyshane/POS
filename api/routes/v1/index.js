import { Router } from "express";

import inventoryRouter from "./inventory.js";
import orderRouter from "./order.js";

const v1 = new Router();

v1.use("/inventory", inventoryRouter);
v1.use("/order", orderRouter);

export default v1;