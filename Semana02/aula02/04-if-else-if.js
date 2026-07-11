// APROVAÇÃO

// Verificar a aprovação do aluno

// Aprovado: média maior ou igual a 7
// Recuperação: média entre 5 e 7
// Reprovado: média menor que 5

const media = 6

if(media >= 7) {
    console.log("Aprovado!")
} else if (media >= 5 && media < 7) {
    console.log("Em recuperação!")
} else {
    console.log("Reprovado!")
}