function header() {
    return `
        <header>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact-us">Contact us</a>
                <a href="/services">Services</a>
                <a href="/sign-in">Sign in</a>
                <a href="/cart">nn
                    <svg class="bi" width="24" height="24"><use xlink:href="#cart"></use></svg></a>
            </nav>
        </header>`;
}

export { header };