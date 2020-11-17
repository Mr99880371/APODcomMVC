class Model {

    constructor(usuario) {
        console.log("criando a classe")

        this._usuario = usuario;
        this._html = html_url;
        this._imagem = "";
        this._id = "";
        this._documentacao = "";

    }

    Buscar() {

        console.log("buscando a pessoa...");

        let usuario = this._usuario;
        var request = new XMLHttpRequest();

        request.addEventListener('load', () => {

            if (request.status == 200) {
                let dados = this._Reorganiza(request.responseText)
                this._TrazerDados(dados)
            }
        })

        request.open("GET", `https://api.github.com/users/${usuario}`, false);

        request.send();
    }


    _Reorganiza(responseText) {
        console.log("está me vendo??")
        let conversao = JSON.parse(responseText);
        return conversao;

    }

    _TrazerDados(dados) {

        this._usuario = dados.login;
        this._html_url = dados.html_url;
        this._imagem = dados.avatar_url;
        this._id = dados.id;
        this._documentacao = dados.repos_url;

    }
    getUsuario() {
        return this._usuario;
    }
    getUrl() {
        return this._html_url;
    }
    getImagem() {
        return this._imagem;
    }
    getID() {
        return this._id;
    }
    getDocument() {
        return this._documentacao;
    }

}