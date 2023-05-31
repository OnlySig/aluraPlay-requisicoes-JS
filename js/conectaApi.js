async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoJson = await conexao.json()

    return conexaoJson;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualização`,
            url: url,
            imagem: imagem,
        })
    });

    const conexaoJson = await conexao.json();

    return conexaoJson
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoJson = await conexao.json()
    return conexaoJson
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}