// export function
export function Post (props) {

    let { content, date, title } = props;
    let dateFormat = new Date(date).toLocaleString();

    // return
    return `
        <section class="post-page">
            <aside>
                <h3>${title.rendered}</h3>
                <time datetime="${date}">${dateFormat}</time>
            </aside>
            <hr>
            <article>${content.rendered}</article>
        </section>
    `;

}