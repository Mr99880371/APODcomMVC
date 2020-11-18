class visualizar {
    constructor() {
        console.log("Não tem atributos.")
    }

    recebe(model) {
        let criar = document.createElement('div');
        criar.innerHTML = `<h1>${model.getUsuario()}</h1>`
        document.body.appendChild(criar);


        let repositorios = document.createElement('div')
        repositorios.innerHTML = `<h2><a href="https://github.com/${model.getUsuario()}?tab=repositories">Repositórios de ${model.getUsuario()}</a></h2>`;
        document.body.appendChild(repositorios);


        let imagem = document.createElement('img');
        imagem.src = model.getImagem();
        document.body.appendChild(imagem);

        //Tentativa de por a lista de repositórios na página html(parte view):

        // let repositorio = model.getDocument();

        // for (let i of repositorio) {
        //     let nomeReposi = document.createElement('p');
        //     nomeReposi.textContent = repositorio[i].nome;
        //     nomeReposi.appendChild(nomeReposi);

        //     let LinkRepo = document.createElement('a');
        //     LinkRepo.innerHTML = `<img src=".../img/link.svg" alt="">`
        //     LinkRepo.href = repositorio[i].html_url;
        //     LinkRepo.appendChild(LinkRepo);

        //     let linguagem = document.querySelector('p');
        //     linguagem.textContent = repositorio[i].language;
        //     linguagem.appendChild(linguagem);

        // }
    }

}