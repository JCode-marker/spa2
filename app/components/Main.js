// export function
export function Main() {

    // variables
    const $main = document.createElement('main');

    // propieades
    $main.id = "main";

    // conditions
    if (!location.hash.includes("#/search")) $main.classList.add("grid-fluid");

    // return
    return $main;
    
}