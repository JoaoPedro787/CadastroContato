// Módulo de Contato
import Contato from "./rotas/contato.js";

// Elementos HTML
const container = document.querySelector(".resultado");
const button = document.querySelector("#btnGravar");

// Inputs de texto
const txtNome = document.querySelector("#txtNome");
const txtNum = document.querySelector("#txtNum");
const txtEmail = document.querySelector("#txtEmail");

button.addEventListener("click", () => {
    const nome = txtNome.value;
    const num = txtNum.value;
    const email = txtEmail.value;

    //Se houver todas as entradas válidas
    if (nome && num && email){
        const dados = new Contato(nome, num, email);
        dados.gravar(container);

        // Resetando Textbox
        txtNome.value = '';
        txtNum.value = '';
        txtEmail.value = '';
    }else{
        alert("Entradas inválidas")
    }
});