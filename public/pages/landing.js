import Layout from "../layouts/default";
import Main from "../components/landing/main";
import Footer from "../components/landing/footer";
import Events from "../components/landing/event";

export default function Landing() {
    const { main, footer } = Layout(this.root);

    Main(main);
    Footer(footer);

    Events();
}