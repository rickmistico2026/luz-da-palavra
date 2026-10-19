const btnTema = document.getElementById("btnTema");
const anos = document.querySelectorAll(".ano");

// Alternar tema claro e escuro
if (btnTema) {
    btnTema.addEventListener("click", function () {
        document.body.classList.toggle("escuro");

        const temaEscuro = document.body.classList.contains("escuro");

        btnTema.textContent = temaEscuro ? "☀️" : "🌙";
        btnTema.setAttribute("aria-pressed", temaEscuro);
        btnTema.setAttribute(
            "aria-label",
            temaEscuro ? "Ativar tema claro" : "Ativar tema escuro"
        );
    });
}

//Mensagem de boas vinda de home_page


const boasVindasExibida = localStorage.getItem("boasVindasExibida");

const paginaInicial =
    window.location.pathname.endsWith("/index.html") ||
    window.location.pathname.endsWith("/");

const mensagem = document.getElementById("mensagemBoasVindas");

if (paginaInicial && !boasVindasExibida && mensagem) {

    mensagem.classList.add("mostrar");

    localStorage.setItem("boasVindasExibida", "sim");

    setTimeout(function () {
        mensagem.classList.remove("mostrar");
    }, 3000);
}


// Atualizar o ano do rodapé
anos.forEach(function (elemento) {
    elemento.textContent = new Date().getFullYear();
});

