class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        if (this.tipo === "mago") {
            console.log(`O ${this.tipo} atacou usando magia`);
        } else if (this.tipo === "guerreiro") {
            console.log(`O ${this.tipo} atacou usando espada`);
        } else if (this.tipo === "monge") {
            console.log(`O ${this.tipo} atacou usando artes marciais`);
        } else if (this.tipo === "ninja") {
            console.log(`O ${this.tipo} atacou usando shuriken`);
        } else {
            console.log(`Tipo de herói desconhecido.`);
        }
    }
}

// Criando objetos de heróis
let heroi1 = new Heroi("Adriel", 37, "mago");
let heroi2 = new Heroi("Natalia", 35, "guerreiro");
let heroi3 = new Heroi("Brian", 11, "monge");
let heroi4 = new Heroi("Maria", 9, "ninja");

// Chamando o método atacar para cada herói
heroi1.atacar(); // O mago atacou usando magia
heroi2.atacar(); // O guerreiro atacou usando espada
heroi3.atacar(); // O monge atacou usando artes marciais
heroi4.atacar(); // O ninja atacou usando shuriken

// Exibindo informações dos heróis
console.log(heroi1);
console.log(heroi2);
console.log(heroi3);
console.log(heroi4);
