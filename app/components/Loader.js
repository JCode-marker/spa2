// export function
export function Loader() {

    // variables
    const $loader = document.createElement('img');

    // attributes
    $loader.setAttribute("src", "app/assets/img/loader.svg");
    $loader.setAttribute("alt", "Cargando...");

    // classList
    $loader.classList.add("loader");

    // return
    return $loader;

}