import SPA from "./core/spa.js";
import PageNotFound from "./pages/pageNotFound.js";
import Landing from "./pages/landing.js";
import Menu from './pages/menu.js';
import Order from './pages/order.js';
import OrderSummary from "./pages/ordersummary.js";
import Management from "./pages/management.js";
import ProductInventory from "./pages/productInventory.js";
import SuppliesInventory from "./pages/suppliesInventory.js";

// Uncomment this to implement styling
import "./styles/common.css";

const app = new SPA ({
    root: document.getElementById("app"),
    defaultRoute: PageNotFound
});

window.app = app;

// Add routes here!
app.add("/", Landing);
app.add("/menu", Menu);
app.add("/order", Order);
app.add("/summary", OrderSummary);
app.add("/management", Management);
app.add("/products", ProductInventory);
app.add("/supplies", SuppliesInventory);

app.handleRouteChanges();