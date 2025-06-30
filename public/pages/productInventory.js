import Layout from '../layouts/layout2.js';
import Header from '../components/productInventory/header.js';
import Main from '../components/productInventory/main.js';
import Footer from '../components/productInventory/footer.js';
import Events from '../components/productInventory/event.js';

export default function Order() {
    const { header, main, footer } = Layout(this.root);
    
    Header(header);
    Main(main);
    Footer(footer);
    
    Events();
}