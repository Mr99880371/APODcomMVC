class visualizar {
    constructor() {
        console.log("Não tem atributos.")
    }

    recebe(model) {
        let criar = document.createElement('div');
        criar.innerHTML = `<h1>${model.getUsuario()}</h1>`
        document.body.appendChild(criar);


        let repositorios = document.createElement('div')
        repositorios.innerHTML = `<h2><a href="${model.getUrl()}">Repositórios</a></h2>`;
        document.body.appendChild(repositorios);


        let imagem = document.createElement('img');
        imagem.src = model.getImagem();
        document.body.appendChild(imagem);

    }

}