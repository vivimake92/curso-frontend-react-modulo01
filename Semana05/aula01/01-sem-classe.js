// A dor de repetir: Sem classe (Funciona, mas repete o mesmo código várias vezes)

const player1 = {
    name: "Bianca",
    score: 0,
    showsScore() {
        console.log(`A jogadora ${this.name} tem ${this.score} pontos.`)
    }
}

const player2 = {
    name: "Carla",
    score: 0,
    showsScore() {
        console.log(`A jogadora ${this.name} tem ${this.score} pontos.`)
    }
}

player1.showsScore();
player2.showsScore();