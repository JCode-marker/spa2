// export function
export function PostCard(props) {

    // Destructuring variables
    let {date, id, slug, title, _embedded } = props;
    let dateFormat = new Date(date).toLocaleString();
    let urlPoster = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url : "app/assets/img/favicon.png";

    // evento
    document.addEventListener('click', (e) => {

        // conditionals
        if (!e.target.matches(".post-card a")) return false;

        // localStorage
        localStorage.setItem('wpPostId', e.target.dataset.id);

    });

    // return
    return `
        <article class="post-card">
            <img src="${urlPoster}" alt="${title.rendered}">
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${date}">${dateFormat}</time>
                <a href="#/${slug}" data-id="${id}">Ver Publicacion</a>
            </p>
        </article>
    `;

}