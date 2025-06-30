import Layout from '../layouts/layout2.js';
import Header from '../components/orders/header.js';
import Main from '../components/orders/main.js';
import Footer from '../components/orders/footer.js';
import Events from '../components/orders/event.js';

export default function Orders() {
    const { header, main, footer } = Layout(this.root);
    
    Header(header);
    Main(main);
    Footer(footer);

    Events();
}