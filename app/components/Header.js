// import
import { Title } from "./TitleHeader.js";
import { Menu } from "./Menu.js";
import { SearchForm } from "./SearchForm.js";

// export function
export function Header() {
    
    // variables
    const $header = document.createElement("header");

    // classList
    $header.classList.add("header");
    
    // appendChild
    $header.appendChild(Title());
    $header.appendChild(Menu());
    $header.appendChild(SearchForm());

    // return
    return $header;

}