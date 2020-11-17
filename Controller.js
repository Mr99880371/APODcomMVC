class Controlador {

    constructor() {
        console.log("controller.")
    }

    Atualiza() {

        let modelo = new Model(usuario.value);
        modelo.Buscar();

        let view = new visualizar();
        view.recebe(modelo);
    }

}
let controll = new Controlador();

document.getElementById("enviar").addEventListener("click", controll.Atualiza);

let usuario = document.querySelector("#nome");