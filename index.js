// Classe que representa um herói
class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método que realiza o ataque com base no tipo do herói
    atacar() {
        let ataque = "";
        if (this.tipo === "guerreiro") {
            ataque = "espada"
        } else if (this.tipo === "mago") {
            ataque = "magia"
        } else if (this.tipo === "monge") {
            ataque = "artes marciais"
        } else if (this.tipo === "ninja") {
            ataque = "shuriken"
        } else {
            ataque = "Ataque desconhecido";
        }
        // Exibe a mensagem de ataque
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}
// Exemplo de uso da classe Heroi
const heroi1 = new heroi("Aragorn", 35, "guerreiro");
const heroi2 = new heroi("Gandalf", 70, "mago");
const heroi3 = new heroi("kratos", 65, "monge");
const heroi4 = new heroi("naruto", 17, "ninja");

// Executando os ataques
heroi1.atacar(); // Saída: O guerreiro atacou usando espada
heroi2.atacar(); // Saída: O mago atacou usando magia
heroi3.atacar(); // Saída: O monge atacou usando artes marciais
heroi4.atacar(); // Saída: O ninja atacou usando shuriken