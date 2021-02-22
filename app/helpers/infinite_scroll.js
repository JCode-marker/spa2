// import
import api from "./wp_api.js";
import { ajax } from "./ajax.js";
import { SearchCard } from "../components/SearchCard.js";
import { PostCard } from "../components/PostCard.js";

// export function
export async function InfiniteScroll() {

    // variables
    const d = document,
        w = window;
    let query = localStorage.getItem('wpSearch'),
        apiURL,
        Component; // High Order Component

    // event 
    w.addEventListener('scroll', async (e) => {

        // destructuring of variables
        let { scrollTop, clientHeight, scrollHeight } = d.documentElement;
        let { hash } = w.location;

        // console
        // console.log(scrollTop, clientHeight, scrollHeight, hash);

        // conditions
        if (scrollTop + clientHeight >= scrollHeight) {

            // page increment
            api.page ++;

            // conditions
            if (!hash || hash === "#/") {
                apiURL = `${api.POSTS}&page=${api.page}`;
                Component = PostCard;
            } else if (hash.includes("#/search")) {
                apiURL = `${api.SEARCH}&${query}&page=${api.page}`;
                Component = SearchCard;
            } else {
                return false;
            }

            // selector loader
            d.querySelector('.loader').style.display = "block";

            // calling the function
            await ajax(
                {
                    url : apiURL,
                    cbSuccess : (posts) => {
                        let html = "";
                        posts.forEach((post) => (html += Component(post)));
                        d.getElementById('main').insertAdjacentHTML("beforeend", html);
                        d.querySelector('.loader').style.display = "none";
                    }
                }
            );

        }

    });

}