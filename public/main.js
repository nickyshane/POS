import SPA from "./core/spa.js";
import PageNotFound from "./pages/pageNotFound.js";
import Landing from "./pages/landing.js";
import Menu from './pages/menu.js';
import Order from './pages/order.js';
import OrderSummary from "./pages/ordersummary.js";

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

app.handleRouteChanges();