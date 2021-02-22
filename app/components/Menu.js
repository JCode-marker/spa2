// export function
export function Menu() {

    // variables
    const $menu = document.createElement('nav');
    
    // classList
    $menu.classList.add("menu");

    // innerHTML
    $menu.innerHTML = ` 
        <a href="#/">Home</a> <span>-</span>
        <a href="#/search">Search</a><span>-</span>
        <a href="#/contacto">Contact</a><span>-</span>
        <a href="https://aprendejavascript.org" target="_blank" rel="noopener">Aprende JS</a>`;

    // return
    return $menu;

}