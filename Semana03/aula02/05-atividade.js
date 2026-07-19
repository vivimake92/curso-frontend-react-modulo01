// Função que calcula a média de duas notas

function calculaMedia(nota1, nota2) {
    const soma = nota1 + nota2
    const media = soma / 2

    return media
}

const resultado = calculaMedia(8, 9)
console.log(resultado)

// ARROW FUNCTION

const media = (nota1, nota2) => (nota1 + nota2) / 2
console.log(media(7, 6))
