/* =====================================================
   ECOQUEBRADA
   PÁGINA INFORMATIVA
   PARTE 5 — JAVASCRIPT
===================================================== */


/* =====================================================
   1. FILTRO DE CONTEÚDOS
===================================================== */

const categoryButtons = document.querySelectorAll(".category-button");

const contentCards = document.querySelectorAll(
    ".article-card, .video-card"
);


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        /*
         * Remove a classe "active"
         * de todos os botões.
         */

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        /*
         * Ativa o botão clicado.
         */

        button.classList.add("active");


        /*
         * Pega a categoria selecionada.
         */

        const selectedCategory =
            button.dataset.category;


        /*
         * Mostra ou esconde os conteúdos.
         */

        contentCards.forEach(card => {

            const cardCategory =
                card.dataset.category;


            /*
             * Se for "todos", mostra tudo.
             */

            if (selectedCategory === "todos") {

                card.style.display = "";

                setTimeout(() => {

                    card.classList.remove("content-hidden");

                }, 10);

                return;

            }


            /*
             * Se a categoria do card for igual
             * à categoria selecionada, mostra.
             */

            if (cardCategory === selectedCategory) {

                card.style.display = "";

                setTimeout(() => {

                    card.classList.remove("content-hidden");

                }, 10);

            }


            /*
             * Caso contrário, esconde.
             */

            else {

                card.classList.add("content-hidden");

                setTimeout(() => {

                    card.style.display = "none";

                }, 250);

            }

        });

    });

});


/* =====================================================
   2. BOTÕES DE PLAY
===================================================== */

const videoButtons =
    document.querySelectorAll(".video-card__play");


const featuredPlay =
    document.querySelector(".play-button");


/*
 * Função responsável por mostrar
 * uma mensagem temporária.
 */

function showVideoMessage(title) {

    alert(
        `O vídeo "${title}" será aberto aqui.`
    );

}


/* =====================================================
   VÍDEOS DOS CARDS
===================================================== */

videoButtons.forEach(button => {

    button.addEventListener("click", event => {

        /*
         * Impede que o clique no botão
         * seja interpretado como clique no card.
         */

        event.stopPropagation();


        /*
         * Encontra o card correspondente.
         */

        const card =
            button.closest(".video-card");


        /*
         * Pega o título do vídeo.
         */

        const title =
            card.querySelector("h3").textContent.trim();


        showVideoMessage(title);

    });

});


/* =====================================================
   VÍDEO EM DESTAQUE
===================================================== */

if (featuredPlay) {

    featuredPlay.addEventListener("click", () => {

        const featuredTitle =
            document
                .querySelector(".featured__content h2")
                .textContent
                .trim();


        showVideoMessage(featuredTitle);

    });

}


/* =====================================================
   3. CARDS DE ARTIGOS
===================================================== */

const articleLinks =
    document.querySelectorAll(
        ".article-card__content > a"
    );


articleLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();


        const card =
            link.closest(".article-card");


        const title =
            card.querySelector("h3").textContent.trim();


        alert(
            `O artigo "${title}" será aberto aqui.`
        );

    });

});


/* =====================================================
   4. BOTÃO "VER TODOS"
===================================================== */

const seeAllButtons =
    document.querySelectorAll(".see-all");


seeAllButtons.forEach(button => {

    button.addEventListener("click", event => {

        event.preventDefault();


        /*
         * Volta para a visualização de todos
         * os conteúdos.
         */

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        const allButton =
            document.querySelector(
                '.category-button[data-category="todos"]'
            );


        if (allButton) {

            allButton.classList.add("active");

        }


        contentCards.forEach(card => {

            card.style.display = "";

            card.classList.remove("content-hidden");

        });


        /*
         * Desce suavemente até os artigos.
         */

        const articles =
            document.querySelector(".articles");


        if (articles) {

            articles.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


/* ==========================================
   MENU MOBILE
========================================== */

const menuButton = document.getElementById("menuMobile");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");


if (menuButton && mobileMenu && overlay) {

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("active");

        overlay.classList.toggle("active");

    });


    overlay.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

        overlay.classList.remove("active");

    });


    const links = mobileMenu.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("active");

            overlay.classList.remove("active");

        });

    });

}

/* =====================================================
   6. FECHAR MENU AO CLICAR EM UM LINK
===================================================== */

if (navigation) {

    const navigationLinks =
        navigation.querySelectorAll("a");


    navigationLinks.forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("nav--open");

        });

    });

}


/* =====================================================
   7. ACESSIBILIDADE
===================================================== */

categoryButtons.forEach(button => {

    button.addEventListener("keydown", event => {

        /*
         * Permite usar Enter ou Espaço
         * para ativar o filtro.
         */

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            button.click();

        }

    });

});


/* =====================================================
   8. CONSOLE DE TESTE
===================================================== */

console.log(
    "EcoQuebrada — página informativa carregada."
);