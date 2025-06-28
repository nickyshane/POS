import Layout from '../layouts/layout2.js';
import Header from '../components/menu/header.js';
import Main from '../components/menu/main.js';
import Footer from '../components/menu/footer.js';

export default function Menu() {
    const { header, main, footer } = Layout(this.root);

    Header(header);
    Main(main);
    Footer(footer);
    
}