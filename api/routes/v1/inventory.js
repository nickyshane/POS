import { Router } from "express";
import authorization from "../../middlewares/authorization.js";
import InventoryController from "../../controllers/v1/inventoryController.js";

const inventoryRouter = new Router();
const inventory = new InventoryController();

inventoryRouter.use(authorization);

// Get Methods
inventoryRouter.get('/:type', inventory.read.bind(inventory));

// Post Methods
inventoryRouter.post('/:type', inventory.create.bind(inventory));

// Patch Methods
inventoryRouter.patch('/:type', inventory.update.bind(inventory));

// Delete Methods
inventoryRouter.delete('/:type', inventory.delete.bind(inventory));

export default inventoryRouter;