import Layout from '../layouts/layout2.js';
import Header from '../components/order/header.js';
import Main from '../components/order/main.js';
import Events from '../components/order/event.js';

export default function Order() {
    const { header, main, footer } = Layout(this.root);
    
    Header(header);
    Main(main);

    Events();
}