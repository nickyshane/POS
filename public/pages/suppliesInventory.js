import Layout from '../layouts/layout2.js';
import Header from '../components/suppliesInventory/header.js';
import Main from '../components/suppliesInventory/main.js';
import Footer from '../components/suppliesInventory/footer.js';
import Events from '../components/suppliesInventory/event.js';

export default function SuppliesInventory() {
    const { header, main, footer } = Layout(this.root);
    
    Header(header);
    Main(main);
    Footer(footer);
    
    Events();
}