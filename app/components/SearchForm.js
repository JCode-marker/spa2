// export function
export function SearchForm() {
    
    // variables
    const d = document
    const $form = d.createElement('form'),
        $input = d.createElement('input');

    // classList
    $form.classList.add("search-form");
    
    // propiedades
    $input.name = "search";
    $input.type = "search";
    $input.placeholder = "Buscar..."
    $form.autocomplete = "off";

    // appendChild
    $form.appendChild($input);

    // conditions
    if (location.hash.includes("#/search")) $input.value = localStorage.getItem('wpSearch');

    // event delegation
    d.addEventListener('search', (e) => {

        // conditions
        if (!e.target.matches("input[type='search']")) return false;
        if (!e.target.value) localStorage.removeItem('wpSearch');

    });
    d.addEventListener('submit', (e) => {

        // condicionales
        if (!e.target.matches('.search-form')) return false;

        // preventDefault
        e.preventDefault();

        // localStorage
        localStorage.setItem('wpSearch', e.target.search.value);
        location.hash = `#/search?search=${e.target.search.value}`;

    });

    // return
    return $form;

}