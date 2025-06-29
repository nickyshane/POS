import Layout from "../layouts/layout2.js";
import Header from "../components/ordersummary/header.js";
import Main from "../components/ordersummary/main.js";
import Footer from "../components/ordersummary/footer.js";
import Events from "../components/ordersummary/event.js";

export default function OrderSummary() {
    const { header, main, footer } = Layout(this.root);
    
    Header(header);
    Main(main);
    Footer(footer);


    Events();
}