export default class Contato {
    static #contatos = []; //Reponsável por adicionar elementos no container princípal
    static #cont = 0; //Método de atribuir ID unícos

    constructor(nome, num, email) {
        Contato.#cont++;
        this.Nome = nome;
        this.Num = num;
        this.Email = email;
        this.id = `${this.Nome}${Contato.#cont}`;
    }

    gravar(container) {
        const elemento = document.createElement('div');

        elemento.setAttribute('class', 'card');
        elemento.setAttribute('id', this.id);

        elemento.innerHTML = `
            <p>Nome: ${this.Nome}</p>
            <p>Num: ${this.Num}</p>
            <p>Email: ${this.Email}</p>
            <img src="./src/lixeira.png" alt="remover" class="remove">
        `;

        // Adicionando o evento de clique à imagem de remoção
        const removeBtn = elemento.querySelector('.remove');
        removeBtn.addEventListener('click', () => this.remover(container));

        Contato.#contatos.push(elemento); //Dando append no elemento

        Contato.#AtualizaContatos(container);
    }

    remover(container) {
        Contato.#contatos = Contato.#contatos.filter((el) => el.id != this.id);
        Contato.#AtualizaContatos(container);
    }

    static #AtualizaContatos(container) { //Função que atualiza o container, tanto quando adicionar ou remover itens
        container.innerHTML = '';
        Contato.#contatos.forEach((el) => {
            container.appendChild(el);
        });
    };
};