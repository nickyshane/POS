export default function Layout(root) {
    root.innerHTML = `
        <main id="main"></main>
        <footer id="footer"></footer>
    `

    return {
        main: document.getElementById('main'),
        footer: document.getElementById('footer')
    }
}
