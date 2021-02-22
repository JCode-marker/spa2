// export
export async function ajax(props) {

    // variables - destructuring
    let {url, cbSuccess} = props;

    // fetch
    await fetch(url)
        .then((res) => res.ok ? res.json() : Promise.reject(res))
        .then((json) => cbSuccess(json))
        .catch((err) => {

            // variable
            let message = err.statusText || "Ocurrio un error al acceder a la API";
            // innerHTML
            document.getElementById('main').innerHTML = 
                `<div class="error">
                    <p>Error ${err.status}: ${message}</p>
                </div>
                <center>
                    <img src="app/assets/img/page-not-found.png">
                </center>`;
            // style
            document.querySelector('.loader').style.display = "none";

            console.log(err);

        });

}