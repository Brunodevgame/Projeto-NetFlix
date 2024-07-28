let botao = document.getElementById("botao-perguntas")
let menu = document.getElementById("pergunta")
let imagem = document.getElementById("imagem-perguntas")

function VisaoMenu() {

    if (menu.style.display == "none") {
        menu.style.display = "block"
        imagem.id = "imagem-perguntas-girar"
    } else {
        menu.style.display = "none"
        imagem.id = "imagem-perguntas"

    }
}

botao.addEventListener("click", VisaoMenu)
