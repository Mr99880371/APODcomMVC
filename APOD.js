var body = document.querySelector('body');

document.querySelector('.form').addEventListener('submit', function(event) {

    event.preventDefault();
    console.log("o corpo tá aqui");

    class IniciandoAModel {

        constructor() {
            console.log("criando a classe")
            this._data = data.value;
            this._imagem = "";
            this._descricao = "";
            this._copyright = "";
        }

        BuscarAPOD() {

            console.log("buscando o site...");

            var request = new XMLHttpRequest();

            request.addEventListener('load', function() {
                if (request.status == 200) {
                    let dados = this._Reorganiza(request.responseText)
                    this._TrazerDados(dados)
                }
            })
            request.open("GET", "https://api.nasa.gov/planetary/apod?api_key=ryCzyejpaeSejor9JOvIkXmdDxOIemYa39Qqh5Bp&date=" + this._data, false);

            //request.setRequestHeader("Authorization", "ryCzyejpaeSejor9JOvIkXmdDxOIemYa39Qqh5Bp");

            request.send();
        }
        _Reorganiza(responseText) {
            console.log("está me vendo??")
            let conversao = JSON.parse(responseText);
            return conversao;

        }

        _TrazerDados(dados) {
            this._titulo = dados.title;
            this._data = dados.date;
            this._imagem = dados.media_type.url;
            this._descricao = dados.explicação;
            this._copyright = dados.copyright;
        }

        getData() {
            return this._data;
        }

        getImagem() {
            return this._imagem;
        }

        getDescricao() {
            return this._descricao;
        }

        getCopyright() {
            return this._copyright;
        }
    }
    // let response = new IniciandoAModel();
    // console.log("foi iniciada?");

    class visualizar {
        constructor() {
            console.log("Não tem atributos.")
        }

        recebe(model) {
            let criar = document.createElement('div');
            criar.innerHTML = `
            <p>${model.getData()}</p>
            img src= ${model.getImagem()}
            <p>${model.getDescricao()}</p>
            <p>${model.getCopyright()}</p>
            `

            document.body.append(criar);
        }

    }

    class Controlador {
        constructor() {
            console.log("Não tem atributos.")
        }

        AtualizaDia() {
            let modelo = new IniciandoAModel();
            modelo.BuscarAPOD();

            let view = new visualizar();
            view.recebe("");
        }
    }
    let controll = new Controlador();
    console.log("funcinou??");
    document.getElementsByClassName(".form").addEventListener("click", controll.AtualizaDia());
})