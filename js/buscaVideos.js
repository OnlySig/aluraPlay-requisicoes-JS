import { conectaApi } from "./conectaApi.js"; 
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(event) {
    event.preventDefault();

    const DadosPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(DadosPesquisa);
    
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    const lista = document.querySelector("[data-lista]")

    busca.forEach(element => lista.appendChild(constroiCard(element.titulo, element.descricao, element.url, element.imagem)));
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");

botaoPesquisa.addEventListener("click", event => buscarVideo(event))