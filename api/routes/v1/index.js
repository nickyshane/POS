import { Router } from "express";

import inventoryRouter from "./inventory.js";

const v1 = new Router();

v1.use("/inventory", inventoryRouter);

export default v1;