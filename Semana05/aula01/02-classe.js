// Classe é um molde para criar objetos. Ela define as propriedades e métodos que os objetos criados a partir dela terão.

class Player {
    name = "Nome"
    score = 0

    showsScore() {
        console.log(`${this.name} tem ${this.score} pontos.`)
    }
}

const player1 = new Player()

player1.name = "Bianca"
player1.score = 1000

console.log(player1.name);
console.log(player1.score);
player1.showsScore();