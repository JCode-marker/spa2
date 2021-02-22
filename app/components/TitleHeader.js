// import
import api from "../helpers/wp_api.js";

// export function
export function Title() {

    // variables
    const $h1 = document.createElement('h1');

    // innerHTML
    $h1.innerHTML += 
        `<a href="${api.DOMAIN}" target="_blank" rel="nooperner">
            ${api.NAME.toUpperCase()}
        </a>`;

    // return
    return $h1;

}