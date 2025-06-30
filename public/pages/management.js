import Layout from "../layouts/default";
import Main from "../components/management/main";
import Footer from "../components/management/footer";
import Events from "../components/management/event";

export default function Management() {
    const { main, footer } = Layout(this.root);

    Main(main);
    Footer(footer);

    Events();
}