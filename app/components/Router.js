// import
import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./ContactForm.js";

// export function
export async function Router() {

    // variables
    const d = document,
        w = window;
    const $main = d.getElementById('main');
    let { hash } = location;

    // innerHTML
    $main.innerHTML = null;

    // condicionales
    if (!hash || hash === "#/") {

        // ajax
        await ajax(
            {
                url : api.POSTS,
                cbSuccess : (posts) => {
                    let html = "";
                    posts.forEach((post) => html += PostCard(post));
                    // d.querySelector('.loader').style.display = "none";
                    d.getElementById('main').innerHTML = html;
                }
            }
        );

    }
    else if (hash.includes("#/search")) {
        
        // variables
        let query = localStorage.getItem('wpSearch');

        // conditions
        if (!query) {
            d.querySelector('.loader').style.display = "none";
            return false;
        }

        // ajax
        await ajax(
            {
                url : `${api.SEARCH}${query}`,
                cbSuccess : (search) => {
                    let html = "";
                    if (search.length === 0) html = `<p class="error">No Existe Resultados de Busqueda para termino <mark>${query}</mark></p>`
                    else {
                        search.forEach((post) => html += SearchCard(post));
                    }
                    $main.innerHTML = html;
                }
            }
        );

    }
    else if (hash === "#/contacto") $main.appendChild(ContactForm());
    else {

        // ajax
        await ajax(
            {
                url : `${api.POST}/${localStorage.getItem('wpPostId')}`,
                cbSuccess : ((post) => $main.innerHTML = Post(post))
            }
        );

    }

    // style loader none
    d.querySelector('.loader').style.display = "none";

}