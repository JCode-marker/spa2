// export function
export function ContactForm() {

    // variables
    const d = document;
    const $form = d.createElement('form'),
        $style = d.getElementById('dynamic-styles')

    // classList
    $form.classList.add("contact-form");
    $form.autocomplete = "off";
    $form.target = "_blank";
    $form.action="https://formsubmit.co/jcode2006@gmail.com";
    $form.method = "POST";

    // inenrHTML
    $form.innerHTML = `
        <legend>Envianos tus Comentarios</legend>
        <input type="text" name="name" placeholder="Escribe tu nombre" title="Nombre solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚú\\s]+$" required>
        <input type="email" name="email" placeholder="Ingresa tu Email" title="Email Incorrecto" pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
        <input type="text" name="subject" placeholder="Asunto a Tratar" title="El Asunto es requerido" required>
        <textarea name="comments" cols="50" rows="5" placeholder="Escribe tus Comentarios" data-pattern="^.{1,255}$" title="Tu comentario no debe exceder los 255 caracteres" required></textarea>
        <input type="submit" value="Enviar" class="contact-form-submit">
        <div class="contact-form-loader none">
            <img src="app/assets/img/loader.svg" alt="Cargando">
        </div>
        <div class="contact-form-response none">
            <p>Los datos han sido enviados</p>
        </div>
    `;
    $style.innerHTML = `
    .contact-form {
        --form-ok-color: #4caf50;
        --form-error-color: #f44336;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }
        .contact-form > * {
            padding: .5rem;
            margin: 1rem auto;
            display: block;
            width: 100%;
            border-radius: 15px;
            outline: 0;
        }
        .contact-form textarea {
            resize: none;
        }
        .contact-form-loader img {
            margin: 1rem auto;
            display: block;
            width: 4rem;
            height: 4rem;
        }

    .contact-form legend,
    .contact-form-response {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        color: #dc3545;
    }

    .contact-form input,
    .contact-form textarea {
        font-size: .8rem;
        font-family: 'Open Sans', sans-serif;
    }

    .contact-form input[type="submit"] {
        width: 50%;
        font-weight: bold;
        cursor: pointer;
    }

    .contact-form *::placeholder {
        color: #000;
    }

    .contact-form [required]:valid {
        border: thin solid var(--form-ok-color);
    }

    .contact-form [required]:invalid {
        border: thin solid var(--form-error-color);
    }

    .contact-form-error {
        margin-top: -1rem;
        font-size: 80%;
        background-color: var(--form-error-color);
        color: #fff;
        transition: all 800ms ease;
    }

    .contact-form-error.is-active {
        display: block;
        animation: show-message 1s 1 normal 0s ease-out both;
    }

    .contact-form-submit {
        outline: 0;
        border: 0;
        background-color: var(--main-color);
        transition: all .5s ease-in-out;
    }
        .contact-form-submit:hover {
            background-color: var(--main-modal-color);
        }

    .none {
        display: none;
    }

    @keyframes show-message {
        0% {
            visibility: hidden;
            opacity: 0;
        }

        100% {
            visibility: visible;
            opacity: 1;
        }
    }
    `;

    // function that validates forms
    function contactFormValidations() {

        // variables
        const d = document;
        const $form = d.querySelector('.contact-form'),
            $inputs = d.querySelectorAll('.contact-form [required]');

        // forEach
        $inputs.forEach((input) => {
            // variables
            const $span = d.createElement('span');
                // name
                $span.id = input.name;
                // textContent
                $span.textContent = input.title;
                // classList
                $span.classList.add("contact-form-error", "none");
                // insertAdjacentElement
                input.insertAdjacentElement("afterend", $span);
        });

        // evento
        d.addEventListener('keyup', (e) => {
            const d = document;
            // condicionales
            if (e.target.matches(".contact-form [required]")) {
                // variables
                let $input = e.target,
                    pattern = $input.pattern || $input.dataset.pattern;

                // validaciones
                if (pattern && $input.value !== "") {
                    // variables
                    let regex = new RegExp(pattern);
                    // return
                    return !regex.exec($input.value)
                        ? document.getElementById($input.name).classList.add("is-active")
                        : document.getElementById($input.name).classList.remove("is-active");
                }
                if (!pattern) {
                    // return
                    return $input.value === ""
                        ? document.getElementById($input.name).classList.add("is-active")
                        : document.getElementById($input.name).classList.remove("is-active");
                }

                // consola
                // console.log($input, pattern);
            }
        });
        d.addEventListener('submit', (e) => {

            // variables
            const $loader = document.querySelector('.contact-form-loader'),
                $response = document.querySelector('.contact-form-response');

            // classList
            $loader.classList.remove("none");

            // setTimeout
            setTimeout(() => {
                // classList
                $loader.classList.add("none");
                $response.classList.remove("none");
                $form.reset();

                setTimeout(() => $response.classList.add("none"), 3000);
            }, 3000);
        });
        
    }

    // setTimeout
    setTimeout(() => {
        // calling the function
        contactFormValidations();
    }, 100);

    // return
    return $form;

}