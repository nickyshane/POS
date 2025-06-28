import Layout from "../layouts/default";
import Main from "../components/pageNotFound/main";


export default function PageNotFound() {
    const { main, footer } = Layout(this.root);

    Main(main);
}