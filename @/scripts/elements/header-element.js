class headerElement extends HTMLElement {
    constructor() {
        super();
        
        let view = `
        <div class="container">
            <div class="header-container-billede">
                <img class="nav-img" src="{{mainBillede}}">
                <div class="nav-toggle" id="navToggle">    
                    <img id="navClosed" class="navIcon" src="https://www.richardmiddleton.me/wp-content/themes/richardcodes/assets/img/hamburger.svg" alt="hamburger menu">
                    <img id="navOpen" class="navIcon hidden" src="https://www.richardmiddleton.me/wp-content/themes/richardcodes/assets/img/close.svg" alt="close hamburger">
                </div>
            </div>

            <nav class="container-nav">
                <ul class="container-nav-ul">
                    <li>Nyheder</li>
                    <li>Portal</li>
                    <li>Butik</li>
                    <li>Kontakt</li>
                    <li>Login</li>
                </ul>
            </nav>
            
        </div>`;
        let app = { mainBillede: this.getAttribute('main-billede') }
        let render = Mustache.render(view, app); // Mustache render of the header-element content
        
        $(this).append(render); // Append mustache render
    }
}

customElements.define('header-element', headerElement); // Gen the <header-element>