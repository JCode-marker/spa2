// module import
import { Header } from "../components/Header.js";
import { Main } from "../components/Main.js";
import { Loader } from "../components/Loader.js";
import { Router } from "../components/router.js";
import { InfiniteScroll } from "../helpers/infinite_scroll.js";

// export
export function App () {

    // variables
    const d = document;
    const $root = d.getElementById('root');

    // root reset
    $root.innerHTML = null;

    // appendChild
    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());

    // calling the function
    Router();
    InfiniteScroll();

}